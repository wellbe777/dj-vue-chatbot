<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
import { useChatStore } from '../stores/chatStore';
import ChatMessage from './ChatMessage.vue';
import TypingIndicator from './TypingIndicator.vue';

const chatStore = useChatStore();
const messagesContainer = ref<HTMLElement | null>(null);

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
}

onMounted(() => {
  scrollToBottom();
});

// Watch for new messages and scroll to bottom
watch(
  () => chatStore.messages.length,
  () => scrollToBottom(),
);

// Also watch typing indicator changes
watch(
  () => chatStore.isTyping,
  () => scrollToBottom(),
);
</script>

<template>
  <div 
    ref="messagesContainer"
    class="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
  >
    <ChatMessage 
      v-for="message in chatStore.messages" 
      :key="message.id" 
      :message="message" 
    />
    <TypingIndicator v-if="chatStore.isTyping" />
  </div>
</template>