import { Session } from "@/types/Session";
import SessionCard from "./SessionCard";

interface SessionListProps {
    sessions: Session[];
}

export default function SessionList({ sessions }: SessionListProps) {
    return (
        <div>
        {sessions.map((session) => (
            <SessionCard key={session.id} {...session} />
        ))}
        </div>
    );
}
