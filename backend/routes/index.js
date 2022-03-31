var express = require("express");
var router = express.Router();
const db = require("../db/queries");

/* GET home page. */
router.get("/", function (req, res) {
  res.json({ message: "hi" });
});

router.get("/api/meeting-rooms", db.getMeetingRooms);

// required endpoints
// `/api/meeting-rooms` //GET
// `/api/meeting-rooms` //POST
// `/api/meeting-rooms/:id` //GET
// `/api/meeting-rooms/:id/bookings` //GET
// `/api/bookings` //POST
// `/api/bookings/:id``/api/bookings``/api/bookings/:id``/api/meeting-rooms/available`;

module.exports = router;
