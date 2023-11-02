# 18SocialAPI

## Description 
An API created with Express.js, MongoDB, and the Mongoose npm module. Users, Thoughts, and Reactions are the three main data models that the API is intended to help manage. 

MongoDB Database: To store and retrieve data quickly, the API effortlessly connects with MongoDB, a dependable NoSQL database.

HTTP Methods: The API offers developers a flexible and comprehensive set of HTTP methods, including GET, PUT, POST, and DELETE.

## Installation 
To install the necessary dependencies, run the following command:

npm i
npm install express@4.17.1
npm install mongoose@7.0.2

## Usage 
Clone the repository to your local system.
Install dependencies to the project directory and typing npm install to get everything set up.
Make sure you have a MongoDB instance running locally or on a remote server before setting up MongoDB. Set up the connection information as necessary in your application code.
Run the application by using a process manager node server.js to start the Express.js server.
Explore the API: By sending HTTP queries to the specified routes, you can now explore the API.


Following are the API routes:

GET all users
/api/users

POST a new user:
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
/api/users/:userId

GET a single user by its _id and populated thought and friend data
PUT to update a user by its _id
DELETE to remove user by its _id
/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list
DELETE to remove a friend from a user's friend list
/api/thoughts

GET to get all thoughts
POST to create a new thought
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
}
/api/thoughts/:thoughtId

GET to get a single thought by its _id
PUT to update a thought by its _id
DELETE to remove a thought by its _id
/api/thoughts/:thoughtId/reactions

POST to create a reaction stored in a single thought's reactions array field
/api/thoughts/:thoughtId/reactions/:reactionId

DELETE to pull and remove a reaction by the reaction's reactionId value
Following is a video demonstrating how to run the application. 

https://youtu.be/wC3KGlUaaxw

## License 
This project is licensed under The MIT License. Here is the link to the license to access more information for your reference: https://opensource.org/licenses/MIT

