import { useState } from 'react';

interface ChatInputProps {
    onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
    const [input, setInput] = useState('');
    const handleSend = () => {
        if (!input.trim()) return;
        onSend(input.trim());
        setInput('');
};

return (
    <div className="mt-4 flex gap-2">
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
            onClick={handleSend}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
        >
            Send
        </button>
        </div>
    );
}