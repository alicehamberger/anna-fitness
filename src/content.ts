// All business details below are proposed creative content, not verified facts.
// Confirm service capacity, qualifications, price and legal terms before launch.
export const site = {
  brand: "Form & Flourish",
  byline: "by Anna",
  tagline: "Stronger. More confident. More you.",
  conceptPreview: true,
  offer: {
    name: "The Flourish Method",
    duration: "Six months",
    price: "€4,000",
    priceQualifier: "total",
    introMinutes: 20,
    commitments: [
      {
        title: "A thoughtful starting point",
        text: "One 60-minute onboarding and goal-setting call to understand your life, your goals and where you’re starting.",
      },
      {
        title: "Training that evolves with you",
        text: "An individual home or gym plan, reviewed every four weeks and adjusted as needed.",
      },
      {
        title: "Practical nutrition guidance",
        text: "Personalised nutrition education and habit guidance within the coach’s qualifications.",
      },
      {
        title: "A weekly moment to reset",
        text: "One written check-in each week, with personalised feedback and clear next steps.",
      },
      {
        title: "Real conversations, regularly",
        text: "One 30-minute 1:1 video coaching call every two weeks.",
      },
      {
        title: "Confidence in your technique",
        text: "Individual exercise-technique feedback on the videos you choose to submit.",
      },
      {
        title: "Support between check-ins",
        text: "Weekday messaging support, with a proposed response target of two business days.",
      },
      {
        title: "Your plan, in one place",
        text: "A simple place to view your training and track the progress we agree matters to you.",
      },
      {
        title: "A plan for what comes next",
        text: "A final maintenance plan to help you continue independently after our six months together.",
      },
    ],
  },
  booking: {
    // Set one HTTPS provider URL to enable outbound scheduling.
    // The form still does not transmit or store its fields; no query-string PII.
    url: "",
    noteMaxLength: 400,
  },
  images: {
    hero: {
      src: "/images/training.jpg",
      alt: "An adult woman training with dumbbells in a gym",
      width: 1100,
      height: 1650,
    },
    anna: {
      src: "/images/coach-placeholder.jpg",
      alt: "Stock model holding dumbbells in a gym; a placeholder for Anna’s own photograph",
      width: 1000,
      height: 1500,
      isPlaceholder: true,
    },
    lifestyle: {
      src: "/images/everyday-food.jpg",
      alt: "A colourful, everyday meal with vegetables",
      width: 900,
      height: 600,
    },
  },
  hero: {
    eyebrow: "Personal fitness & weight-loss coaching",
    heading: ["Lose weight.", "Get stronger.", "Leave all-or-nothing behind."],
    description:
      "Personalised training, practical nutrition and six months of support to help you lose weight, grow stronger and feel more confident—without making fitness your whole life.",
    strip: [
      "6 months",
      "Personalised training",
      "Weekly check-ins",
      "Direct support",
    ],
  },
  recognition: [
    {
      title: "A busy week shouldn’t undo your plan.",
      text: "When life fills up, we simplify your routine and work out what’s realistic for the week ahead.",
    },
    {
      title: "You deserve to feel at home in the gym.",
      text: "Know what to do, how to do it and how to progress, with a plan matched to your starting point.",
    },
    {
      title: "Eating well can leave room for living.",
      text: "Build useful meal habits and flexible choices, without a new list of strict food rules.",
    },
  ],
  pillars: [
    {
      icon: "strength",
      title: "Train with purpose.",
      text: "Progressive strength training, adapted to your experience, equipment and schedule. A clear plan, with room to grow.",
      detail: "Your starting point. Your pace.",
    },
    {
      icon: "leaf",
      title: "Eat with flexibility.",
      text: "Practical nutrition education, meal structure and everyday choices, with an individual approach to your weight-management goals.",
      detail: "Real food. A real life.",
    },
    {
      icon: "sun",
      title: "Build consistency.",
      text: "Weekly reflection and problem-solving to find routines that hold up through busy weeks, travel and social occasions.",
      detail: "More practice. Less perfection.",
    },
  ],
  exampleWeek: [
    {
      day: "MON",
      name: "Full-body strength",
      detail: "Session 01 · Gym",
      icon: "strength",
    },
    {
      day: "WED",
      name: "Full-body strength",
      detail: "Session 02 · Gym",
      icon: "strength",
    },
    {
      day: "FRI",
      name: "Full-body strength",
      detail: "Session 03 · Gym",
      icon: "strength",
    },
    {
      day: "SUN",
      name: "Your weekly check-in",
      detail: "Reflect, adjust, move forward",
      icon: "message",
    },
  ],
  roadmap: [
    {
      period: "Month 1",
      title: "Find your foundations.",
      text: "Get to know your starting point and build a realistic training and food routine.",
    },
    {
      period: "Months 2–3",
      title: "Find your rhythm.",
      text: "Practise consistently, reflect on what’s working and adjust training and nutrition together.",
    },
    {
      period: "Months 4–5",
      title: "Grow through real life.",
      text: "Progress your training and learn to adapt around busy weeks, travel and changing priorities.",
    },
    {
      period: "Month 6",
      title: "Make it your own.",
      text: "Consolidate your habits and create a maintenance plan for your next chapter.",
    },
  ],
  testimonials: {
    enabled: true,
    label: "Illustrative example—not a client review",
    // Replace with consented, verified reviews, or set enabled: false before launch.
    quotes: [
      "I used to abandon the whole week after missing one session. Having a simpler plan helped me find a way back.",
      "I wanted support with weight loss, but I also wanted to feel less lost in the gym. Learning how to progress made training feel much more manageable.",
      "The check-ins helped me adapt around work and travel instead of waiting for a perfect week.",
    ],
  },
  about: {
    heading: "Your plan matters. So does the person beside you.",
    paragraphs: [
      "I believe a useful plan starts with the life you actually have. Your work, your energy, the things you enjoy and the time you can make for yourself.",
      "My approach brings practical strength training, flexible food choices and supportive accountability together. We’ll pay attention to what’s working, talk honestly about what isn’t and make changes together.",
      "You don’t need to have it all figured out. We just need a place to begin.",
    ],
    // Only add qualifications after verification. Empty fields are not displayed.
    verifiedQualifications: [] as string[],
  },
  gettingStarted: [
    {
      title: "Tell me a little about you.",
      text: "Share a few details about your goals and how you like to train.",
    },
    {
      title: "Find time for a conversation.",
      text: "Choose a free 20-minute intro call when live scheduling is configured.",
    },
    {
      title: "See if we’re a good fit.",
      text: "Talk through your goals and schedule. If we both choose to continue, I’ll explain the package, terms and next steps. There’s no obligation to buy.",
    },
  ],
  faqs: [
    {
      question: "Is this suitable for beginners?",
      answer:
        "Yes. Your starting point shapes the plan. We can begin with the basics, build your confidence with exercises and progress at a pace that suits you.",
    },
    {
      question: "Do I need a gym?",
      answer:
        "No. Your training can be built for home or a gym, using the equipment available to you. We’ll discuss what is practical on the intro call.",
    },
    {
      question: "How much time will training take?",
      answer:
        "That depends on your starting point, goals and schedule. We agree a realistic number and length of sessions together, then adjust when life changes. The example week on this page is illustrative, not a required schedule.",
    },
    {
      question: "Will I have to track calories?",
      answer:
        "Not necessarily. The nutrition approach is individualised. We can explore meal structure, habits and everyday choices, and discuss tracking only if it is appropriate and useful for you.",
    },
    {
      question: "What support do I receive?",
      answer:
        "The proposed package includes weekly written check-ins with feedback, a 30-minute video call every two weeks, training reviews every four weeks, technique feedback and weekday messaging with a proposed response target of two business days.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The Flourish Method is €4,000 total for six months of individual coaching. The free 20-minute intro call is separate from paid coaching and does not commit you to joining. This is a concept offer; final commercial terms will be confirmed before trading.",
    },
    {
      question: "Is the intro call a sales call?",
      answer:
        "It is a conversation about your goals, schedule and whether coaching could be a good fit. We may discuss the paid package and next steps, but there’s no obligation to buy.",
    },
    {
      question: "What if I have an injury or medical condition?",
      answer:
        "Coaching does not provide medical diagnosis or treatment. Depending on your circumstances, advice or clearance from an appropriate healthcare professional may be needed before training or nutrition changes. Please don’t include medical information in this short intro form.",
    },
  ],
} as const;
