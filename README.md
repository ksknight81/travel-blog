# Travel Blog

## Description
A website where users can post about and rate cities they've traveled to.

## Table of Contents
[Installation Instructions](#installation-instructions)   
[Built With](#built-with)  
[Deployed Application](#deployed-application)  
[Contribution](#contribution)  

## Installation Instructions
npm, Node.js, Express.js, MySQL, MySQL2, Sequelize, dotenv, bcrypt, Handlebars and sessions must be installed to use this application.

* To initialize npm, enter "npm init" in terminal while in the root folder of the project
* Node.js can be downloaded and installed from https://nodejs.org/en/download/  
* MySQL can be downloaded and installed from https://dev.mysql.com/downloads/mysql/
* To install Express.js, MySQL2 and Sequelize, enter "npm install express sequelize mysql2" in terminal while in the root folder of the project
* To install the dotenv package, enter "npm install dotenv" in terminal while in the root folder of the project
* To install the bcrypt package, enter "npm install bcrypt" in terminal while in the root folder of the project 
* To install handlebars, enter "npm install express-handlebars" in terminal while in the root folder of the project 
* To install sessions, enter "npm i express-session connect-session-sequelize" in terminal while in the root folder of the project 

Once the above steps have been followed, follow the steps below to run the application: 
* Enter the database name, your MySQL username and your password into the .env file
* Enter "mysql -u root -p" and enter your MySQL password to navigate to the MySQL Shell
* Enter "source db/schema.sql" in the MySQL Shell to create the "travel_db" database
* Enter "npm start" in terminal to launch live server

## Built With
* Node.js
* JavaScript

Link to deployed application:  https://obscure-bayou-98078.herokuapp.com/home

Screenshot of application:
![alt_tag](https://github.com/ksknight81/travel-blog/blob/main/public/images/travelblogimage.png)