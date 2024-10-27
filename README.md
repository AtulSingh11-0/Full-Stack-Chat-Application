# Chat Application

This is a full-stack chat application built with Node.js, Express, MongoDB, React, and Socket.IO.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)

## Features

- Real-time messaging with Socket.IO
- RESTful API for message handling
- MongoDB for data storage
- React frontend with Vite for fast development

## Tech Stack

**Backend:**
- Node.js
- Express
- MongoDB
- Socket.IO

**Frontend:**
- React
- Vite
- Socket.IO Client

## Getting Started

### Backend Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/chat-application.git
    cd chat-application/backend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Create a `.env` file:**

    Copy the `.env.example` file to `.env` and update the environment variables.

    ```sh
    cp .env.example .env
    ```

    Update the [`.env`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fcocat%2FDocuments%2FNode-JS%2FWeb%20Projects%2FChat-Application%2Fbackend%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A10%2C%22character%22%3A35%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fcocat%2FDocuments%2FNode-JS%2FWeb%20Projects%2FChat-Application%2Fbackend%2Fsrc%2Fdb%2Fconnection.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A4%2C%22character%22%3A35%7D%7D%5D%2C%225417c2ab-bbea-44cd-8cfd-73ba68d23e1c%22%5D "Go to definition") file with your MongoDB URI and client URL:

    ```env
    MONGO_URI=your_mongodb_uri
    CLIENT_URL=http://localhost:3000
    PORT=5000
    ```

4. **Start the backend server:**

    ```sh
    npm start
    ```

    The backend server will run on [`http://localhost:5000`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fcocat%2FDocuments%2FNode-JS%2FWeb%20Projects%2FChat-Application%2Fbackend%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A6%7D%7D%5D%2C%225417c2ab-bbea-44cd-8cfd-73ba68d23e1c%22%5D "Go to definition").

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```sh
    cd ../frontend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the frontend development server:**

    ```sh
    npm run dev
    ```

    The frontend server will run on [`http://localhost:CLIENT_PORT || 5173`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fcocat%2FDocuments%2FNode-JS%2FWeb%20Projects%2FChat-Application%2Fbackend%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A6%7D%7D%5D%2C%225417c2ab-bbea-44cd-8cfd-73ba68d23e1c%22%5D "Go to definition").

## Usage

1. **Open your browser:**

    Navigate to [`http://localhost:CLIENT_PORT || 5173`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fcocat%2FDocuments%2FNode-JS%2FWeb%20Projects%2FChat-Application%2Fbackend%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A6%7D%7D%5D%2C%225417c2ab-bbea-44cd-8cfd-73ba68d23e1c%22%5D "Go to definition") to use the chat application.

2. **Send messages:**

    You can send and receive messages in real-time.

---
