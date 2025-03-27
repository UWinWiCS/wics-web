import { useState } from "react";
import {Button} from "@/components/ui/Button.tsx";

export function Test() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-row min-h-screen justify-center items-center">
            <Button onClick={() => setCount(count + 1)}
                    className="hover:scale-125 active:scale-100 transition-transform">
                Button: {count}
            </Button>
        </div>
    );
}
