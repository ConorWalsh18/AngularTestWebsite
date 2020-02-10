ALTER TABLE notes
  ADD noteTitle TEXT NOT NULL
    AFTER mainColor;
    
ALTER TABLE notes
  ADD iconColor TEXT NOT NULL
    AFTER icon;