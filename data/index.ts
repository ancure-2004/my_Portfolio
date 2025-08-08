export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "I am Ankur Tyagi",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Fixing Scheduling Chaos with AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zephyros - Collaborative AI Code Editor",
    des: "A real-time collaborative code editor with live chat, built-in AI assistant, and the ability to run servers directly in the browser.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/three.svg", "/mongodb.svg"],
    link: "https://github.com/ancure-2004/Zephyros-AI-Code-Editor",
    name: "./Zephyros",
    video: ""
  },
  {
    id: 2,
    title: "Velora - Ride Booking App",
    des: "A mobile-first ride booking app with captain and user roles, real-time ride updates via Socket.IO, and live tracking of rides",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/gsap.svg", "/mongodb.svg"],
    link: "https://github.com/ancure-2004/Velora",
    name: "./Velora",
    video: ""
  },
  {
    id: 3,
    title: "WalletFlow - Expense Tracker Web App",
    des: "A modern expense tracker with real-time syncing, smart categorization, and seamless budget management across devices.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/javascript.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ancure-2004/Wallet-Flow",
    name: "./WalletFlow",
    video: ""
  },
  {
    id: 4,
    title: "Kipin – A place to save notes",
    des: "A simple note-saving app with offline support using local storage for quick and easy access.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/github.svg", "/javascript.svg", "/gsap.svg"],
    link: "https://github.com/ancure-2004/kipin-notes-saving-app",
    name: "./Kipin",
    video: ""
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Aman Singhal",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Daksh Kaushik",
    title: "Director of AlphaStream Technologies",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "700+ DSA Problems Solved",
    desc: "Strengthened algorithmic thinking by consistently solving over 700+ problems across LeetCode, GFG, Codeforces, and other competitive platforms.s",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Postman API Fundamental Student Expert",
    desc: "Certified in designing, testing, and documenting APIs using Postman best practices.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/Postman.png",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "GirlScript Summer of Code '25",
    desc: "Contributed to EdgeCareer AI project as a Full Stack developer",
    className: "md:col-span-2",
    thumbnail: "/gssoc.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ancure-2004"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ankur2004tyagi"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ankur-tyagi2004"
  },
];