import AboutUs from "./AboutUs"
import Hero from "./Hero"
import Service from "./Service"
import Metor from "./ui/Metor"


const Home = () => {
  return (
    <main className=" w-full h-fit bg-primary">
      <Hero/>
      <Service/>
      <AboutUs/>
      <Metor/>
    </main>
  )
}

export default Home