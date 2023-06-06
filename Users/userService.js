const usersDao = require('./userDao')

function findUser(email,done){
    usersDao.findUser(email,done)
}

function registerUser(userData,done){
    usersDao.registerUser(userData,done)
}

module.exports = {
    findUser,registerUser
}