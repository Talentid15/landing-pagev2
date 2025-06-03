
import React, {  useRef } from "react";

import { cn } from "../../lib/utils";
import { AnimatedBeam } from "../../components/magicui/animated-beam";
import { FileTextIcon } from "lucide-react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const Circle = (({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
            ref={containerRef}
        >
            <div className="flex size-full flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row justify-between">
                    <Circle ref={div1Ref}>
                        <ChatBubbleIcon />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <FileTextIcon />
                    </Circle>

                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
                startYOffset={10}
                endYOffset={10}
                curvature={-20}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
                startYOffset={-10}
                endYOffset={-10}
                curvature={20}
                reverse
            />
        </div>
    );
}
