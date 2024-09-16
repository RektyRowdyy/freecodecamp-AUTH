
## Live Preview

Check live demonstration [here](https://freecodecamp-ui.vercel.app/)

![1](https://github.com/user-attachments/assets/9cbba614-0c3a-47cb-8df0-4e15404954cf)
# FreeCodeCamp - AUTH

This project replicates the FreeCodeCamp layout and implements a user authentication & authorization system with sign-in and sign-up functionality using Node.js Express.js, and MongoDB. 

It includes a feature for signing in with Google accounts using JWT and coookies and also displays mock course data on the home page.




## Features

- **Home Page**: Replica of FreeCodeCamp's home page with a sign-in/logout button in the top navbar.
  
![1](https://github.com/user-attachments/assets/9cbba614-0c3a-47cb-8df0-4e15404954cf)

- **Sign-In Page**: Allows users to sign in with email or Google account.
    - **Google Sign-In**: Integrates Google OAuth for signing in.
      
![2](https://github.com/user-attachments/assets/5ba3bf8c-6baf-4ca5-a204-37a02e5d9344)

- **Sign-Up Page**: Allows users to sign up with email or Google account.
    - Email Sign-Up: Stores credentials in a MongoDB collection and validates for existing email addresses.
    - **Google Sign-In**: Integrates Google OAuth for signing in and storing user details.
      
![3](https://github.com/user-attachments/assets/9c60770a-2bac-42d2-bb1c-249c832b775c)

- **Authenticated Session**: Users remain logged in even after restarting the browser.
- **Course Data**: Displays mock course data including course title and duration.

![4](https://github.com/user-attachments/assets/5ddbfe4f-68f7-414b-9f3d-3b9812595eca)



## Tech Stack

<img align="left" alt="React" width="30px" style="padding-right:15px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/> **Frontend**: React, TailwindCSS

<img align="left" alt="NodeJs" width="30px" style="padding-right:15px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"/> **Backend**: Node.js, Express, JWT & Cookies

<img align="left" alt="MongoDB" width="30px" style="padding-right:15px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"/> **Database**: MongoDB

<img align="left" alt="MongoDB" width="30px" style="padding-right:15px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" /> **Deployment**: Vercel


## Installation

**1. Clone the Repository**:

```bash
  git clone https://github.com/RektyRowdyy/freecodecamp-AUTH.git
  cd freecodecamp-AUTH
```

**2. Backend Setup**:

- Navigate to the backend directory.

- Install dependencies:
```bash
  npm install
```

- Create a .env file and add the following variables:
    - PORT
    - MONGODB_URI
    - SECRET
    - GOOGLE_CLIENT_ID
    - GOOGLE_CLIENT_SECRET
    - UI_URL
    - API_URL

- Start the server:
```bash
  npm run dev
```

**3. Frontend Setup**:
- Navigate to the frontend directory.
- Install dependencies:
```bash
  npm install
```
-Start the development server:
```bash
  npm run dev
```
    
