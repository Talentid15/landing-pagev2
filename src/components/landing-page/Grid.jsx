import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/magicui/bento";
import {
  IconClipboardCopy,
  IconMapPin,
  IconRobot,
  IconArrowsExchange,
} from "@tabler/icons-react";
import { cn } from "../../../lib/utils";
import { Marquee } from "../../../components/magicui/marquee";
import AnimatedListDemo from "../../../components/ui/list";
import AnimatedBeamDemo from "../../../components/ui/beam";

function GridCard() {
  return (
    <div className="relative min-h-screen dark:bg-gray-900">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto pt-12 pb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hire Smarter, Faster, Better
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Talentid.app empowers you with instant offer delivery, real-time
          tracking, AI-driven insights, and transparent feedback—all in one
          seamless platform.
        </p>
      </div>

      {/* Grid Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn(
                "relative overflow-hidden rounded-xl shadow-lg",
                item.className
              )}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

// Skeleton Components
const Skeleton1 = () => (
  <div className="relative w-full h-40 overflow-hidden">
    <Marquee
      pauseOnHover
      className="absolute inset-0 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
    >
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-lg border p-4 m-2",
          "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800",
          "hover:bg-gray-50 dark:hover:bg-gray-700",
          "transform-gpu transition-all duration-300 ease-out"
        )}
      >
        <div className="flex items-center gap-2">
          <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
            Offer Release
          </figcaption>
        </div>
        <blockquote className="mt-2 text-xs text-gray-600 dark:text-gray-300">
          Send offers instantly with no delays. Create and roll out offer
          letters in just a few clicks.
        </blockquote>
      </figure>
    </Marquee>
  </div>
);

const Skeleton2 = () => (
  <div className="relative w-full h-40 overflow-hidden">
    <AnimatedListDemo
      className="absolute inset-0 h-full w-full scale-90 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-95"
    />
  </div>
);

const Skeleton3 = () => (
  <div className="relative w-full h-40 overflow-hidden dark:bg-gray-800 rounded-t-xl">
    <svg
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <polyline
        fill="none"
        stroke="#652d96"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        points="0,80 40,60 80,40 120,50 160,30 200,45 240,20 280,25 300,15"
      >
        <animate
          attributeName="points"
          dur="2s"
          repeatCount="indefinite"
          values="
            0,80 40,60 80,40 120,50 160,30 200,45 240,20 280,25 300,15;
            0,75 40,55 80,42 120,48 160,33 200,43 240,25 280,20 300,18;
            0,80 40,60 80,40 120,50 160,30 200,45 240,20 280,25 300,15
          "
        />
      </polyline>
    </svg>
  </div>
);

const Skeleton4 = () => (
  //  <AnimatedBeamDemo/>
  <div className="">
    <img src="https://res.cloudinary.com/dxfujspwu/image/upload/v1744030263/ppp_ixy0ct.png" alt="img" className="w-full"/>
  </div>
);

const items = [
  {
    title: "Offer Release",
    description:
      "Send offers instantly. No delays. Create and roll out offer letters in just a few clicks. Streamlined, fast, and fully automated.",
    header: <Skeleton1 />,
    className: "col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Offer Tracking",
    description:
      "Track every offer in real time. Monitor status updates from 'Sent' to 'Signed' to 'Joined' — all in one place.",
    header: <Skeleton2 />,
    className: "col-span-1",
    icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Joining Prediction",
    description:
      "AI-powered joining probability. We crunch behavioral and historical data to predict candidate acceptance.",
    header: <Skeleton3 />,
    className: "md:col-span-2",
    icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Two-Way Reviews",
    description:
      "Enable feedback from both recruiter and candidate. Improve your process and build trust.",
    header: <Skeleton4 />,
    className: "md:col-span-2",
    icon: <IconArrowsExchange className="h-4 w-4 text-neutral-500" />,
  },
];

export default GridCard;