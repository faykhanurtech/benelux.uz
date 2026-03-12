import Hero from "../../components/home/Hero"
import Events from "../../components/home/Events"
import About from "../../components/home/About"
import Partners from "../../components/home/Partners"
import Members from "../../components/home/Members"
import News from "../../components/home/News"
import JoinForm from "../../components/home/JoinForm"
export default function HomePage() {
  return (
    <>
      <Hero />
      <Events />
      <About />
      <Partners />
      <Members />
      <News />
      <JoinForm />
    </>
  )
}