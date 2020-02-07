import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Note } from '../note';

@Component({
  selector: 'test-page-four',
  templateUrl: './test-page-four.component.html',
  styleUrls: ['./test-page-four.component.css']
})
export class TestPageFourComponent implements OnInit {

  notes: Note[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readPolicies().subscribe((notes: Note[]) => {
      this.notes = notes;
      console.log(this.notes);
    });
  }

  newNote() {
    var testNote = new Note();
    testNote.borderColor = "burlywood";
    testNote.mainColor = "cornsilk";
    testNote.note = "This is a test note 6";
    testNote.noteOrder = "position-six";
    testNote.icon = "fas fa-hat-wizard";

    this.apiService.createNote(testNote).subscribe((note: Note) => {
      console.log("Note created, ", note);
      this.notes.push(note);
    });
  }
}
