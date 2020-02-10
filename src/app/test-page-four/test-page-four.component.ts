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
  mockNotes: Note[] = [];
  selectedNote: Note;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //Mock data
    this.mockNotes.push(new Note(1, "blue", "deepskyblue", "Note 1", "Test note 1", "position-one", "fas fa-anchor", "black"));
    this.mockNotes.push(new Note(2, "darkred", "orangered", "Note 2", "Test note 2", "position-two", "fab fa-angrycreative", "black"));
    this.mockNotes.push(new Note(3, "rebeccapurple", "slategray", "Note 3", "Test note 3", "position-three", "fas fa-ankh", "white"));
    this.mockNotes.push(new Note(4, "yellow", "aqua", "Note 4", "Test note 4", "position-four", "fas fa-hat-wizard", "pink"));
    this.mockNotes.push(new Note(5, "black", "darkorange", "Note 5", "Test note 5", "position-five", "fas fa-carrot", "black"));
    this.mockNotes.push(new Note(6, "green", "limegreen", "Note 6", "Test note 6", "position-six", "fab fa-pagelines", "black"));
    this.mockNotes.push(new Note(7, "deeppink", "pink", "Note 7", "Test note 7", "position-seven", "fas fa-heart", "black"));
    this.mockNotes.push(new Note(8, "burlywood", "antiquewhite", "Note 8", "Test note 8", "position-eight", "fas fa-ghost", "black"));

    this.apiService.readPolicies().subscribe((notes: Note[]) => {
      this.notes = notes;
      //this.notes.push(new Note(9, "blue", "deepskyblue", "Note 1", "Test note 1", "position-nine", "fas fa-anchor", "black"));
      //this.notes.push(new Note(10, "darkred", "orangered", "Note 2", "Test note 2", "position-ten", "fab fa-angrycreative", "black"));
      console.log(this.notes);
     });
  }

  newNote() {
    for (var i = 0; i < this.mockNotes.length; i++) {
       this.apiService.createNote(this.mockNotes[i]).subscribe((note: Note) => {
         console.log("Note created, ", note);
         this.notes.push(note);
       });
    }
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
  }
}
