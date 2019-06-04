# Friend Finder
## Homework 13

A compatibility based friend-finder app using Express. The user will take a survey and the app will display the user with the best overall compatibility.

Check the app out on [Heroku](https://jooya-friendfinder.herokuapp.com/).

### Requirements
* A survey with 10 questions. Each answer will be rated on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
* A `server.js` file using `express` and `path` NPM packages.
* A `htmlRoutes.js` file that includes:
    * A GET Route to /survey which should display the survey page.
    * A default, catch-all route that leads to home.html which displays the home page.
* A `apiRoutes.js` file that contains two routes:
    * A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    * A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
* The application's data is saved inside of app/data/friends.js as an array of objects.
