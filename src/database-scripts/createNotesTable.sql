drop table notes;

create table notes (
  id INT NOT NULL AUTO_INCREMENT,
  borderColor TEXT,
  mainColor TEXT,
  noteTitle TEXT,
  note TEXT,
  noteOrder INT,
  icon TEXT,
  iconColor TEXT,
  PRIMARY KEY (id)
);