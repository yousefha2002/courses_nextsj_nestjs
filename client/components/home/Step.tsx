interface StepProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function Step({ title, description, icon }: StepProps) {
        return (
        <div className="text-center max-w-sm mx-auto">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white text-2xl">
            {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}
