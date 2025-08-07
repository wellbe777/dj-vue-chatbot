<script setup lang="ts">
import { format } from 'date-fns';
import { computed } from 'vue';
import { marked } from 'marked';
import type { Message } from '../types';

const props = defineProps<{
  message: Message
}>();

const formattedTime = computed(() => {
  return format(props.message.timestamp, 'h:mm a');
});

const isUser = computed(() => props.message.sender === 'user');

const formattedContent = computed(() => {
  if (props.message.sender === 'bot') {
    return marked.parse(props.message.content);
  }
  return props.message.content;
});
</script>

<template>
  <div 
    class="flex flex-col mb-4"
    :class="isUser ? 'items-end' : 'items-start'"
  >
    <div 
      class="message-bubble prose prose-sm dark:prose-invert"
      :class="isUser ? 'user-message' : 'bot-message'"
      v-html="formattedContent"
    >
    </div>
    <span class="text-xs text-neutral-500 mt-1 px-1">
      {{ formattedTime }}
    </span>
  </div>
</template>