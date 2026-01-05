
import Center from '../components/Hero'
import Navbar from '../components/Nav'
import About from '../components/About'
import Features from '../components/Features'
import States from '../components/States'
import Services from '../components/Services'

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Center/>
        <About/>
        <Features/>
        <States/>
        <Services/>
    </div>
  )
}

export default Landing