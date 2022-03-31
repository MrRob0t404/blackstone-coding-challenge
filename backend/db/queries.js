const db = require("./index");

function getMeetingRooms(req, res) {
  db.any("SELECT * FROM meeting_rooms", {}).then((data) => {
    res.status(200).json({ meeting_rooms: data });
  });
}

module.exports = {
  getMeetingRooms,
};
