# Chattr - Real-Time Chat Application

## 🚀 Overview
**Chattr** is a real-time chat application that allows users to communicate seamlessly with each other using WebSockets. It features user authentication, real-time messaging, and secure storage for user data and media.

## 🛠️ Tech Stack

### **Backend** (Node.js, Express, MongoDB)
- **bcryptjs** - Password hashing
- **cloudinary** - Image and media storage
- **cookie-parser** - Handling cookies
- **cors** - Enabling CORS for frontend-backend communication
- **dotenv** - Managing environment variables
- **express** - Web framework for Node.js
- **jsonwebtoken** - Secure authentication using JWT
- **mongoose** - MongoDB object modeling
- **socket.io** - Real-time communication

### **Frontend** (React, Vite, Zustand)
- **axios** - API requests handling
- **lucide-react** - Modern icons for UI
- **react** - Frontend UI framework
- **react-dom** - Rendering components in the DOM
- **react-hot-toast** - Notifications and alerts
- **react-router-dom** - Routing for navigation
- **socket.io-client** - Real-time messaging support
- **zustand** - State management

## 🔧 Features
- **User Authentication** (JWT-based login/signup)
- **Real-time Messaging** (Socket.io-powered chat system)
- **Secure Password Handling** (bcryptjs for hashing)
- **Media Uploads** (Cloudinary for image storage)
- **Responsive UI** (React + Zustand for state management)

## ⚙️ Installation & Setup
### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/chattr.git
cd chattr
```

### **2. Install Dependencies and Build**
```sh
npm install
npm run build
```

### **3. Start the Application**
```sh
npm run start
```

Run these commands in the **root directory terminal** as both backend and frontend are connected.

## 🚀 Deployment
### **Backend & Frontend (Render)**
- Both the frontend and backend are deployed on **Render**.
- Ensure proper environment variables are set in Render for smooth functionality.


## 🔑 Environment Variables (.env) Example
Create a `.env` file in the **Backend** directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Ensure you update these values with your actual credentials before running the application.

## 📚 Learning Outcomes
Working on **Chattr** helped me gain a deeper understanding of **MERN stack development**, particularly in:
- Implementing **real-time communication** with **Socket.io**.
- Managing state effectively using **React Zustand**.
- Integrating backend and frontend smoothly in a full-stack project.
- Enhancing my skills in **MERN stack development, Socket.io, and React store management** to build scalable applications.

