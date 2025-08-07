<script setup lang="ts">
import { ref } from 'vue';
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();
const newMessage = ref('');

function sendMessage() {
  if (newMessage.value.trim()) {
    chatStore.sendUserMessage(newMessage.value);
    newMessage.value = '';
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}
</script>

<template>
  <div class="border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4">
    <div class="max-w-screen-lg mx-auto">
      <div class="relative">
        <input
          v-model="newMessage"
          @keydown="handleKeydown"
          type="text"
          placeholder="Type your message here..."
          class="input-field"
        />
        <button 
          @click="sendMessage"
          class="send-button"
          :disabled="!newMessage.trim()"
          :class="{ 'opacity-50 cursor-not-allowed': !newMessage.trim() }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <p class="text-xs text-neutral-500 mt-2 text-center">
        Press Enter to send, Shift+Enter for a new line
      </p>
    </div>
  </div>
</template>