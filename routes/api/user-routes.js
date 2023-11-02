// Initialize express router
const router = require("express").Router();
// Import user controller
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addNewFriend,
    removeFriend,
} = require("../../controllers/user-controller.js");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router
    .route("/:userId")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addNewFriend).delete(removeFriend);

module.exports = router;