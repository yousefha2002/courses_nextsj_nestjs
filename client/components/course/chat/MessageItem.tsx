interface MessageItemProps {
    sender: string;
    content: string;
}

export default function MessageItem({ sender, content }: MessageItemProps) {
    const isUser = sender === 'You';
    return (
        <div className={`max-w-xs p-3 rounded-lg ${isUser ? 'ml-auto bg-blue-100 text-right' : 'mr-auto bg-gray-200'}`}>
            <p className="text-xs text-gray-500">{sender}</p>
            <p className="text-sm text-gray-800">{content}</p>
        </div>
    );
}
