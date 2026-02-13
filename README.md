<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".
Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">
  <h1>Online Exam Portal</h1>
  <p>
    A comprehensive Online Exam portal built with Node.js (Backend) and React.js (Frontend).
  </p>
  
<p>
  <a href="https://github.com/bholakumar186/pro/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/bholakumar186/pro" alt="contributors" />
  </a>
  <a href="https://github.com/bholakumar186/pro/commits/main">
    <img src="https://img.shields.io/github/last-commit/bholakumar186/pro" alt="last update" />
  </a>
  <a href="https://github.com/bholakumar186/pro/network/members">
    <img src="https://img.shields.io/github/forks/bholakumar186/pro" alt="forks" />
  </a>
  <a href="https://github.com/bholakumar186/pro/stargazers">
    <img src="https://img.shields.io/github/stars/bholakumar186/pro" alt="stars" />
  </a>
  <a href="https://github.com/bholakumar186/pro/issues/">
    <img src="https://img.shields.io/github/issues/bholakumar186/pro" alt="open issues" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/bholakumar186/pro">View Demo</a>
  <span> · </span>
    <a href="https://github.com/bholakumar186/pro/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/bholakumar186/pro/issues/">Request Feature</a>
  </h4>
</div>

<br />

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Run Locally](#running-run-locally)
  * [Run with Docker](#run-with-docker)
- [To-do](#notes-to-do)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)

## :star2: About the Project
A robust Web Application designed for handling online MCQ (Multiple Choice Question) tests, featuring distinct portals for students, teachers, and administrators.



### :space_invader: Tech Stack

<details>
  <summary><b>Frontend</b></summary>
  <ul>
    <li>React.js</li>
    <li>React-Redux</li>
    <li>Material UI</li>
  </ul>
</details>

<details>
  <summary><b>Backend</b></summary>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Passport.js (Authentication)</li>
  </ul>
</details>

<details>
<summary><b>Database</b></summary>
  <ul>
    <li>MongoDB</li>
  </ul>
</details>

### :dart: Features

* **Student User:** View test details, register for exams, take live tests, and review results with detailed explanations.
* **Teacher User:** Create/Update question banks, manage specific questions, and schedule tests.
* **Admin User:** Full control over teacher accounts and subject categorization.

### :key: Environment Variables

To run this project, add the following to your `backend/config.json` file:

`mongodb.connectionString`  
`jwt.secret`

---

## :toolbox: Getting Started

### :bangbang: Prerequisites

* **MongoDB:** Ensure MongoDB is installed and running on your local machine.
* **Node.js:** LTS version recommended.

### :running: Run Locally

1. **Clone the project**
   ```bash
   git clone [https://github.com/bholakumar186/pro.git](https://github.com/bholakumar186/pro.git)
   cd pro
```bash
  cd backend
  npm install
  cd ../frontend
  npm install
  cd ../user-portal-frontend
  npm install
```

Start the backend server

```bash
  cd backend
  npm start
```

Start the frontend client for admin

```bash
  cd frontend
  npm start
```

Start the frontend client for teacher/student

```bash
  cd user-portal-frontend
  npm start
```

<b>Note</b> : admin user is created when backend runs first time. default admin (username, password) details are <b>("sysadmin","systemadmin"). addAdminIfNotFound() function of backend/services/admin.js file </b> is for this logic. You can check/modify default admin details from this function.

<!-- Run with Docker -->
### Run With Docker

build docker images

```bash
  docker-compose build
```

Run container and services

```bash
  docker-compose up
```

Use following paths 

```bash
  Backend server : localhost:5000/
  Admin Frontend : localhost:3100/
  User  Frontend : localhost:3200/
```

<!-- To Do -->
## :notes: to-do
  <ul>
  <li> add more features </li>
  </ul>
 
