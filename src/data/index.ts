import { code, cursor, money, secure } from "../assets/images"

export const navItems = [
    {name: 'Home', link:'/'},
    {name: 'Projects', link:'/projects/:id'},
    {name: 'Blogs', link:'/blogs/:id'},
    {name: 'Events', link:'/events/:id'},
    {name:"Services", link:'#service'},
    {name:"About Us", link:'#about_us'}
]

export const hero_text = [
    "Welcome to Techopia, your ultimate partner in digital innovation! We specialize in web development, graphic design, and business growth solutions, offering cutting-edge services to elevate your brand. Whether you're looking to create a stunning website, design captivating graphics, or join our empowering internship programs, Techopia is here to help you. Let's build your success story together!"
]

export const service = [
    {id:1, icon:cursor, name: 'Web Development',short:"Modern and Secured Web Development Solutions", desc:"Build responsive, user-friendly websites tailored to your unique needs with our cutting-edge web development services.", },
    {id:2,icon:secure, name: 'Graphics Design', short:"Creative and Cutting-edge Design",desc:"Create visually stunning graphics that effectively communicate your brand message and make a lasting impression.", },
    {id:3,icon:money, name: 'Businees Growth Solutions', short:"Empower your business",desc:"Enhance wewewewwwww your online visibility and attract more customers with our strategic planning, digital marketing, and SEO services", },
    {id:4,icon:code, name: 'Internship Programs',short:"Boost your skills", desc:"Gain hands-on experience and mentorship in web development and graphic design through our dynamic internship programs.", }
]