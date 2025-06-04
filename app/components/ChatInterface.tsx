import React, { useState } from 'react'
import VoiceInput from './VoiceInput'

interface Message {
  id: number
  text: string
  sender: 'user' | 'character'
  timestamp: Date
}

interface ChatInterfaceProps {
  messages: Message[]
  character: {
    name: string
    avatar: string
  }
}

export default function ChatInterface({ messages, character }: ChatInterfaceProps) {
  const [input, setInput] = useState('');

  const handleTranscript = (text: string) => {
    setInput(text);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl bg-gray-50 rounded-lg shadow-lg">
      <div className="flex items-center p-4 bg-white rounded-t-lg border-b">
        <span className="text-2xl mr-2">{character.avatar}</span>
        <h2 className="text-xl font-semibold">{character.name}</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800'
              } shadow`}
            >
              <p>{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4 border-t">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="输入消息..."
          rows={1}
        />
        <VoiceInput onTranscript={handleTranscript} />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          发送
        </button>
      </div>
    </div>
  )
} 