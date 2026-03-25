# ✦ DevNotes

DevNotes is a powerful, secure, and modern cloud-based notebook application built using the MERN stack. Organize your thoughts, keep track of your tasks, and access your notes from anywhere with a premium glassmorphic interface.

## ✨ Features

- **🔒 Secure Authentication**: Robust user registration and login system powered by JSON Web Tokens (JWT) and Bcrypt password hashing.
- **📝 Full CRUD Support**: Seamlessly create, read, update, and delete your notes.
- **🎨 Premium UI**: A stunning, modern design featuring a sleek dark theme, glassmorphism, and smooth animations.
- **📱 Fully Responsive**: Optimized for all devices, from desktops to mobile phones.
- **⚡ Fast & Lightweight**: Built for speed and efficiency using the latest web technologies.

## 🚀 Tech Stack

- **Frontend**: React.js, React Router, Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: JWT, Bcrypt, Express Validator
- **Styling**: Vanilla CSS with modern design principles

## 🛠️ Installation & Setup

Follow these steps to get the project running locally on your machine.

### Prerequisites

- Node.js installed
- MongoDB installed or a MongoDB Atlas account

### 1. Clone the Repository

```bash
git clone https://github.com/hussainsulehri/DevNotes.git
cd DevNotes
```

### 2. Backend Configuration

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory (using `.env.example` as a template):
   ```bash
   touch .env
   ```
4. Add your configuration:
   ```env
   MONGO_URI='your_mongodb_connection_uri'
   JWT_SECRET='your_secret_key'
   PORT=5000
   ```

### 3. Frontend Configuration

1. Navigate back to the root directory:
   ```bash
   cd ..
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```
4. Add the backend URL:
   ```env
   REACT_APP_BACKEND_URL='http://localhost:5000'
   ```

## 🏃 Running the Application

You can run both the frontend and backend concurrently from the root directory:

```bash
npm run both
```

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 📂 Project Structure

```text
DevNotes/
├── backend/            # Express server and API routes
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   └── middleware/     # Custom auth middleware
├── src/                # React components and logic
│   ├── components/     # UI components
│   └── context/        # State management
├── public/             # Static assets
└── .env.example        # Configuration templates
```

## 📜 License

Distributed under the ISC License.

---
Built with ❤️ by Hussain Sulehri
