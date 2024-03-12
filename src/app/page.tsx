// Imports

// Files
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Header />
      </div>
      <div className="">
        <About />
      </div>

      <div className="">
        <Projects />
      </div>
      <div className="">
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
