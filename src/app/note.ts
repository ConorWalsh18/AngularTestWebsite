export class Note {
  id: number;
  borderColor: string;
  mainColor: string;
  noteTitle: string;
  note: string;
  noteOrder: string;
  icon: string;

  constructor(id: number, borderColor: string, mainColor: string, noteTitle: string, note: string, noteOrder: string, icon: string) {
    this.id = id;
    this.borderColor = borderColor;
    this.mainColor = mainColor;
    this.noteTitle = noteTitle;
    this.note = note;
    this.noteOrder = noteOrder;
    this.icon = icon;    
  }
}
