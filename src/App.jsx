import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="902d2c8b-ec1d-43aa-8b7f-d2eb80be5f92"
            userName="admin"
            userSecret="admin1234"
        />
    )
}

export default App
