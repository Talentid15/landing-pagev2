import avatar1 from "@/app/assets/avatar-1.png";
import avatar2 from "@/app/assets/avatar-2.png";
import avatar3 from "@/app/assets/avatar-3.png";
import avatar4 from "@/app/assets/avatar-4.png";
import avatar5 from "@/app/assets/avatar-5.png";
import avatar6 from "@/app/assets/avatar-6.png";
import avatar7 from "@/app/assets/avatar-7.png";
import avatar8 from "@/app/assets/avatar-8.png";
import avatar9 from "@/app/assets/avatar-9.png";

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
    text: "As an HR Intern, Talentid.app helped me understand candidate behavior early on. It gave me the edge I needed during shortlisting and follow-ups.",
    imageSrc: avatar1.src,
    name: "Aarav Sharma",
    username: "HR Manager",
  },
  {
    text: "Talentid.app transformed how I track intent signals. As a People Ops Intern, I could proactively support my team in reducing drop-offs.",
    imageSrc: avatar2.src,
    name: "Priya Patel",
    username: "HR Manager",
  },
  {
    text: "Being a Talent Acquisition Intern, I loved how it flagged at-risk candidates early—helping me engage better and close faster.",
    imageSrc: avatar3.src,
    name: "Rohit Singh",
    username: "Talent Acquisition Manager",
  },
  {
    text: "I started as an HR Trainee, and Talentid.app gave me visibility into the hiring funnel. It made reporting and candidate follow-up a breeze.",
    imageSrc: avatar4.src,
    name: "Ayesha Khan",
    username: "CHRO",
  },
  {
    text: "As a People Coordinator, Talentid.app helped us bring transparency and speed to every stage of the hiring process.",
    imageSrc: avatar5.src,
    name: "Neha Verma",
    username: "People Coordinator",
  },
  {
    text: "Talentid.app brought real-time insights into our hiring pipeline. As an HR Executive, I could finally reduce time-to-hire with data-backed decisions.",
    imageSrc: avatar6.src,
    name: "Ankit Gupta",
    username: "HR Executive",
  },
  {
    text: "From intent signals to candidate behavior—Talentid.app helped me align hiring teams like never before. A game-changer for any People Operations Associate.",
    imageSrc: avatar7.src,
    name: "Shreya Iyer",
    username: "People Operations Associate",
  },
  {
    text: "The platform eliminated guesswork for me as an HR Manager. We now know which candidates need attention and when to act.",
    imageSrc: avatar8.src,
    name: "Vijay Reddy",
    username: "HR Manager",
  },
  {
    text: "Hiring used to feel like a black box. With Talentid.app, I lead with data and close high-intent candidates quickly.",
    imageSrc: avatar9.src,
    name: "Anjali Desai",
    username: "People Lead",
  },
];
