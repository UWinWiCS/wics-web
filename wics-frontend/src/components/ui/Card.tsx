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
        <div className={cn("bg-[#fde4ee] w-[20%] h-[50%] rounded-[20px] shadow-lg p-3 transition-transform duration-300 ease-in-out hover:scale-110", className)}>
            <CircularIcon icon={icon} />
            <div className="flex flex-col items-center justify-center mt-5 font-madimi">
                <h1 className="text-[2vw] text-[#FDA8C7] text-left mr-2 w-full">{title}</h1>
                <p className="text-[1.5vw] text-[#766A6E] text-left">
                    {description}
                </p>
            </div>
        </div>
    );
}