type Option = {
  text: string;
  image?: string;
};

type Question = {
  id: number;
  question: string;
  paragraph?: string;
  options: Option[];
};


export const questions: Question[] = [
  {
    id: 1,
    question: "What is your main goal?",
    options: [
      { text: "Grow wealth", image: "/images/q1o1.png" },
      { text: "Be my own boss", image: "/images/q1o2.png" },
      { text: "Financial freedom", image: "/images/q1o3.png" },
      { text: "Travel the world", image: "/images/q1o4.png" },
      { text: "Professional growth", image: "/images/q1o5.png" },
      { text: "Work-life balance", image: "/images/q1o6.png" },
    ],
  },
  {
    id: 2,
    question: "What is your current income source?",
    options: [
      { text: "Full-time job", image: "/images/q2o1.png" },
      { text: "Passive income", image: "/images/q2o2.png" },
      { text: "Other", image: "/images/q4o7.png" },
    ],
  },
  {
    id: 3,
    question: "What is your work schedule like?",
    options: [
      { text: "9 to 5", image: "/images/q3o1.png" },
      { text: "Night shifts", image: "/images/q3o2.png" },
      { text: "My hours are flexible", image: "/images/q3o3.png" },
      { text: "I'am retired", image: "/images/q3o4.png" },
    ],
  },
  {
    id: 4,
    question: "What are the challenges with your current job?",
    options: [
      { text: "Low income", image: "/images/q4o1.png" },
      { text: "Financial dependence", image: "/images/q4o2.jpg" },
      { text: "No free time", image: "/images/q4o3.png" },
      { text: "Routine", image: "/images/q4o4.png" },
      { text: "Constant stress", image: "/images/q5o2.png" },
      { text: "Toxic enviorment", image: "/images/q406.png" },
      { text: "Other", image: "/images/q4o7.png" },
    ],
  },
  {
    id: 5,
    question: "How would you describe your financial situation?",
    options: [
      { text: "I'm comfortable", image: "/images/q5o1.png" },
      { text: "I would like to have more stability", image: "/images/q5o2.png" },
      { text: "I'm struggling to meet my finanical goals", image: "/images/q5o3.png" },
    ],
  },
  {
    id: 6,
    question: "What annual income level do you want to achieve?",
    options: [
      { text: "$30,000 - $50,000", image: "/images/m1.png" },
      { text: "$50,000 - $100,000", image: "/images/m2.png" },
      { text: "More than $100,000", image: "/images/bg1.png" },
    ],
  },
  {
    id: 7,
    question: "Do you wish you had more control over your work hours and location?",
    options: [
      { text: "Yes", image: "/images/q7o1.png" },
      { text: "No", image: "/images/q7o2.png" },
      { text: "hm, not sure", image: "/images/q4o7.png" },
    ],
  },
  {
    id: 8,
    question: "Would you enjoy a job where something else does the routine work for you?",
    options: [
      { text: "Its's a dream" },
      { text: "Somewhat" },
      { text: "Maybe"  },
      { text: "Not necessarily"  },
    ],
  },
  {
    id: 9,
    question: "What would you do with the time saved from cutting out boring tasks?",
    options: [
      { text: "Pursue creative passions", image: "/images/q9o1.png" },
      { text: "Deepen relationships with loved ones", image: "/images/q9o2.png" },
      { text: "Boost personal growth", image: "/images/q9o3.png" },
      { text: "Prioritize health and well-being", image: "/images/q5o1.png" },
    ],
  },
  {
    id: 10,
    question: "Would you enjoy a job that matches your interests?",
    options: [
      { text: "Absolutely"},
      { text: "Somewhat"},
      { text: "Maybe"},
      { text: "Not necessarily" },
    ],
  },
  {
    id: 11,
    question: "How much do you know about digital business?",
    options: [
      { text: "I,am well informed about it", image: "/images/q11o1.png" },
      { text: "I'm familiar with some aspects", image: "/images/q11o2.png" },
      { text: "My knowlegde is limited", image: "/images/q11o3.png" },
    ],
  },
  {
    id: 12,
    question: "Have you previously earned money through some sort of side hustle?",
    options: [
      { text: "Yes, occasional side gips", image: "/images/q4o1.png" },
      { text: "No just a regular job", image: "/images/q12o2.png" },
      { text: "Freelanced for extra income", image: "/images/q2o2.png" },
    ],
  },
  {
    id: 13,
    question: "Are you comfortable with learning new skills or techniques?",
    options: [
      { text: "Yes", image: "/images/q7o1.png" },
      { text: "No", image: "/images/q7o2.png" },
      { text: "hm, not sure", image: "/images/q4o7.png" },
    ],
  },
  {
    id: 14,
    question: "What AI tools are you already familiar with?",
    options: [
      { text: "I'm new to AI tools", image: "/images/q4o7.png" },
      { text: "ChatGPT", image: "/images/q14o2.png" },
      { text: "Midjourney", image: "/images/q14o3.png" },
      { text: "Google Gemini", image: "/images/q14o4.png" },
      { text: "Otter.ai", image: "/images/q14o5.png" },
      { text: "AIVA", image: "/images/q14o6.png" },
      { text: "DALL-E", image: "/images/q9o1.png" },
      { text: "Jasper", image: "/images/q11o2.png" },
      { text: "Copilot", image: "/images/q14o5.png" },
      { text: "OpenAI Playground", image: "/images/q14o9.png" },
    ],
  },
  {
    id: 15,
    question: "Rate your knowledge in content writing",
    paragraph: "According to Upwork, freelance content writer makes around $42,000 annually.",
    options: [
      { text: "Expert", image: "/images/q15o1.png" },
      { text: "Proficient", image: "/images/q15o2.png" },
      { text: "Intermediate", image: "/images/q4o7.png" },

    ],
  },
  {
    id: 16,
    question: "Rate your knowledge in digital marketing",
    paragraph: "According to Upwork, digital marketer makes around $100,000 annually.",
    options: [
      { text: "Expert", image: "/images/q15o1.png" },
      { text: "Proficient", image: "/images/q15o2.png" },
      { text: "Intermediate", image: "/images/q4o7.png" },
      { text: "Novice", image: "/images/q16o4.png" },
    ],
  },
  {
    id: 17,
    question: "Did you know that AI tools may boost your income potential even further?",
    options: [
      { text: "Yes, I,ve heard of it", image: "/images/q9o2.png" },
      { text: "I'm curious", image: "/images/q11o1.png" },
      { text: "No, this is news to me", image: "/images/q17o3.png" },
    ],
  },
  {
    id: 18,
    question: "What fields would you personally like to try yourself in?",
    paragraph: "Choose all that apply",
    options: [
      { text: "Graphic Design", image: "/images/q14o3.png" },
      { text: "Content Creation", image: "/images/q18o2.png" },
      { text: "Web Development", image: "/images/q14o4.png" },
      { text: "Artificial Intelligence", image: "/images/q14o2.png" },
      { text: "Digital Marketing", image: "/images/q18o5.png" },
      { text: "Social Media Managment", image: "/images/q18o6.png" },
      { text: "Video Editing", image: "/images/q1807.png" },
      { text: "Photography", image: "/images/q18o8.png" },
      { text: "E-commerce", image: "/images/q18o9.png" },
      { text: "Consulting", image: "/images/q18o10.png" },
    ],
  },
  {
    id: 19,
    question: "Rate your readiness to master AI",
    options: [
      { text: "All set", image: "/images/q19o1.png" },
      { text: "Ready", image: "/images/q19o2.png" },
      { text: "Somewhat Ready", image: "/images/q19o3.png" },
      { text: "Not ready", image: "/images/q16o4.png" },
    ],
  },
  {
    id: 20,
    question: "Do you find it easy to maintain your focus?",
    options: [
      { text: "Yes, I can easily stay focused", image: "/images/q5o1.png" },
      { text: "Mostly, but I sometimes get distracted", image: "/images/q20o2.png" },
      { text: "I often struggle", image: "/images/q20o3.png" },
      { text: "No I frequently procrastinate", image: "/images/q16o4.png" },
    ],
  },
  {
    id: 21,
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Yes, I can easily stay focused", image: "/images/earth.jpg" },
      { text: "Mostly, but I sometimes get distracted", image: "/images/mars.jpg" },
      { text: "I often struggle", image: "/images/jupiter.jpg" },
      { text: "No I frequently procrastinate", image: "/images/saturn.jpg" },
    ],
  },
  {
    id: 22,
    question: "Is there something special you wish to achieve?",
    paragraph: "You’re more likely to reach your goal if you have something important to aim for",
    options: [
      { text: "Buy a house", image: "/images/earth.jpg" },
      { text: "A perfect wedding", image: "/images/mars.jpg" },
      { text: "C) Jupiter", image: "/images/jupiter.jpg" },
      { text: "D) Saturn", image: "/images/saturn.jpg" },
    ],
  },
  {
    id: 23,
    question: "How much time are you ready to spend to achieve your goal?",
    options: [
      { text: "5 min/day"},
      { text: "10 min/day"},
      { text: "15 min/day"},
      { text: "20 min/day"},
    ],
  },
];
