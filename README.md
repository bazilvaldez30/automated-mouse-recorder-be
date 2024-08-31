# RobotJS API

A simple Express.js application that uses `robotjs` to simulate mouse movements and clicks. This API provides endpoints to move the mouse and perform clicks programmatically.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bazilvaldez30/automated-mouse-recorder-be.git

2. Navigate to the project directory:

   ```bash
   cd automated-mouse-recorder-be

3. Install dependencies:

   ```bash
   npm install

## Usage

1. Start the server

 - Using npm script:

      ```bash
      npm start

 - Directly with Node.js:

      ```bash
      node server.js

By default, the server will run on http://localhost:3000

2. Test the API:

   Use a tool like Postman or curl to test the API endpoints.

   Example cURL commands:
   - Mouse move
     ```bash
     curl "http://localhost:3000/move-mouse?x=100&y=200"
   - Click mouse
     ```bash
     curl "http://localhost:3000/click-mouse?x=100&y=200"

## API Endpoints
## GET /move-mouse

Moves the mouse to the specified coordinates.

Query Parameters:

 - x (number): X-coordinate to move the mouse to.
 - y (number): Y-coordinate to move the mouse to.

Response:

 - Success: Mouse moved to (x, y)
 - Error: 500 Internal Server Error if coordinates are invalid or robotjs fails.

## GET /click-mouse
Moves the mouse to the specified coordinates and performs a click.

Query Parameters:

 - x (number): X-coordinate to move the mouse to.
 - y (number): Y-coordinate to move the mouse to.
   Response:

Success: Mouse clicked at (x, y)
Error: 500 Internal Server Error if coordinates are invalid or robotjs fails.

controllers/: Contains the logic for handling requests and interacting with robotjs.
routes/: Defines the routes and connects them to the corresponding controller functions.
server.js: Entry point for the application. Sets up the Express server and routes.
