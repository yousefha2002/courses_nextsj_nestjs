interface ContentTabsProps {
    onTabChange: (tab: 'lessons' | 'sessions') => void;
    activeTab: 'lessons' | 'sessions';
}

export default function ContentTabs({ onTabChange, activeTab }: ContentTabsProps) {
    return (
        <div className="flex space-x-4">
        <button
            onClick={() => onTabChange('lessons')}
            className={`btn ${activeTab === 'lessons' ? 'bg-primary text-white' : 'bg-gray-200'}`}
        >
            Lessons
        </button>
        <button
            onClick={() => onTabChange('sessions')}
            className={`btn ${activeTab === 'sessions' ? 'bg-primary text-white' : 'bg-gray-200'}`}
        >
            Live Sessions
        </button>
        </div>
    );
}
