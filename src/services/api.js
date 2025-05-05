import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const chatService = {
  async sendMessage(message, personality) {
    try {
      const response = await axios.post(`${API_BASE_URL}/chat/chat`, {
        message,
        personality
      });
      return response.data.response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  async getChatHistory(personality) {
    try {
      const response = await axios.get(`${API_BASE_URL}/chat/history/${personality}`);
      return response.data.history;
    } catch (error) {
      console.error('Error getting chat history:', error);
      throw error;
    }
  },

  async clearChatHistory(personality) {
    try {
      await axios.delete(`${API_BASE_URL}/chat/history/${personality}`);
    } catch (error) {
      console.error('Error clearing chat history:', error);
      throw error;
    }
  },

  async startVoiceChat(personality) {
    try {
      const response = await fetch(`${API_BASE_URL}/voice/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ personality }),
      });

      if (!response.ok) {
        throw new Error('Failed to start voice chat');
      }

      return response.json();
    } catch (error) {
      console.error('Error starting voice chat:', error);
      throw error;
    }
  }
};

export default chatService;
