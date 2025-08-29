import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { cn } from '@/lib/utils';

export interface CircularIconProps {
    icon: IconDefinition;
    parentClassName?: string;
    className?: string;
    size?: string;
    color?: string;
    is3xl?: boolean;  // New prop to identify footer icons
}

export const CircularIcon = ({ 
    icon, 
    parentClassName, 
    className, 
    size = "w-16 h-16", 
    color = "text-[#ffd0e2]",
    is3xl = false  // Default to false
}: CircularIconProps) => {
    return (
        <div className={cn("bg-amber-50 rounded-full flex justify-center items-center", size, parentClassName)}>
            <FontAwesomeIcon 
                icon={icon} 
                className={cn(
                    "justify-self-center",
                    is3xl ? "text-3xl" : "text-xl",
                    color, 
                    className
                )}
            />
        </div>
    );
};