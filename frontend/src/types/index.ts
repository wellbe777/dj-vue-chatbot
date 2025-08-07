export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface QuickAction {
  id: string;
  label: string;
  message: string;
}