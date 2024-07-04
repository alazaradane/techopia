
import { admin } from "../assets/icons";
import { cursor, dashboard, drawing, event, learn, pen, plus, profile, sbrain, secure, view, web } from "../assets/images";



export const sidebar = [
    {id:1,  icon: dashboard, mlabel: "Dashboard", mlink:'/'},
    {id:2,  icon: web, mlabel: "Projects", vicon:view, vlabel:"View Projects", vlink:'/projects', cicon:plus, clabel: "Create Project", clink:'/projects/create'},
    {id:3,  icon: drawing, mlabel: "Blogs",vicon:view , vlabel:"View Blogs", vlink:'/blogs',cicon:plus, clabel: "Create Blogs", clink:'/blogs/create'},
    {id:4, icon: event, mlabel: "Events", vicon:view,vlabel:"View Events", vlink:'/events',cicon:plus, clabel: "Create Events", clink:'/events/create'},
    {id:5, icon: profile, mlabel: "Profile",vicon:view, vlabel:"View Profile", vlink:'/profile', cicon:pen,clabel: "Edit Profile", clink:'/profile/edit',aicon:plus, alabel:"Create Admin", alink:"/profile/create"}, 
    {id:6, icon:admin, mlabel:"Admins", mlink:"/admins"}
]

export const dashvalue =[
    {id:1, icon:web, title:"Projects", value:24, text:"+24 from last month"},
    {id:2, icon:drawing, title:"Blogs", value:"1k", text:"+50 from last month"},
    {id:3, icon:event, title:"Events", value:10, text:"+17 from last month"},
]

export const data = [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

export const projects = [
    {
      id:1,
      title: 'Kintai kanry system',
      description: 'We offer top-notch performance to our clients by providing systematic and innovative services to cater to their key products & services.',
      technologies: ['React Native', 'Next.js', 'GraphQL', 'Figma'],
      image: learn, 
      icon:secure
    },
    {
      id:2,
      title: 'Oyu tolgoi catalyst fund for development',
      description: 'We offer top-notch services to our clients by providing systematic and innovative services to cater to their key products & services.',
      technologies: ['ReactJS', 'GraphQL', 'Figma'],
      image: sbrain, 
      icon:cursor
    },
  ]

  type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
  
  export const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
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
      "img": sbrain,
      "category": "Science",
      "date":"21 June 2024"
    },
    {
      "id": 2,
      "title": "Mastering React for Web Development",
      "text": "Learn the essentials of React and how to build dynamic web applications.",
      "desc": "React is a popular JavaScript library for building user interfaces. In this blog, we'll cover the core concepts of React, including components, state, and props, and provide practical examples to help you get started with building your own web applications.",
      "img": sbrain,
      "category": "Technology",
      "date":"21 June 2024"
    },
    {
      "id": 3,
      "title": "The Basics of Machine Learning",
      "text": "An introduction to machine learning concepts and algorithms.",
      "desc": "Machine learning is a branch of artificial intelligence that focuses on the development of algorithms that can learn from and make predictions on data. This blog will introduce you to the basics of machine learning, including supervised and unsupervised learning, and common algorithms used in the field.",
      "img": sbrain,
      "category": "Technology",
      "date":"21 June 2024"
    },
    {
      "id": 4,
      "title": "Advanced Calculus for Engineers",
      "text": "Understand the complex concepts of calculus and their applications in engineering.",
      "desc": "Calculus is a branch of mathematics that involves the study of rates of change and accumulation. This blog will cover advanced calculus topics such as multivariable calculus, differential equations, and their applications in various engineering fields.",
      "img": sbrain,
      "category": "Science",
      "date":"21 June 2024"
    },
    {
      "id": 5,
      "title": "AI in Healthcare: Opportunities and Challenges",
      "text": "Explore the impact of artificial intelligence on the healthcare industry.",
      "desc": "Artificial intelligence is transforming healthcare by improving diagnostics, treatment plans, and patient care. This blog discusses the opportunities and challenges of integrating AI into healthcare, including ethical considerations and future trends.",
      "img": sbrain,
      "category": "Industry",
      "date":"21 June 2024"
    },
    {
      "id": 6,
      "title": "Data Science: Tools and Techniques",
      "text": "Discover the essential tools and techniques used in data science.",
      "desc": "Data science involves the extraction of knowledge and insights from structured and unstructured data. This blog will introduce you to key tools and techniques used in data science, including data preprocessing, visualization, and machine learning models.",
      "img": sbrain,
      "category": "Learning",
      "date":"21 June 2024"
    },
    {
      "id": 7,
      "title": "The Future of Blockchain Technology",
      "text": "Understand the potential and future applications of blockchain technology.",
      "desc": "Blockchain technology is revolutionizing various industries by providing a secure and transparent way to record transactions. This blog explores the future of blockchain technology, its potential applications, and the challenges it faces.",
      "img": sbrain,
      "category": "Technology",
      "date":"21 June 2024"
    },
    {
      "id": 8,
      "title": "Effective Learning Strategies for Students",
      "text": "Learn effective strategies to enhance your learning process.",
      "desc": "Learning is a lifelong process, and adopting effective strategies can significantly improve your learning outcomes. This blog shares practical tips and techniques to help students of all ages learn more effectively and efficiently.",
      "img": sbrain,
      "category": "Learning",
      "date":"21 June 2024"
    },
    {
      "id": 9,
      "title": "Sustainable Living: Tips and Tricks",
      "text": "Adopt sustainable living practices to reduce your environmental impact.",
      "desc": "Sustainable living involves making lifestyle choices that reduce your environmental footprint. This blog provides practical tips and tricks to help you live more sustainably, from reducing waste to conserving energy and resources.",
      "img": sbrain,
      "category": "Lifestyle",
      "date":"21 June 2024"
    },
    {
      "id": 10,
      "title": "Trends in the Tech Industry",
      "text": "Stay updated with the latest trends and innovations in the tech industry.",
      "desc": "The tech industry is constantly evolving, with new trends and innovations emerging regularly. This blog highlights the latest trends in technology, including artificial intelligence, blockchain, and cybersecurity, and their potential impact on various sectors.",
      "img": sbrain,
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