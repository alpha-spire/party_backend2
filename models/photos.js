const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
    _userId: { ref: "users", type: mongoose.Schema.Types.ObjectId },
    uri: String,
    eventId: { ref: "events", type: mongoose.Schema.Types.ObjectId },
    date: Date,
});

const Photo = mongoose.model("photos", photoSchema);

module.exports = Photo;
