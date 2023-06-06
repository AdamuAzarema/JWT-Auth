 ##To start the app on terminal use node app.js

This is a simple authentication Demontration using JWT token(Authorization). There are two folders in the project directory, the authentication and the users folder.And I use layers to define the files in each of the two folders as follows:

1 - Authentication - To define the authentication- it contains the following layers
   - authMiddleware 
   - authService
   - authController
   - authRouter

2 - Users

  - userDao layer =  Getting data from users.json file and passing to userService layer
  - userService layer = Getting info from Dao and passing to userController layer
  - userController layer = Getting info from userService and passing to userRouter
  - userRouter layer = Getting data info from userController

3-The paths to Users, authentication and authMiddleware are added in the app.js file.

4- ENDPOINTS
  -To register user = POST-http://localhost:3000/auth/register using name,email and password
  -To login = POST-http://localhost:3000/auth/login  this will return a JWT token after succesful login using email and password of a registered user
  -To find a user(logged user) = GET- http://localhost:3000/users and adding the JWT Token obtained from login

EndP