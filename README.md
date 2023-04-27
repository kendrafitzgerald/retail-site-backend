# retail-site-backend

## Description

I was motivated to build a backend to an ecommerce website so that the company's manager can compete with other companies. I built this project to serve as an interface for the manager to retrieve, create, update, and delete the data on their site by organzing their products, categories, and product tags in the database. This app solves the problem of allowing an ecommerce site manager to have a simple way to keep track of their data and have the ability to change it as they wish. This app utilizes the technologies MySql, Sequelize, Node.js, Dotenv, and Insomnia to view the routes on the backend. I learned how to effectively tie together Node.Js and Sequelize to retrieve and manipulate data through server routes.


## Installation

To install this app, git clone the repository into your terminal. Steps for usage will be included in the Usage section of the ReadMe. 

## Usage

Once you have cloned the repository into your terminal, enter the MySql shell by running the following: mysql -u root -p. Once you enter your password, run SOURCE db/schema.sql to drop the database if it already exists and recreate it. Then enter quit to exit the mysql shell. In your terminal, run seeds/index.js to seed your database. Next, run node server.js to run your server. To view the routes present in the code, navigate to insomnia and enter the HTTP route for each route you are trying to hit. Below is a video walkthrough of the steps to use this application as well as the insomina routes. 

[E-Commerce Site WalkThrough Video](https://drive.google.com/file/d/1021oq46Y8lBKSgSUY8Tk5jOaK8HrlXpN/view)

## Credits

This application utilizes Insomnia to visualize server routes. Screencastify was used for the video walkthrough. 


## How to Contribute

If you would like to contribute to this project, please reach out to me via email @ kendrajfitzgerald@gmail.com. I would love any advice on how to improve this project. 
