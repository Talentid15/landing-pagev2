import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";

export const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Start for Free",
    popular: false,
    inverse: false,
    features: [
      "Access to 5 free machine learning models",
      "Limited usage: 5 requests per day",
      "Up to 2 projects",
      "Basic email support",
      "Limited storage: 1GB",
      "Basic integrations"
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 15,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Deploy up to 5 custom ML models per month",
      "Access to all free models and some premium models",
      "Unlimited usage on free models",
      "Up to 10 projects",
      "Priority email support",
      "Custom analytics & insights",
      "Faster response times for requests"
    ],
  },
  {
    title: "Business",
    monthlyPrice: 35,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Deploy up to 15 custom ML models per month",
      "Unlimited access to all free and premium models",
      "Unlimited usage",
      "Unlimited projects",
      "Full analytics dashboard & export support",
      "Custom integrations & API access",
      "Advanced security features",
      "Priority review for your models",
    ],
  },
];

export const testimonials = [
  {
    text: "As an HR Manager, Talentid.app gave me early insights into candidate behavior, making shortlisting and follow-ups far more effective.",
    imageSrc: avatar1,
    name: "Aarav Sharma",
    username: "HR Manager",
  },
  {
    text: "As an HR Manager, Talentid.app helped me track candidate intent and reduce drop-offs by staying proactive throughout the hiring journey.",
    imageSrc: avatar2,
    name: "Priya Patel",
    username: "HR Manager",
  },
  {
    text: "As a Talent Acquisition Manager, I loved how Talentid.app flagged at-risk candidates, allowing faster, more targeted engagement and quicker closures.",
    imageSrc: avatar3,
    name: "Rohit Singh",
    username: "Talent Acquisition Manager",
  },
  {
    text: "As a CHRO, Talentid.app gave me full visibility into the hiring funnel, streamlining reporting and improving candidate engagement across teams.",
    imageSrc: avatar4,
    name: "Ayesha Khan",
    username: "CHRO",
  },
  {
    text: "As a People Coordinator, Talentid.app enabled us to bring transparency and velocity to every step of the hiring pipeline.",
    imageSrc: avatar5,
    name: "Neha Verma",
    username: "People Coordinator",
  },
  {
    text: "As an HR Executive, Talentid.app empowered me with real-time pipeline insights, helping me reduce time-to-hire with confident, data-driven decisions.",
    imageSrc: avatar6,
    name: "Ankit Gupta",
    username: "HR Executive",
  },
  {
    text: "As a People Operations Associate, Talentid.app aligned our hiring teams around intent signals and engagement metrics—truly a game-changer.",
    imageSrc: avatar7,
    name: "Shreya Iyer",
    username: "People Operations Associate",
  },
  {
    text: "As an HR Manager, Talentid.app took the guesswork out of hiring. We now act at the right time with data-backed confidence.",
    imageSrc: avatar8,
    name: "Vijay Reddy",
    username: "HR Manager",
  },
  {
    text: "As a People Lead, Talentid.app transformed hiring from a black box to a strategic process led by data and clear intent signals.",
    imageSrc: avatar9,
    name: "Anjali Desai",
    username: "People Lead",
  },
];
