# HI-CAMP

Inspired by Hipcamp, HI-CAMP is a single page recreational app where users can explore available outdoor recreational vacation spots. Users can view the available spots for booking their next camping, glamping, or lodging spots in unique locations. 

## Key Features include: Full CRUD features for Spots and Reviews

## Links
* [Live Site](https://hi-camp.onrender.com/)
* [MVP Feature List](https://github.com/lamarjd/Hip_camp/wiki/MVP-Feature-List)
* [Database Schema](https://github.com/lamarjd/Hip_camp/wiki/Schema)
* [User Stories](https://github.com/lamarjd/Hip_camp/wiki/User-Stories)

# Project Pages and Features
* Any user (signed in or not) can browse available spots and reviews
![image](https://user-images.githubusercontent.com/98356168/205563114-29fc0ec1-d537-4722-ba2a-e4f4666eaeaf.png)

![image](https://user-images.githubusercontent.com/98356168/205563514-cc9f8f7b-4b18-4b08-ab9b-57e45000c38e.png)


* Any user who navigates to a page not found will be redirected to the 404 page
![image](https://user-images.githubusercontent.com/98356168/205563382-83299013-1f6f-4043-b3ae-638a5ab5861c.png)



# Getting Started with Flask React Project - HI-CAMP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the starter for the Flask React Project. 

1. Clone the repository

```bash
 git clone https://github.com/lamarjd/Hip_camp
 ```

## Available Scripts

Before starting with the next steps, ensure you cd in to the app (backend) directory to make sure you have base dependencies for running this app.

=================================================

2. Install dependencies (Backend / Flask)

```bash
  pipenv install -r requirements.txt
  ```

To generate a new requirements.txt run this command

```bash
 pipenv requirements > requirements.txt
 ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app
   
```bash
 pipenv shell 
 ```
   
```bash
 flask db upgrade
 ```
   
```bash
 flask seed all 
 ```
   
```bash
 flask run 
 ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

Before starting with the next steps, ensure you cd in to the react-app directory to make sure you have base dependencies for running this app.

=================================================

In the project directory, you can run:

```bash
 npm install
 ```

To start the application, run the following command:

```bash
 npm start
 ```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Flask check out the [Flask documentation](https://flask.palletsprojects.com/en/2.2.x/).

To learn SQLAlchemy check out the [SQLAlchemy documentation](https://www.sqlalchemy.org/).

To learn WTForms check out the [WTForms documentation](https://wtforms.readthedocs.io/en/2.3.x/).

# Contact The Project Developer

## Jake Lamar
Email: jacob.lamar16@gmail.com

Github: https://github.com/lamarjd

LinkedIn: https://www.linkedin.com/in/jacob-lamar-73449040/
