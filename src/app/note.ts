export class Note {
  id: number = 1;
  borderColor: string = "";
  mainColor: string = "";
  noteTitle: string = "";
  note: string = "";
  noteOrder: string = "";
  icon: string = "";
  iconColor: string = "";

  constructor(id: number, borderColor: string, mainColor: string, noteTitle: string, note: string, noteOrder: string, icon: string, iconColor: string) {
    this.id = id;
    this.borderColor = borderColor;
    this.mainColor = mainColor;
    this.noteTitle = noteTitle;
    this.note = note;
    this.noteOrder = noteOrder;
    this.icon = icon;
    this.iconColor = iconColor;
  }
}
