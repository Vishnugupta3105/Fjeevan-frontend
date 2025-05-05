import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import chatService from '@/services/api';
import voiceService from '@/services/voiceService';

function ChatPage() {
  const { category, name } = useParams();
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hello, I am ${name}. Ask me anything or talk to me.` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Check if voice synthesis is available
    setIsVoiceEnabled(voiceService.isAvailable());
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Only use English system prompt
    const systemPrompt = 'Answer in English.';

    try {
      const response = await chatService.sendMessage(userMessage, name, 'english', systemPrompt);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: response }
      ]);
      // Speak the response if voice is enabled
      if (isVoiceEnabled) {
        voiceService.speak(response, name, 'english');
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { 
          sender: 'bot', 
          text: "I apologize, but I'm having trouble responding right now. Please try again later." 
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleVoiceToggle = () => {
    if (isVoiceEnabled) {
      voiceService.stop();
      setIsVoiceEnabled(false);
    } else {
      setIsVoiceEnabled(true);
      // Speak the last bot message if there is one
      const lastBotMessage = [...messages].reverse().find(msg => msg.sender === 'bot');
      if (lastBotMessage) {
        voiceService.speak(lastBotMessage.text, name, 'english');
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left: Chat Section */}
      <div className="w-full lg:w-2/3 flex flex-col border-r dark:border-gray-800">
        <header className="bg-indigo-600 text-white px-6 py-4 text-xl font-bold shadow flex items-center justify-between">
          <span>Chat with {name}</span>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-indigo-700 ${isVoiceEnabled ? 'bg-indigo-700' : ''}`}
              onClick={handleVoiceToggle}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                {isVoiceEnabled ? 'Voice On' : 'Voice Off'}
              </span>
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl px-4 py-2 rounded-2xl text-sm shadow whitespace-pre-wrap break-words ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white px-3 py-1 text-xs rounded-full animate-pulse">
                {name} is thinking...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="bg-white dark:bg-gray-900 border-t px-4 py-4 flex items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Ask your question..."
            className="flex-1 px-4 py-2 rounded-full border dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>

      {/* Right: Personality Section */}
      <div className="hidden lg:flex flex-col w-1/3 items-center justify-center p-6 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-sm space-y-6">
          <div className="relative group">
            <img
              src={`/images/personalities/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
              alt={name}
              className="rounded-xl shadow-lg w-full h-[400px] object-contain bg-gray-50 dark:bg-gray-900 transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-avatar.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm opacity-90">Click to learn more about me</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Connection Status</span>
              <span className="text-green-500 font-medium">Connected</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Interactions</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">12</span>
            </div>
            
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                Start Voice Chat
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
