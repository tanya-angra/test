import React, { useState } from 'react';

function Chat() {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <section >
            <div>
                <div className="float-right" onClick={toggleChat}>
                <img className="animated-image " src="/chat-bot.png" alt="Chat Bot" />
                </div>
                {showChat && (
                    <div className='chat'>
                        <div className='parent-wrap'>
                            <div className='first-content p-5'>
                                <div>
                                    <div className='d-flex'>
                                        <h2><i className="fas fa-chevron-left"></i></h2>
                                        <h6 className='ml-2'><img className="height-change animated" src="/chatbot-i.png" alt="Chatbot Icon" /></h6>
                                    </div>
                                </div>
                            </div>
                            <div className='conversation-wrap'></div>
                            <div className="search-input">
                                <input type="text" placeholder="Search..." />
                                <i className="fas fa-paperclip"></i>
                                <i className="far fa-smile"></i>
                            </div>
                       
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Chat;
