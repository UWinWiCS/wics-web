import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { cn } from '@/lib/utils';

export interface TransparentIconProps {
    icon: IconDefinition;
    parentClassName?: string;
    className?: string;
    size?: string;
    color?: string;
    is3xl?: boolean;  // New prop to identify footer icons
}

export const TransparentIcon = ({
    icon, 
    parentClassName, 
    className, 
    size = "w-16 h-16", 
    color = "text-[#FDA8C7]",
    is3xl = false  // Default to false
}: TransparentIconProps) => {
    return (
        <div className={cn("flex justify-center items-center", size, parentClassName)}>
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