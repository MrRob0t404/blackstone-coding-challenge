var express = require("express");
var router = express.Router();
const db = require("../db/queries");

/* GET home page. */
router.get("/", function (req, res) {
  res.json({ message: "hi" });
});

router.get("/api/meeting-rooms", db.getMeetingRooms); //gets all meeting rooms
router.post("/api/meeting-rooms", db.createMeetingRoom); //creates meeting rooms
router.get("/api/meeting-rooms/:id", db.getMeetingRoomById); //gets meeting room by id
router.get("/api/meeting-rooms/:id/bookings", db.getFutureBookings); //gets all future bookings of a meeting room
router.get("/api/bookings/", db.getBookings); //creates a booking for a meeting room
router.get("/api/bookings/id", db.getBookingById); //creates a booking for a meeting room
router.post("/api/bookings", db.getMeetingRoomBookings); //creates a booking for a meeting room
router.delete("/api/bookings/:id", db.deleteBooking); //cancel a booking

// todo
// required endpoints
// /api/meeting-rooms/available`;

module.exports = router;

/*
 * /api/meeting-rooms - GET - done
 * /api/meeting-rooms - POST - done
 * /api/meeting-rooms/:id - GET - done
 * /api/meeting-rooms/:id/bookings - GET - done
 * /api/bookings - GET - done
 * /api/bookings/:id - GET - done
 * /api/bookings - POST
 * /api/bookings/:id - DELETE
 */
