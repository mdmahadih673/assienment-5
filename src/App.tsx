import { Suspense, useState } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Technologies from "./components/Technology/Technologies"
import type { ITechnologyType } from "./types/TechnologyType"
import { ToastContainer } from "react-toastify"
import Footer from "./components/Footer/Footer"

const technologiesfetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch('/technologies.json')
  const data = await res.json()
  return data
}
function App() {
  const [technologiesPromise] = useState(() => technologiesfetch())


  return (
    <>
      <div className="container mx-auto">
        <ToastContainer />
        <Navbar />
        <Hero />
        <Suspense fallback={<h1>Loading.........</h1>}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>
      </div>
      <Footer />

    </>
  )
}

export default App
