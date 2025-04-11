import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { CircularIcon } from '@/components/ui/CircularIcon';
import { cn } from '@/lib/utils';

export interface CardProps {
    icon: IconDefinition;
    title: string;
    description: string;
    className?: string;
}

export function Card({ icon, title, description, className } : CardProps) {
    return (
        <div className={cn(
            "bg-[#FDE4EE] rounded-[20px] shadow-lg p-6 flex flex-col justify-between " +
            "transition-transform duration-300 ease-in-out hover:scale-105 " +
            "w-full sm:w-[45%] md:w-[25%] max-w-[350px] min-h-[300px]",
            className
        )}>
            <CircularIcon icon={icon} />
            <div className="flex flex-col mt-8 font-madimi h-full">
                <h1 className="text-2xl text-[#FDA8C7] font-bold">{title}</h1>
                <p className="text-md text-2xl text-[#CA91A4] mt-4 font-magra">
                    {description}
                </p>
            </div>
        </div>
    );
}
