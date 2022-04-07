# Simple Meeting Booker Application

## Here are quick and simple steps to get this projct up and running!

### Step 1. seed database

- navigate your way to /backend/db/database.sql
- in you terminal, type 'psql' then \i path-to-database.sql file
  _note: dont use the relative path to seed the database. Instead, use the fullpath to the sql file_

### Step 2. start the backend

- navigate over to /backend
- npm install all dependancies
- npm start to start the backend server

### Step 3. start the frontend

- navigate over to /frontend
- npm install all dependancies
- npm start to start the frontend

## Meeting Booker core functionalites

Mainly used as an admin tool, the admin would be able to do the following:

- #### Room management:

* View all meeting rooms
* Create a meeting room
* View room bookings

#### Booking management:

- View all bookings
- Book a meeting room
- Cancel booking
- Find available rooms 

## Known issues 
- When cancelling a booking, the state of the booking ID is not saved 
- How to reproduce: 
  Click into a booking you want to cancel, click into the booking again and you will notice the URL ID parameter is now undefined this prevents the room from being canceled. 