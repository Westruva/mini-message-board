# Mini Message Board

A simple message board built with Node.js, Express, and EJS. Visitors can view recent messages, add a message with their name, and return to the home page to see the new post. The interface uses a responsive sky-blue theme and server-rendered templates.

## Features

- View all messages on the home page
- Add a name and message through the `/new` form
- Automatically record the date and time of each message
- Responsive styling for desktop and mobile screens

## Getting Started

### Prerequisites

- Node.js installed on your computer
- npm installed with Node.js

### Installation

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   node app.js
   ```

3. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Routes

| Route  | Method | Description                                        |
| ------ | ------ | -------------------------------------------------- |
| `/`    | GET    | Displays the message board.                        |
| `/new` | GET    | Displays the form for writing a message.           |
| `/new` | POST   | Adds a new message and redirects to the home page. |

## Project Structure

- `app.js` - Configures Express, stores messages, and starts the server
- `routes/new.js` - Handles displaying and submitting the new-message form
- `views/` - Contains the EJS templates
- `public/styles.css` - Contains the application styling

## Data Storage

Messages are currently stored in memory while the server is running. Restarting the server resets the message list to the initial sample messages. A database would be needed for permanent storage.
