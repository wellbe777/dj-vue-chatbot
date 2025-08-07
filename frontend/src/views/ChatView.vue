<script setup lang="ts">
import ChatHeader from '../components/ChatHeader.vue';
import ChatWindow from '../components/ChatWindow.vue';
import QuickActions from '../components/QuickActions.vue';
import ChatInput from '../components/ChatInput.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <ChatHeader />
    <ChatWindow />
    <QuickActions />
    <ChatInput />
  </div>
</template>