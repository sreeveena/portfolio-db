CREATE DATABASE projects_db;
USE projects_db;
drop table projects;

CREATE TABLE projects (
  id int AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(1000),
  link varchar (500),
  image MEDIUMBLOB NOT NULL,
  href VARCHAR(100),
  PRIMARY KEY(id)
);
