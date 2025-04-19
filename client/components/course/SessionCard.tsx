import { Session } from "@/types/Session";

export default function SessionCard({ date, link, recordingUrl, duration }: Session) {
    return (
        <div className="p-4 bg-white rounded shadow mb-4">
            <p className="text-gray-800 font-semibold mb-1">📅 {new Date(date).toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-2">⏱ Duration: {duration} min</p>
            <a href={link} target="_blank" className="text-blue-600 hover:underline block">
            Join Live Session
            </a>
            {recordingUrl && (
            <a href={recordingUrl} target="_blank" className="text-green-600 hover:underline block mt-2">
                Watch Recording
            </a>
            )}
        </div>
    );
}
