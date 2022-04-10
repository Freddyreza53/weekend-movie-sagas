# The Movies Saga

## Description

The main page will show a movie and allow the user to switch between different movies byt clicking on left and right arrows. The user can keep track of where in the list of movies they currently are at by looking beneath the movie image and seeing which circle they are currently at. If the user wants to learn more about a movie, they can click on the movie and it will bring the user to a details page where they can see the title, genres, and description of the movie they selected. If they wish to go back to the movie list page, they will click on a button at the bottom of the screen.

A problem I had early on was an error that would occur on refresh of the page. I solved this problem by creating an empty object with an empty genres array. This object was stored in the 'clickedMovie' reducer so that the .map method won't try to loop through undefined variable.

## Screen Shot

### Movie List Page
<img width="1128" alt="Screen Shot 2022-04-10 at 1 04 10 PM" src="https://user-images.githubusercontent.com/92876568/162633228-904afb8a-d90f-45a1-b8a2-aefcd4f724fd.png">

### Movie Details Page
<img width="1412" alt="Screen Shot 2022-04-10 at 1 09 55 PM" src="https://user-images.githubusercontent.com/92876568/162633334-29151ac5-40ba-44b9-8e7b-5bca33733269.png">

## Prerequisites

* Node.js
* Express
* PG

## Installation

1. Create database named "saga_movies_weekend"
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an 'npm install'.
4. Use 'npm run server' in one terminal.
5. Use 'npm run client' in another terminal.
6. Open browser and visit localhost:3000 to use site.

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at rezafreddy@gmail.com
