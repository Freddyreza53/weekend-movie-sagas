# The Movies Saga

## Description

The main page will show a movie and allow the user to switch between different movies byt clicking on left and right arrows. The user can keep track of where in the list of movies they currently are at by looking beneath the movie image and seeing which circle they are currently at. If the user wants to learn more about a movie, they can click on the movie and it will bring the user to a details page where they can see the title, genres, and description of the movie they selected. If they wish to go back to the movie list page, they will click on a button at the bottom of the screen. 

<img width="1128" alt="Screen Shot 2022-04-10 at 1 04 10 PM" src="https://user-images.githubusercontent.com/92876568/162633228-904afb8a-d90f-45a1-b8a2-aefcd4f724fd.png">

<img width="1412" alt="Screen Shot 2022-04-10 at 1 09 55 PM" src="https://user-images.githubusercontent.com/92876568/162633334-29151ac5-40ba-44b9-8e7b-5bca33733269.png">


A problem I had early on was an error that would occur on refresh of the page. I solved this problem by creating an empty object with an empty genres array. This object was stored in the 'clickedMovie' reducer so that the .map method won't try to loop through undefined variable. 

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
