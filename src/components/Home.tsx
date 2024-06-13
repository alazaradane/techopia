import AboutUs from "./AboutUs"
import Hero from "./Hero"
import Mission from "./Mission"
import Service from "./Service"



const Home = () => {
  return (
    <main className=" w-full h-fit bg-primary">
      <Hero/>
      <Service/>
      <AboutUs/>
      <Mission/>
    </main>
  )
}

export default Home