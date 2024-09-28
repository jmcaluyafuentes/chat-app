import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    const projectID = import.meta.env.VITE_PROJECT_ID;
    const userName = import.meta.env.VITE_USERNAME;
    const userSecret = import.meta.env.VITE_USER_SECRET;

    return (
        <ChatEngine 
            height="100vh"
            projectID={projectID}
            userName={userName}
            userSecret={userSecret}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
        />
    )
}

export default App
