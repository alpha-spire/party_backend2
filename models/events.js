const mongoose = require("mongoose");

//définition d'un schéma d'évènement
const eventSchema = mongoose.Schema({
  title: String,
  location: String,
  photoEventUrl: String,
  startDate: Date,
  endDate: Date,
  startHour: Date,
  endHour: Date,
  adminId: { ref: "users", type: mongoose.Schema.Types.ObjectId },
  memberIds: [{ ref: "users", type: mongoose.Schema.Types.ObjectId }],
});

//création du modèle mongoose
const Event = mongoose.model("events", eventSchema);

module.exports = Event;
