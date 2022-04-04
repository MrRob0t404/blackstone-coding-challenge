import React, { useState, useEffect } from "react";
import ".././styles/homeStyles.css";

//import nessesary components
import MeetingRoomCard from "./MeetingRoom/MeetingRoomCard";
import MUIForm from "./MUIComponents/MUIForm";

const Home = (props) => {
  const { meetingRooms, message } = props;
  return (
    <div id="find-results">
      <MUIForm findMeetingRooms={props.findMeetingRooms} />
      {message ? (
        <div className="adjust-width-find-room-message">
          <h1>{message}</h1>
        </div>
      ) : (
        ""
      )}
      <div id="find-results">
        {meetingRooms.map((ele) => (
          <MeetingRoomCard
            key={ele.meeting_room_id}
            meeting_room_id={ele.meeting_room_id}
            name={ele.name}
            capacity={ele.capacity}
            floor={ele.floor}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
