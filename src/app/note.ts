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

  public Validate() {
    var errorMessages = [];

    if (this.icon == null || this.icon.length < 1) {
      errorMessages.push({severity:'error', summary:'Validation Error', detail:'An Icon must be selected', missingField:"icon"});
    }
    
    if (this.noteOrder == null || this.noteOrder.length < 1) {
      errorMessages.push({severity:'error', summary:'Validation Error', detail:'A Note Order must be selected', missingField:"noteOrder"});
    }
    
    if (this.noteTitle == null || this.noteTitle.length < 1) {
      errorMessages.push({severity:'error', summary:'Validation Error', detail:'A Note Title must be selected', missingField:"noteTitle"});
    }

    return errorMessages;
  }
}
