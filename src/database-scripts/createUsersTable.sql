drop table users;

create table users (
  id INT NOT NULL AUTO_INCREMENT,
  firstName TEXT,
  lastName TEXT,
  userName TEXT,
  password TEXT,  
  PRIMARY KEY (id)
);