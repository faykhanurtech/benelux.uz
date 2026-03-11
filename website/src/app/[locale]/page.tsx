import Hero from "../../components/home/Hero"
import Events from "../../components/home/Events"
import About from "../../components/home/About"
import News from "../../components/home/News"
import JoinForm from "../../components/home/JoinForm"
export default function HomePage() {
  return (
    <>
      <Hero />
      <Events />
      <About />
      <News />
      <JoinForm />
    </>
  )
}