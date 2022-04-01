const db = require("./index");

function getMeetingRooms(req, res) {
  db.any("SELECT * FROM meeting_rooms;", {})
    .then((data) => {
      res.status(200).json({ meeting_rooms: data });
    })
    .catch((err) => {
      console.log(`err on getting meeting room`, err);
      res.status(500).json({ message: `FAILED: getMeetingRooms` });
    });
}

function createMeetingRoom(req, res) {
  db.none(
    "INSERT INTO meeting_rooms (meeting_room_id, name, capacity, floor) VALUES(${meeting_room_id" +
      "}, ${name}, ${capacity}, ${floor})",
    {
      meeting_room_id: 666666,
      name: "name2",
      capacity: 5,
      floor: 5,
    }
  ).then(() => console.log("sucess"));
}

function getMeetingRoomById(req, res) {
  console.log(`req.params`, req.params.id);
  db.one(
    "SELECT * FROM meeting_rooms WHERE meeting_room_id=${meeting_room_id};",
    {
      meeting_room_id: req.params.id,
    }
  )
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched meeting room",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: `FAILED: Meeting room does not exisit` });
    });
}

function getFutureBookings(req, res) {
  db.any("SELECT * FROM bookings;", {})
    .then((data) => {
      res.status(200).json({ meeting_rooms: data });
    })
    .catch((err) => {
      console.log(`err on getting meeting room`, err);
      res.status(500).json({ message: `FAILED: getMeetingRooms` });
    });
}

function getBookings(req, res) {
  db.any("select * from bookings;", {})
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched all bookings",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: `FAILED: Could not get all bookings` });
    });
}

function getMeetingRoomBookings(req, res) {
  console.log(`req.params`, req.params.id);
  db.any(
    "select * from bookings where meeting_room_id=3 and start_time >= now();",
    {
      meeting_room_id: req.params.id,
    }
  )
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched meeting room",
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `FAILED: Meeting room bookings does not exisit` });
    });
}

function getBookingById(req, res) {
  console.log(`req.params`, req.params.id);
  db.one("SELECT * FROM bookings WHERE booking_id=${booking_id};", {
    booking_id: req.params.id,
  })
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched meeting room",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: `FAILED: Meeting room does not exisit` });
    });
}

function deleteBooking(req, res) {
  db.one("delete from meeting_rooms where booking_id=${booking_id};", {
    booking_id: req.params.id,
  })
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Successfully canceled a booking",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: `FAILED: Could not cancel booking` });
    });
}

module.exports = {
  getMeetingRooms,
  createMeetingRoom,
  getMeetingRoomById,
  getFutureBookings,
  getBookings,
  getBookingById,
  getMeetingRoomBookings,
  deleteBooking,
};
