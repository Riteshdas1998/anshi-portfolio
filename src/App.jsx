import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer'; // নতুন Footer সেকশন ইমপোর্ট করা হলো

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ওয়েবসাইটের সব সেকশন ধাপে ধাপে সাজানো হলো */}
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Products />
      <Testimonials />
      <Blog />
      <Contact />
      
      {/* একদম নিচে যুক্ত করা ফুটার */}
      <Footer />
    </div>
  )
}

export default App;