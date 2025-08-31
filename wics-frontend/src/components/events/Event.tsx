import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { CircularIcon } from '@/components/ui/CircularIcon.tsx';
import { cn } from '@/lib/utils.ts';

export interface CardProps {
    icon: IconDefinition;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    className?: string;
    imgSrc?: string; // optional image URL (imported in Events.tsx)
    imgAlt?: string; // optional alt text
}

export function Event({ icon, title, date, time, location, description, className, imgSrc, imgAlt } : CardProps) {
    return (
        <div className={cn(
            "bg-[#FDE4EE] rounded-[20px] shadow-lg p-6 flex flex-col justify-between " +
            "transition-transform duration-300 ease-in-out hover:scale-105 " +
            "w-full sm:w-[45%] md:w-[40%] max-w-[650px] min-h-[300px] p-[30px]",
            className
        )}>
            <div className="flex gap-4">

                {imgSrc ? (
                    <img
                        src={imgSrc}
                        alt={imgAlt ?? `${title} poster`}
                        className="mt-4 max-h-60 object-contain self-end rounded hidden xl:block"
                    />
                ) : (
                    <CircularIcon icon={icon} />
                )}
                <div className="xl:hidden"><CircularIcon icon={icon} /></div>
                <div className="flex flex-col flex-1 ">
                    <h1 className="text-3xl text-[#FDA8C7] font-bold text-right font-madimi pt-[30px]">{title}</h1>
                    <p className="text-md text-2xl text-[#CA91A4] mt-4 font-magra text-right">
                        {date}
                    </p>
                    <p className="text-md text-2xl text-[#CA91A4] mt-4 font-magra text-right">
                        {time}
                    </p>
                    <p className="text-md text-2xl text-[#CA91A4] mt-4 font-magra text-right">
                        {location}
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <p className="text-md text-2xl text-[#CA91A4] font-magra">
                    {description}
                </p>
            </div>
        </div>
    );
}