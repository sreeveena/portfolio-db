CREATE DATABASE projects_db;
USE projects_db;
drop table projects;

CREATE TABLE projects (
  id int AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(1000),
  link varchar (500),
  image BLOB NOT NULL,
  PRIMARY KEY(id)
);

insert into projects values (1, 
'Train Schedule', 
'<p> In this train schedule assignment the program will take following input value from user: Train name, destination, first train time and frequency of train on click of the submit button and calculate next arrival time and number of minutes away from the station and gives the information to the user.</p> <p>Technologies used: HTML, CSS, Bootstrap, Javascript, Jquery, and firebase </p>',
 'https://sreeveena.github.io/TrainSchedule/',
 '/Users/sree/Documents/Assignments/portfolio-db/public/images/train.png');