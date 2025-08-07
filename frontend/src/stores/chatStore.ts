import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { Message, QuickAction } from '../types';

export const useChatStore = defineStore('chat', () => {
  const messages = ref<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  const isTyping = ref(false);
  
  const quickActions = ref<QuickAction[]>([
    { id: '1', label: 'Help', message: 'I need help with something' },
    { id: '2', label: 'Features', message: 'What features do you offer?' },
    { id: '3', label: 'Pricing', message: 'Tell me about your pricing' },
    { id: '4', label: 'Contact', message: 'How can I contact support?' },
  ]);

  function addMessage(content: string, sender: 'user' | 'bot') {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    
    messages.value.push(newMessage);
    return newMessage;
  }

  async function sendUserMessage(content: string) {
    if (!content.trim()) return null;
    
    const message = addMessage(content, 'user');
    isTyping.value = true;

    try {
      const response = await axios.post('http://localhost:8000/api/chat/', {
        message: content
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      isTyping.value = false;
      addMessage(response.data.response, 'bot');
    } catch (error) {
      console.error('Error sending message:', error);
      isTyping.value = false;
      addMessage('Sorry, I encountered an error while processing your request.', 'bot');
    }

    return message;
  }

  return {
    messages,
    isTyping,
    quickActions,
    sendUserMessage,
    addMessage,
  };
});