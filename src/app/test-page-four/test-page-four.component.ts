import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Note } from '../note';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Message } from 'primeng//api'
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'test-page-four',
  templateUrl: './test-page-four.component.html',
  styleUrls: ['./test-page-four.component.css'],
  animations: [
    trigger('moveNoteButton', [
      state('moveDown', style({ top: '90%' })),
      state('moveUp', style({ top: '60%' })),
      transition('* <=> *', [animate('0.4s ease-in-out')])
    ]),
    trigger('showContent', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('hide => show', [animate('0.5s ease-in-out')]),
      transition('show => hide', [animate('0.3s ease-in-out')])
    ])
  ]
})
export class TestPageFourComponent implements OnInit {

  moveNoteButton: boolean;
  showNoteSection: boolean;
  notes: Note[] = [];
  selectedNote: Note;
  noteFormModel: Note;
  showNoteModal: boolean = false;
  modalAction: string;
  iconOptions: SelectItem[] = [];
  noteOrderOptions: SelectItem[] = [];
  formMessages: any[] = [];
  pageMessages: Message[] = [];
  confirmationHeader: string;
  confirmationLabel: string;
  showConfirmationRejectLabel: boolean = true;

  constructor(private apiService: ApiService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    //TODO: Add arrow navigation button to the bottom right corner of all screens

    this.getNotes();

    this.iconOptions = [
      { label: 'Anchor', value: 'fas fa-anchor' },
      { label: 'Carrot', value: 'fas fa-carrot' },
      { label: 'Ghost', value: 'fas fa-ghost' },
      { label: 'Cocktail', value: 'fas fa-cocktail' },
      { label: 'Birthday Cake', value: 'fas fa-birthday-cake' },
      { label: 'Wizard Hat', value: 'fas fa-hat-wizard' },
      { label: 'Dragon', value: 'fas fa-dragon' },
      { label: 'Frog', value: 'fas fa-frog' },
      { label: 'Dove', value: 'fas fa-dove' },
      { label: 'Dog', value: 'fas fa-dog' },
      { label: 'Lemon', value: 'fas fa-lemon' },
      { label: 'Paper Plane', value: 'fas fa-paper-plane' },
      { label: 'Tree', value: 'fas fa-tree' },
      { label: 'Ice Cream', value: 'fas fa-ice-cream' },
      { label: 'Crown', value: 'fas fa-chess-king' }
    ];

    this.noteOrderOptions = [
      { label: 'Position 1', value: '1' },
      { label: 'Position 2', value: '2' },
      { label: 'Position 3', value: '3' },
      { label: 'Position 4', value: '4' },
      { label: 'Position 5', value: '5' },
      { label: 'Position 6', value: '6' },
      { label: 'Position 7', value: '7' },
      { label: 'Position 8', value: '8' },
      { label: 'Position 9', value: '9' },
      { label: 'Position 10', value: '10' }
    ];
  }

  showNote(note: Note) {
    //Close note section
    if (this.moveNoteButton && this.selectedNote === note) {
      this.closeNoteSection();
    }
    //Open note section
    else {
      this.selectedNote = note;
      this.moveNoteButton = true;

      setTimeout(() => {
        this.showNoteSection = true;
      }, 200)    
    }
  }

  closeNoteSection() {
    this.showNoteSection = false;

    setTimeout(() => {
      this.moveNoteButton = false;
      this.selectedNote = null;
    }, 100)
  }

  newNote(noteOrder: any = null) {
    if (this.notes.length === 10) {
      this.showConfirmationDialog("Note Limit Reached", "Ok", false, "You can only have 10 notes at a time.");
    }
    else {
      this.formMessages = [];
      this.modalAction = "New";
      this.noteFormModel = new Note(null, "black", "white", null, null, noteOrder, "fas fa-question", "black");
      this.closeNoteSection();
      this.showNoteModal = true;
    }
  }

  editNote() {
    this.formMessages = [];
    this.modalAction = "Edit";

    //TODO: Fix this
    this.noteFormModel = new Note(this.selectedNote.id, this.selectedNote.borderColor, this.selectedNote.mainColor,
      this.selectedNote.noteTitle,this.selectedNote.note, this.selectedNote.noteOrder, this.selectedNote.icon,
      this.selectedNote.iconColor);

    this.closeNoteSection();
    this.showNoteModal = true;
  }

  createNote() {
    console.log("Note form model = , ", this.noteFormModel);
    this.formMessages = this.noteFormModel.Validate();

    if (this.formMessages.length === 0) {
      //TODO: Maybe add a dialog asking if the user wants to change the note order of the existing note to the next available spot
      this.checkExistingNoteOrder(this.noteFormModel.noteOrder);
  
      if (this.modalAction === "New") {
        this.apiService.createNote(this.noteFormModel).subscribe((note: Note) => {
          this.notes.push(note);
        });
      }
      else {
        this.apiService.updateNote(this.noteFormModel).subscribe((note: Note) => {
          this.getNotes();
        });
      }
  
      this.showNoteModal = false;
    }
  }

  getNotes() {
    this.apiService.readPolicies().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }

  deleteNote() {
    this.showConfirmationDialog("Delete Note", "Yes", true, "Do you want to delete note " + this.selectedNote.noteTitle + "?", "delete");
  }

  checkExistingNoteOrder(noteOrder: any) {
    var existingNotePositions = [];
    var existingNoteOrderIndex;

    for (var i = 0; i < this.notes.length; i++) {
      existingNotePositions.push(Number(this.notes[i].noteOrder));
    }

    existingNotePositions = existingNotePositions.sort((n1, n2) => n1 - n2);
    existingNoteOrderIndex = this.notes.findIndex(item => item.noteOrder === noteOrder.toString());

    if (existingNoteOrderIndex != -1 && this.notes[existingNoteOrderIndex].id != this.noteFormModel.id) {
      for (var i = 0; i < existingNotePositions.length; i++) {
        if (existingNotePositions[i] - i != 1) {
          this.changeExistingNoteOrder(noteOrder, existingNoteOrderIndex, i);
          break;
        }
        else if (existingNotePositions.length - 1 === i) {
          this.changeExistingNoteOrder(noteOrder, existingNoteOrderIndex, i + 1);
        }
      }

      this.apiService.updateNote(this.notes[existingNoteOrderIndex]).subscribe((note: Note) => {
        console.log(note);
      });
    }
  }

  changeExistingNoteOrder(noteOrder: any, existingNoteOrderIndex: any, i: number) {
    var nextAvailablePosition;
    nextAvailablePosition = i + 1;
    existingNoteOrderIndex = this.notes.findIndex(item => item.noteOrder === noteOrder.toString());
    this.notes[existingNoteOrderIndex].noteOrder = nextAvailablePosition.toString();
  }

  checkMissingField(field: string) {
    return this.formMessages.find(item => item.missingField === field);
  }

  showConfirmationDialog(header: string, acceptLabel: string, showRejectLabel: boolean, message: string, action: string = null) {
    this.confirmationHeader = header;
    this.confirmationLabel = acceptLabel;
    this.showConfirmationRejectLabel = showRejectLabel;

    this.confirmationService.confirm({
      message: message,
      accept: () => {
        if (action === "delete") {
          this.closeNoteSection();

          this.apiService.deleteNote(this.selectedNote.id).subscribe((note: Note) => {
            this.showPageMessages('success', 'Success', 'Note ' + this.selectedNote.noteTitle + ' was deleted successfully.');
            this.getNotes();
          });
        }
      }
    });
  }

  showPageMessages(severity: string, summary: string, detail: string) {
    this.pageMessages = [{severity: severity, summary: summary, detail: detail}];

    setTimeout(() => {
      this.pageMessages = [];      
    }, 2200);
  }

  hidePlaceHolder(placeHolderPosition: any) {
    if (this.notes.length > 0 && this.notes.find(item => item.noteOrder === placeHolderPosition)) {
      return "hidden";
    }
    else {
      return "visible";
    }
  }
}
