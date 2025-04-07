"use client";

import {
  FileTextIcon,
  EyeOpenIcon,
  RocketIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import AnimatedBeamDemo from "@/components/ui/beam";
import AnimatedListDemo from "@/components/ui/list";
// import JoiningPredictionGraph from "@/components/ui/graph";

const features = [
  {
    Icon: FileTextIcon,
    name: "⚡ Offer Release",
    description:
      "Send offers instantly with no delays. Create and roll out offer letters in just a few clicks—streamlined, fast, and fully automated to secure your top choice.",
    href: "#",
    cta: "See How It Works",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        <figure
          className={cn(
            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                Offer Release
              </figcaption>
            </div>
          </div>
          <blockquote className="mt-2 text-xs">
            Send offers instantly with no delays. Create and roll out offer
            letters in just a few clicks—streamlined, fast, and fully automated
            to secure your top choice.
          </blockquote>
        </figure>
      </Marquee>
    ),
  },
  {
    Icon: EyeOpenIcon,
    name: "Offer Tracking",
    description:
      "Track every offer in real time. Monitor status updates from ‘Sent’ to ‘Signed’ to ‘Joined’—all in one place with no blind spots.",
    href: "#",
    cta: "Discover More",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo
        className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: RocketIcon,
    name: "Joining Prediction",
    description:
      "AI-powered joining probability delivered. We crunch behavioral, historical, and contextual data to predict whether a candidate will join before the offer is even sent.",
    href: "#",
    cta: "Explore Insights",
    className: "col-span-3 lg:col-span-2",
    background: (
      <svg
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute top-0 left-0"
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
            dur="4s"
            repeatCount="indefinite"
            values="
              0,80 40,60 80,40 120,50 160,30 200,45 240,20 280,25 300,15;
              0,75 40,55 80,42 120,48 160,33 200,43 240,25 280,20 300,18;
              0,80 40,60 80,40 120,50 160,30 200,45 240,20 280,25 300,15
            "
          />
        </polyline>
      </svg>
    ),
    
  },
  {
    Icon: ChatBubbleIcon,
    name: "Two-Way Reviews",
    description:
      "Enable feedback from both the recruiter and the candidate. Improve your process, build trust, and create a more human hiring experience.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Get Started",
    background: <AnimatedBeamDemo />,
  },
];

export default function GridCard() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hire Smarter, Faster, Better
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Talentid.app empowers you with instant offer delivery, real-time
          tracking, AI-driven insights, and transparent feedback—all in one
          seamless platform.
        </p>
      </div>
      <BentoGrid className="gap-6">
        {features.map((feature, idx) => (
          <BentoCard
            key={idx}
            {...feature}
            className={cn(
              feature.className,
              "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl",
              "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            )}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
