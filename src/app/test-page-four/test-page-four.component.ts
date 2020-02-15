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
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
  mockNotes: Note[] = [];
  selectedNote: Note;
  noteFormModel: Note;
  showNoteModal: boolean = false;
  modalAction: string;
  iconOptions: SelectItem[] = [];
  noteOrderOptions: SelectItem[] = [];
  formMessages: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //Mock data
    //this.mockNotes.push(new Note(1, "blue", "deepskyblue", "Note 1", "Test note 1", "position-one", "fas fa-anchor", "black"));
    //this.mockNotes.push(new Note(2, "darkred", "orangered", "Note 2", "Test note 2", "position-two", "fab fa-angrycreative", "black"));
    //this.mockNotes.push(new Note(3, "rebeccapurple", "slategray", "Note 3", "Test note 3", "position-three", "fas fa-ankh", "white"));
    //this.mockNotes.push(new Note(4, "yellow", "aqua", "Note 4", "Test note 4", "position-four", "fas fa-hat-wizard", "pink"));
    //this.mockNotes.push(new Note(5, "black", "darkorange", "Note 5", "Test note 5", "position-five", "fas fa-carrot", "black"));
    //this.mockNotes.push(new Note(6, "green", "limegreen", "Note 6", "Test note 6", "position-six", "fab fa-pagelines", "black"));
    //this.mockNotes.push(new Note(7, "deeppink", "pink", "Note 7", "Test note 7", "position-seven", "fas fa-heart", "black"));
    //this.mockNotes.push(new Note(8, "burlywood", "antiquewhite", "Note 8", "Test note 8", "position-eight", "fas fa-ghost", "black"));

    this.getNotes();

    this.iconOptions = [
      { label: 'Anchor', value: 'fas fa-anchor' },
      { label: 'Carrot', value: 'fas fa-carrot' },
      { label: 'Ghost', value: 'fas fa-ghost' }
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

  newNote() {
    this.modalAction = "New";
    this.noteFormModel = new Note(null, "black", "white", null, null, null, "fas fa-question", "black");
    this.closeNoteSection();
    this.showNoteModal = true;
  }

  editNote() {
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

  deleteNote(id: number) {
    this.closeNoteSection();

    this.apiService.deleteNote(id).subscribe((note: Note) => {
      this.getNotes();
    });;
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
}
