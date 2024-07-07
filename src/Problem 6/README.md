# Problem 6: Architecture

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Flow of Execution](#flow-of-execution)
- [Security](#security)
- [Improvements](#improvements)

## Overview

- **Topic name**: Score Board API Module.
- **Description**: This module provides an API for managing and updating a score board that shows the top 10 users' scores. It supports live updates and ensures the security of score updates to prevent unauthorized actions.

## Features

- Display the top 10 user scores.
- Live updates for the scoreboard.
- Secure score updates through API calls.
- Prevention of unauthorized score modifications.

## API Endpoints

### Update Score

#### Endpoint
`POST /api/updateScore`

#### Description
Updates the score of a user after they complete an action.

#### Request

```json
{
  "userId": "string",
  "token": "string",
  "scoreIncrement": "number"
}
```
#### Response
{
  "success": "boolean",
  "message": "string",
  "updatedScore": "number"
}

## Flow of Execution

1. User performs an action on the website.
2. The action triggers an API call to the POST /api/updateScore endpoint.
3. The server verifies the user token with the Authorization Service.
4. If the token is valid, the server updates the user's score in the database.
5. The server returns the updated score to the website.
6. The website updates the scoreboard with the new score.
7. The server pushes the updated scores to the scoreboard for live updates.
**Flow chart**

![image](https://github.com/nthanhnguyen/Nguyen-Thanh-Nguyen/assets/110075152/c9c63024-6e70-449e-a2b7-eafa0e57a2c8)


**Sequence Diagram**

![image](https://github.com/nthanhnguyen/Nguyen-Thanh-Nguyen/assets/110075152/1cd35555-a3a2-47b9-a803-06e91cb194e9)


## Security

- Token-based authentication to ensure authorized score updates.
- Validation of user tokens to prevent malicious score modifications.

## Improvements

- Implement rate limiting to prevent abuse of the score update endpoint.
- Add monitoring and logging for API calls to detect and respond to suspicious activities.
- Consider using WebSockets for more efficient live updates.
