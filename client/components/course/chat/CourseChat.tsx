'use client';
import { useState, useRef, useEffect } from 'react';
import MessageItem from './MessageItem';
import ChatInput from './ChatInput';

interface Message {
    id: number;
    sender: string;
    content: string;
}

export default function CourseChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
        id: 1,
        sender: 'Instructor',
        content: 'Welcome to the course! Feel free to ask anything 👋',
        },
    ]);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const handleSend = (text: string) => {
        const newMessage: Message = {
        id: Date.now(),
        sender: 'You',
        content: text,
        };
    setMessages((prev) => [...prev, newMessage]);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="bg-white p-6 mt-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">💬 Course Chat</h2>
        <div className="h-64 overflow-y-auto border rounded-md p-4 bg-gray-50 space-y-3">
            {messages.map((msg) => (
            <MessageItem key={msg.id} sender={msg.sender} content={msg.content} />
            ))}
            <div ref={messagesEndRef} />
        </div>
        <ChatInput onSend={handleSend} />
        </div>
    );
}