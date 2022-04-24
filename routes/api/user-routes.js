const router = require('express').Router();
const { 
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controllers')

// api/users
router
.route('/')
.post(createUser)
.get(getAllUsers)

// api/users/:id
router
.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

router
.route('/:userId/:friendId')
.put(addFriend)
.delete(removeFriend)

module.exports = router;


