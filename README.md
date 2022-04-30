
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 # Pat-Social
 ## *Table of Contents*
1. [Description](#description)
2. [Usage Information](#usage-information)
3. [Installation Instructions](#installation-instructions)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License Info](#license-info)

 _ _ _
 ## *Description*
 ### This is my week 18 challenge to build an API for a social network application where users can share their thoughts, react to friends' thoughts, and create a friend list. The challenge requires Express.js for routing, MongoDB database and the Mongoose ODM. 

This webserver provides two databases users and thoughts for a social media application.  

- The 'users' routes listed below allow functionality to create, read, update, and delete users.  Additional user routes provide for adding and deleting friends to the respective user.  
- The 'thoughts' routes listed below allow functionality to create, read, update and delete a particular user's thoughts (e.g. posts). Additional thought routes provide users to add/delete their reactions (e.g. replies) to the original thought that was posted.
- Additionally, deleting a user will also delete all of their respective thoughts.  

Listed below are additional resources for the application:  
- [GitHub Repository](https://github.com/pjlawler/pat-social)  
- [Walkthrough Video](https://drive.google.com/file/d/1PS9ISWgIDFXxrszpfeWVFcL-tyTrw_X4/view)


 _ _ _
 ## *Usage Information*
  After proper installation of the npm modules, use **"npm start"** To get the webserver up and running.  Port 3001 is the 'hardcoded port that will be served.  Use the following routes to manipulate the 'user' and 'thought' database:
  ```Create a user - POST api/users/
  Get all users - GET api/users/
  Get a user - GET api/users/:id
  Update a user - PUT api/users/:id
  Delete a user - DELETE api/users/:id
  Add a friend - PUT api/users/:userId/friends/:friendId
  Delete a friend - DELETE api/users/:userId/friends/:friendId

  Create a thought - POST api/thoughts/:userId
  Get all thoughts - GET api/thoughts/
  Get a thought by Id - GET api/thoughts/:thoughtId
  Update a thought - PUT api/thoughts/:thoughtId
  Delete a thought - DELETE api/thoughts/:thoughtId
  Add a reaction - POST api/thoughts/:thoughtId/reactions/:userId
  Delete a reaction - DELETE api/thoughts/:thoughtId/reactions/:reactionId
  ```
  - - -
 ## *Installation Instructions*
  Make sure you run npm install to install all of the required dependencies.
  - - -
 ## *Tests*
  Use Insomnia or some other API interface to test the routes listed above.
  - - -
 
 ## *Questions*
 ###   For questions or comments concerning this project please contact, Patrick Lawler, the author, owner and manager the work via either github or email. Links for each are listed below.
 - GitHub - [pjlawler](https://github.com/pjlawler) 
 - eMail - patlaw777@icloud.com
 _ _ _
 ## *License Info*
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  Copyright Ⓒ 2022 Patrick Lawler
      
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

