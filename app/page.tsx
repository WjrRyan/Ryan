'use client'

import { useState } from 'react'
import CharacterSelect from './components/CharacterSelect'
import VoiceInput from './components/VoiceInput'
import ChatInterface from './components/ChatInterface'

interface Message {
  id: number
  text: string
  sender: 'user' | 'character'
  timestamp: Date
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: '哈利·波特',
    avatar: '🧙‍♂️',
  })

  const handleTranscript = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])

    // 模拟角色回复
    setTimeout(() => {
      const response: Message = {
        id: Date.now(),
        text: `作为${selectedCharacter.name}，我觉得这很有趣！`,
        sender: 'character',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, response])
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">
          AI 角色扮演对话
        </h1>
        
        <div className="flex flex-col items-center space-y-8">
          <CharacterSelect
            onSelect={(character) => setSelectedCharacter(character)}
          />
          
          <ChatInterface
            messages={messages}
            character={selectedCharacter}
          />
          
          <div className="w-full max-w-2xl">
            <VoiceInput onTranscript={handleTranscript} />
          </div>
        </div>
      </div>
    </main>
  )
} 