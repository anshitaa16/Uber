# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data and creates a new user in the database.

## Request Body
The request body should be a JSON object with the following properties:

- `email` (string, required): The user's email address. Must be a valid email format.
- `fullname` (object, required): An object containing the user's full name.
  - `firstname` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The user's last name. Must be at least 3 characters long.
- `password` (string, required): The user's password. Must be at least 6 characters long.

Example:
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

## Responses

### Success
- **Status Code:** `201 Created`
- **Response Body:**
  ```json
  {
    "user": {
      "_id": "userId",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    },
    "token": "jwtToken"
  }
  ```

Example:
```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Validation Errors
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Server Errors
- **Status Code:** `500 Internal Server Error`
- **Response Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to log in an existing user. It validates the input data and returns a JWT token if the credentials are correct.

## Request Body
The request body should be a JSON object with the following properties:

- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

Example:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "user": {
      "_id": "userId",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    },
    "token": "jwtToken"
  }
  ```

Example:
```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Validation Errors
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Authentication Errors
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Server Errors
- **Status Code:** `500 Internal Server Error`
- **Response Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint is used to get the profile of the authenticated user.

## Responses

### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "_id": "userId",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
  ```

### Authentication Errors
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Server Errors
- **Status Code:** `500 Internal Server Error`
- **Response Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint is used to log out the authenticated user.

## Responses

### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Authentication Errors
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Server Errors
- **Status Code:** `500 Internal Server Error`
- **Response Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint is used to register a new captain. It validates the input data and creates a new captain in the database.

## Request Body
The request body should be a JSON object with the following properties:

- `email` (string, required): The captain's email address. Must be a valid email format.
- `fullname` (object, required): An object containing the captain's full name.
  - `firstname` (string, required): The captain's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The captain's last name.
- `password` (string, required): The captain's password. Must be at least 6 characters long.
- `vehicle` (object, required): An object containing the vehicle details.
  - `color` (string, required): The vehicle's color. Must be at least 3 characters long.
  - `plate` (string, required): The vehicle's plate number. Must be at least 3 characters long.
  - `capacity` (number, required): The vehicle's capacity. Must be at least 1.
  - `vehicleType` (string, required): The type of vehicle. Must be one of 'car', 'motorcycle', or 'auto'.

Example:
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
- **Status Code:** `201 Created`
- **Response Body:**
  ```json
  {
    "captain": {
      "_id": "captainId",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "captain@example.com",
      "vehicle": {
        "color": "red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    },
    "token": "jwtToken"
  }
  ```

Example:
```json
{
  "captain": {
    "_id": "60d0fe4f5311236168a109cb",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Validation Errors
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be atleast 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

### Server Errors
- **Status Code:** `500 Internal Server Error`
- **Response Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```
