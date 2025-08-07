<script setup lang="ts">
// This component displays an animated typing indicator when the bot is "thinking"
</script>

<template>
  <div class="flex flex-col items-start mb-4">
    <div class="message-bubble bot-message flex items-center space-x-1 py-2 px-4">
      <div class="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-300 animate-typing"></div>
      <div class="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-300 animate-typing" style="animation-delay: 0.2s"></div>
      <div class="w-2 h-2 rounded-full bg-neutral-500 dark:bg-neutral-300 animate-typing" style="animation-delay: 0.4s"></div>
    </div>
  </div>
</template>