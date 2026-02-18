// Import tailwind css
import "./App.css";
// Import lib untuk route
import { Link, Route } from "wouter";
// Import compenents
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import ScrollToTop from "./compenents/ScrollToTop";
// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// Import data
import { personal } from "./data/personal.js";
import { projects } from "./data/projects.js";
import { testimonials } from "./data/testimonials.js";
import { posts } from "./data/posts.js";
import { sertifs } from "./data/sertifs.js";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Header */}
      <Header />

      {/* Main */}
      <Route path="/">
        <Home
          dataPersonal={personal}
          dataProjects={projects}
          dataTestimonials={testimonials}
        />
      </Route>
      <Route path="/about">
        <About
          dataSertifs={sertifs}
          dataPersonal={personal}
          dataPosts={posts}
        />
      </Route>
      <Route path="/projects">
        <Projects projects={projects} />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>

      {/* Footer */}
      <Footer Link={Link} />
    </>
  );
}

export default App;
