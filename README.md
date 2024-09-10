# Football-Standing-Service

## Steps to run.

### 1. Extract Project from Zip
    `football-standing.zip`

### 2. Go to project directory
    `cd football-standing-ui`

### 3.Build this Project using below command
    `npm install`

### 4. To run the application (the application will start on port 3000)
    `npm start`

### 5. Run Docker build to build a docker image of this application
    `docker build -t football-standing-ui .`

### 6. Use docker run to run this project on 8080 port (make sure no other app is running on the 8080 port)
    `docker run -p 3000:80 football-standing-ui`

**Note/Assumptions:**
1. Access the application at `http://localhost:3000`
2. The URL for football-standing service is hard-coded as of now.
