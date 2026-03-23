const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: {
        type: String,
        select: false,
    },
    userPhoto: String,
    token: {
        type: String,
        select: false,
    },
    friendIds: [{ ref: "users", type: mongoose.Schema.Types.ObjectId }],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
