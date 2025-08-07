<script setup lang="ts">
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();

function handleQuickAction(message: string) {
  chatStore.sendUserMessage(message);
}
</script>

<template>
  <div class="py-3 px-4 overflow-x-auto">
    <div class="flex space-x-2 pb-1">
      <button 
        v-for="action in chatStore.quickActions" 
        :key="action.id"
        @click="handleQuickAction(action.message)"
        class="quick-action-button whitespace-nowrap"
      >
        {{ action.label }}
      </button>
    </div>
  </div>
</template>