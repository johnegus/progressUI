# Progress UI Backend Routes
//based on previous progressui project 

- users
  - GET /users/:id/ => gets a single users info
- auth
  - GET /auth/ => authenticates a user
  - POST /auth/login => logs a user in
  - GET /auth/logout => logs a user out
  - POST /auth/signup => creates a new user and signs them in
  - GET /auth/unauthorized => returns unauthorized JSON when authentication fails
- activities
  - GET /activities/ => gets all activities for a user
  - POST /activities/new => creates activity item
  - GET /activities/:id => gets a specific activity item
  - PUT /activities/:id => updates a specific activity item
  - DELETE /activities/:id => deletes a activity item
- activity_type
  - GET /type/activities/:id => gets the activity type for a activity item
  - GET /type/ => gets all activity types
