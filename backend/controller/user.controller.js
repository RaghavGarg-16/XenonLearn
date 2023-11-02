const User = require("../models/user.model");
const createError = require("../utils/createError");

const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user._id.toString() !== req.userId)
    return next(createError(403, "Not allowed to delete!"));
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).send("deleted successfully!");
  } catch (err) {
    console.log("deleteUser()", err);
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if ( ! user )  return next(createError( 404 , "user not found " ))
    res.status(200).send(user);
  } catch (err) {
    next(createError(500, "something went wrong"));
  }
};

module.exports = { deleteUser, getUser };

