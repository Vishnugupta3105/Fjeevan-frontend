import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';
import { Search, MoreVertical, Send } from 'lucide-react';

function Messages() {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Jane Smith',
      avatar: '/images/avatars/jane.jpg',
      lastMessage: 'Hey, how are you?',
      timestamp: '2m ago',
      unread: true,
    },
    {
      id: 2,
      name: 'Mike Johnson',
      avatar: '/images/avatars/mike.jpg',
      lastMessage: 'Did you see the new update?',
      timestamp: '1h ago',
      unread: false,
    },
    {
      id: 3,
      name: 'Albert Einstein',
      avatar: '/images/personalities/albert-einstein.jpg',
      lastMessage: 'The theory of relativity is fascinating, isn\'t it?',
      timestamp: '2h ago',
      unread: true,
      isPersonality: true,
    },
    {
      id: 4,
      name: 'Mahatma Gandhi',
      avatar: '/images/personalities/mahatma-gandhi.jpg',
      lastMessage: 'Remember, non-violence is the greatest force at the disposal of mankind.',
      timestamp: '1d ago',
      unread: false,
      isPersonality: true,
    },
  ];

  const messages = activeChat
    ? [
        { id: 1, sender: 'other', text: 'Hello! How can I help you today?', timestamp: '10:00 AM' },
        { id: 2, sender: 'me', text: 'Hi! I wanted to ask about your thoughts on quantum physics.', timestamp: '10:01 AM' },
        { id: 3, sender: 'other', text: 'Ah, quantum physics! One of my favorite topics. What specifically would you like to know?', timestamp: '10:02 AM' },
      ]
    : [];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !activeChat) return;

    // Here you would typically send the message to your backend
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Chat List */}
      <div className="w-80 border-r dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search messages"
              className="pl-10 bg-gray-100 dark:bg-gray-700 border-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                activeChat?.id === chat.id ? 'bg-gray-100 dark:bg-gray-700' : ''
              }`}
              onClick={() => setActiveChat(chat)}
            >
              <Avatar src={chat.avatar} alt={chat.name} />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{chat.name}</h3>
                  <span className="text-sm text-gray-500">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread && (
                <div className="ml-2 w-2 h-2 bg-indigo-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar src={activeChat.avatar} alt={activeChat.name} />
                <div>
                  <h3 className="font-semibold">{activeChat.name}</h3>
                  {activeChat.isPersonality && (
                    <p className="text-sm text-gray-500">AI Personality</p>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-2xl px-4 py-2 rounded-2xl ${
                      msg.sender === 'me'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button type="submit">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages; 