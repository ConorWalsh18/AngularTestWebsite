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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //TODO: Add icon color option and note title
    this.notes.push(new Note(1, "blue", "deepskyblue", "Note 1", "Test note 1", "position-one", "fas fa-anchor"));
    this.notes.push(new Note(2, "darkred", "orangered", "Note 2", "Test note 2", "position-two", "fab fa-angrycreative"));
    this.notes.push(new Note(3, "rebeccapurple", "slategray", "Note 3", "Test note 3", "position-three", "fas fa-ankh"));
    this.notes.push(new Note(4, "yellow", "aqua", "Note 4", "Test note 4", "position-four", "fas fa-hat-wizard"));
    this.notes.push(new Note(5, "black", "darkorange", "Note 5", "Test note 5", "position-five", "fas fa-carrot"));
    this.notes.push(new Note(6, "green", "limegreen", "Note 6", "Test note 6", "position-six", "fab fa-pagelines"));
    this.notes.push(new Note(7, "deeppink", "pink", "Note 7", "Test note 7", "position-seven", "fas fa-heart"));
    this.notes.push(new Note(8, "burlywood", "antiquewhite", "Note 8", "Test note 8", "position-eight", "fas fa-ghost"));

    this.selectedNote = this.notes[0];

    // this.apiService.readPolicies().subscribe((notes: Note[]) => {
    //   this.notes = notes;
    //   console.log(this.notes);
    // });
  }

  newNote() {
    // var testNote = new Note();
    // testNote.borderColor = "burlywood";
    // testNote.mainColor = "cornsilk";
    // testNote.note = "This is a test note 6";
    // testNote.noteOrder = "position-six";
    // testNote.icon = "fas fa-hat-wizard";

    // this.apiService.createNote(testNote).subscribe((note: Note) => {
    //   console.log("Note created, ", note);
    //   this.notes.push(note);
    // });
  }

  showNote(note: Note) {
    if (this.moveNoteButton && this.selectedNote === note) {
      this.showNoteSection = false;

      setTimeout(() => {
        this.moveNoteButton = false;
      }, 100)
    }
    else {
      this.selectedNote = note;
      this.moveNoteButton = true;

      setTimeout(() => {
        this.showNoteSection = true;
      }, 200)    
    }

    // this.selectedNote = note;

    // if (!this.moveNoteButton) {
    //   this.moveNoteButton = !this.moveNoteButton;    
    //   setTimeout(() => {
    //     this.showNoteSection = !this.showNoteSection;
    //   }, 200)
    // }
    // else if (this.moveNoteButton && this.selectedNote === note) {
    //   this.showNoteSection = !this.showNoteSection;
    //   setTimeout(() => {
    //     this.moveNoteButton = !this.moveNoteButton;
    //   }, 100)
    // }
  }
}
