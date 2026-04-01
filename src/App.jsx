import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WhyFarmcult from './pages/WhyFarmcult';
import Technology from './pages/Technology';
import PassiveIncome from './pages/PassiveIncome';
import TurnkeySolution from './pages/TurnkeySolution';
import EducationTraining from './pages/EducationTraining';
import './index.css';
import Blogs from './pages/Blogs';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/[...Blog]';
import CaseStudy from './pages/[...CaseStudy]';
import TopBanner from './components/TopBanner';

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const showBanner = location.pathname !== '/';

  return (
    <>
      {showBanner && (
        <div className="w-full pt-[75px] md:pt-[80px] z-50 relative bg-white">
          {/* <TopBanner /> */}
        </div>
      )}
      <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/passive-income" element={<PassiveIncome />} />
        <Route path="/turnkey-solution" element={<TurnkeySolution />} />
        <Route path="/education-and-training" element={<EducationTraining />} />
        <Route path="/why-farmcult" element={<WhyFarmcult />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </AnimatePresence>
    </>
  );
};

function App() {
  const containerRef = useRef();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling globally
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    window.lenis = lenis;

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <Router>
      <div className="overflow-clip min-h-screen relative" ref={containerRef}>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;