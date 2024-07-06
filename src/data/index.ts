import { ai, avatar1, avatar2, avatar3, avatar4, block, cloud, code, cursor, cyber, learn, mission, money, quanta, sbrain, secure, value, vision } from "../assets/images"

export const navItems = [
    { id:1, name: 'Home', link:'/'},
    {id:2,name: 'Projects', link:'/projects'},
    {id:3,name: 'Blogs', link:'/blogs'},
    {id:4,name: 'Events', link:'/events'},
    {id:5,name:"Services", link:'service'},
    {id:6,name:"About Us", link:'#about_us'}
]

export const hero_text = [
    "Welcome to Techopia, your ultimate partner in digital innovation! We specialize in web development, graphic design, and business growth solutions, offering cutting-edge services to elevate your brand. Whether you're looking to create a stunning website, design captivating graphics, or join our empowering internship programs, Techopia is here to help you. Let's build your success story together!"
]

export const service = [
    {id:1, icon:cursor, name: 'Web Development',short:"Modern and Secured Web Development Solutions", desc:"Build responsive, user-friendly websites tailored to your unique needs with our cutting-edge web development services.", },
    {id:2,icon:secure, name: 'Graphics Design', short:"Creative and Cutting-edge Design",desc:"Create visually stunning graphics that effectively communicate your brand message and make a lasting impression.", },
    {id:3,icon:money, name: 'Businees Growth Solutions', short:"Empower your business",desc:"Enhance wewewewwwww your online visibility and attract more customers with our strategic planning, digital marketing, and SEO services", },
    {id:4,icon:code, name: 'Internship Programs',short:"Boost your skills", desc:"Gain hands-on experience and mentorship in web development and graphic design through our dynamic internship programs.", },
    {id:5,icon:code, name: 'Internship Programs',short:"Boost your skills", desc:"Gain hands-on experience and mentorship in web development and graphic design through our dynamic internship programs.", },
]

export const idea = [
    {id:1, icon:vision,title:" Vision", desc:"We aim to be the leading partner in digital innovation, known for our excellence and transformative impact. We envision a community of empowered developers and dynamic businesses thriving together."},
    {id:2, icon:mission,title:" Mission", desc:"At Techopia, we empower businesses and individuals through innovative digital solutions. Our goal is to deliver exceptional web development, graphic design, and growth strategies that elevate brands."},
    {id:3, icon:value,title:"Values", desc:["Innovation","Empowerment","Excellence"]},
]

export const teamMembers = [
    {
      name: 'Galtbaaksh Ch.',
      role: 'CEO',
      image: avatar1, 
      highlight: true, 
      status: 'Hey there!' 
    },
    {
      name: 'Gantulga S.',
      role: 'Senior Software Engineer',
      image: avatar2
    },
    {
      name: 'Batjinnyam A.',
      role: 'Project Manager',
      image: avatar3
    },
    {
      name: 'Munkh-Erdene T.',
      role: 'UI/UX Designer',
      image: avatar4
    },
  ];

export const recentWorks = [
    {
      title: 'Kintai kanry system',
      description: 'We offer top-notch performance to our clients by providing systematic and innovative services to cater to their key products & services.',
      technologies: ['React Native', 'Next.js', 'GraphQL', 'Figma'],
      image: learn, 
      icon:secure
    },
    {
      title: 'Oyu tolgoi catalyst fund for development',
      description: 'We offer top-notch services to our clients by providing systematic and innovative services to cater to their key products & services.',
      technologies: ['ReactJS', 'GraphQL', 'Figma'],
      image: sbrain, 
      icon:cursor
    },
  ];

export const projects = [
  {
    title: 'Kintai kanry system',
    description: 'We offer top-notch performance to our clients by providing systematic and innovative services to cater to their key products & services.',
    technologies: ['React Native', 'Next.js', 'GraphQL', 'Figma'],
    image: learn, 
    icon:secure
  },
  {
    title: 'Oyu tolgoi catalyst fund for development',
    description: 'We offer top-notch services to our clients by providing systematic and innovative services to cater to their key products & services.',
    technologies: ['ReactJS', 'GraphQL', 'Figma'],
    image: sbrain, 
    icon:cursor
  },
]

export const contactUs = [
  {label:"Full Name", placeholder:'Enter your name'},
  {label:"Email Address", placeholder:'Enter your email address'},
  {label:"Phone", placeholder:'Enter your phone number'},
  {label:"Message", placeholder:'Enter your message'},
]


export interface Blog {
  id:number,
  title: string;
  category: string,
  date: string,
  img: string,
  text:string,
  desc:string

}

export const blogs:Blog[] = [
  {
    "id": 1,
    "title": "Introduction to Quantum Physics",
    "text": "Explore the fascinating world of quantum mechanics and its implications.",
    "desc": "Quantum physics is a fundamental theory in physics that describes the physical properties of nature at the scale of atoms and subatomic particles. This blog will guide you through the basics of quantum mechanics, its principles, and its significance in modern science.",
    "img": quanta,
    "category": "Science",
    "date":"21 June 2024"
  },
  {
    "id": 2,
    "title": "Mastering React for Web Development",
    "text": "Learn the essentials of React and how to build dynamic web applications.",
    "desc": "React is a popular JavaScript library for building user interfaces. In this blog, we'll cover the core concepts of React, including components, state, and props, and provide practical examples to help you get started with building your own web applications.",
    "img": cloud,
    "category": "Technology",
    "date":"21 June 2024"
  },
  {
    "id": 3,
    "title": "The Basics of Machine Learning",
    "text": "An introduction to machine learning concepts and algorithms.",
    "desc": "Machine learning is a branch of artificial intelligence that focuses on the development of algorithms that can learn from and make predictions on data. This blog will introduce you to the basics of machine learning, including supervised and unsupervised learning, and common algorithms used in the field.",
    "img": ai,
    "category": "Technology",
    "date":"21 June 2024"
  },
  {
    "id": 4,
    "title": "Advanced Calculus for Engineers",
    "text": "Understand the complex concepts of calculus and their applications in engineering.",
    "desc": "Calculus is a branch of mathematics that involves the study of rates of change and accumulation. This blog will cover advanced calculus topics such as multivariable calculus, differential equations, and their applications in various engineering fields.",
    "img": block,
    "category": "Science",
    "date":"21 June 2024"
  },
  {
    "id": 5,
    "title": "AI in Healthcare: Opportunities and Challenges",
    "text": "Explore the impact of artificial intelligence on the healthcare industry.",
    "desc": "Artificial intelligence is transforming healthcare by improving diagnostics, treatment plans, and patient care. This blog discusses the opportunities and challenges of integrating AI into healthcare, including ethical considerations and future trends.",
    "img": ai,
    "category": "Industry",
    "date":"21 June 2024"
  },
  {
    "id": 6,
    "title": "Data Science: Tools and Techniques",
    "text": "Discover the essential tools and techniques used in data science.",
    "desc": "Data science involves the extraction of knowledge and insights from structured and unstructured data. This blog will introduce you to key tools and techniques used in data science, including data preprocessing, visualization, and machine learning models.",
    "img": cyber,
    "category": "Learning",
    "date":"21 June 2024"
  },
  {
    "id": 7,
    "title": "The Future of Blockchain Technology",
    "text": "Understand the potential and future applications of blockchain technology.",
    "desc": "Blockchain technology is revolutionizing various industries by providing a secure and transparent way to record transactions. This blog explores the future of blockchain technology, its potential applications, and the challenges it faces.",
    "img": block,
    "category": "Technology",
    "date":"21 June 2024"
  },
  {
    "id": 8,
    "title": "Effective Learning Strategies for Students",
    "text": "Learn effective strategies to enhance your learning process.",
    "desc": "Learning is a lifelong process, and adopting effective strategies can significantly improve your learning outcomes. This blog shares practical tips and techniques to help students of all ages learn more effectively and efficiently.",
    "img": cloud,
    "category": "Learning",
    "date":"21 June 2024"
  },
  {
    "id": 9,
    "title": "Sustainable Living: Tips and Tricks",
    "text": "Adopt sustainable living practices to reduce your environmental impact.",
    "desc": "Sustainable living involves making lifestyle choices that reduce your environmental footprint. This blog provides practical tips and tricks to help you live more sustainably, from reducing waste to conserving energy and resources.",
    "img": ai,
    "category": "Lifestyle",
    "date":"21 June 2024"
  },
  {
    "id": 10,
    "title": "Trends in the Tech Industry",
    "text": "Stay updated with the latest trends and innovations in the tech industry.",
    "desc": "The tech industry is constantly evolving, with new trends and innovations emerging regularly. This blog highlights the latest trends in technology, including artificial intelligence, blockchain, and cybersecurity, and their potential impact on various sectors.",
    "img": cyber,
    "category": "Industry",
    "date":"21 June 2024"
  }
]


export const category = [
  {id:1, label:"All", value:""},
  {id:2, label: "Science", value:"?cat=science"},
  {id:3, label:"Technology", value: "?cat=tech"},
  {id:4, label: "Learning", value:"?cat=learn"},
  {id:5, label:"LifeStyle", value:"?cat=life"},
  {id:6, label:"Industry", value:"?cat=trend"}
]


