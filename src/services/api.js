import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

const chatService = {
  async sendMessage(message, personality, language = 'english', systemPrompt = '') {
    try {
      const response = await axiosInstance.post('/chat', {
        message,
        personality,
        language,
        systemPrompt
      });
      return response.data.response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  async getChatHistory(personality) {
    try {
      const response = await axiosInstance.get(`/chat/history/${personality}`);
      return response.data.history;
    } catch (error) {
      console.error('Error getting chat history:', error);
      throw error;
    }
  },

  async clearChatHistory(personality) {
    try {
      await axiosInstance.delete(`/chat/history/${personality}`);
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
        credentials: 'include',
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
