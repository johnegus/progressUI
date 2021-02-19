# ECOFridge Backend Routes

- users
  - GET /users/:id/ => gets a single users info
- auth
  - GET /auth/ => authenticates a user
  - POST /auth/login => logs a user in
  - GET /auth/logout => logs a user out
  - POST /auth/signup => creates a new user and signs them in
  - GET /auth/unauthorized => returns unauthorized JSON when authentication fails
- groceries
  - GET /groceries/ => gets all groceries for a user
  - POST /groceries/new => creates grocery item
  - GET /groceries/:id => gets a specific grocery item
  - PUT /groceries/:id => updates a specific grocery item
  - DELETE /groceries/:id => deletes a grocery item
- grocery_type
  - GET /grocery-type/groceries/:id => gets the grocery type for a grocery item
  - GET /grocery-type/ => gets all grocery types
