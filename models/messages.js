const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  _userId: { ref: "users", type: mongoose.Schema.Types.ObjectId },
  message: String,
  eventId: { ref: "events", type: mongoose.Schema.Types.ObjectId },
  date: Date,
});

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;
