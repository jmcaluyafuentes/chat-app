# Chat Application

A real-time chat application built using React and the Chat Engine API. This application allows users to log in, send messages, and view chat conversations with others.

## Features

- User authentication with username and password.
- Real-time messaging with instant notifications for new messages.
- Support for text and image attachments.
- User avatars and read receipts for better engagement.

## Technologies Used

- Frontend: React, CSS
- API: Chat Engine API

## Installation

#### 1. Clone the repository

```
git clone https://github.com/jmcaluyafuentes/chat-app.git
```

#### 2. Navigate into the project directory

```
cd chat-app
```

#### 3. Install dependencies

```
npm install
```

#### 4. Set up environment variables by creating a .env file in the root directory and adding your Chat Engine Project ID

```
VITE_PROJECT_ID=<your_project_id_here>
```

#### 5. Start the development server

```
npm run dev
```

## Usage

1. Open your browser and go to http://localhost:5173.
2. Enter your username and password to log in. If you don’t have an account, sign up at [chatengine.io](https://chatengine.io/) and create project thru the dashboard.
3. Start chatting with other users.

## Components

- App - The main application component that handles user authentication and renders the chat interface.
- ChatFeed - Displays chat messages, user avatars, and handles message rendering.
- LoginForm - Provides a form for user login, managing the authentication process.
- MessageForm - A form for sending messages and uploading files.
- MyMessage - Component for rendering the user's own messages.
- TheirMessage - Component for rendering messages from other users.

## Contributing

#### 1. Fork the repository.

#### 2. Create a new branch.

```
git checkout -b feature/YourFeature
```

#### 3. Make your changes and commit them.

```
git commit -m 'Add some feature'
```

#### 4. Push to the branch.

```
git push origin feature/YourFeature
```

#### 5. Open a pull request.
