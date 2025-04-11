import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils';


export interface CircularIconProps {
    icon: IconDefinition;
    parentClassName?: string;
    className?: string;
    size?: string;
    color?: string;
}

export const CircularIcon = ({ icon, parentClassName, className, size = "w-16 h-16", color = "text-[#ffd0e2]" }: CircularIconProps) => {
    return (
        <div className={cn("bg-amber-50 rounded-full flex justify-center items-center", size, parentClassName)}>
            <FontAwesomeIcon icon={icon} className={cn("justify-self-center text-xl", color, className)}/>
        </div>
    );
};