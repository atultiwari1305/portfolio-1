// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// import Hero from './sections/Hero';
// import About from './sections/About';
// import Projects from './sections/Projects';
// import Skills from './sections/Skills';
// import Education from './sections/Education';
// import Certifications from './sections/Certifications';
// import Contact from './sections/Contact';

// const App = () => {
//   return (
//     <div className="font-sans scroll-smooth">
//       <Navbar />
//       <main className="pt-20">
//         <Hero />
//         <About />
//         <Projects />
//         <Skills />
//         <Education />
//         <Certifications />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import RenderingComp from './RenderingComp';

export default function App() {
  return (
    <div>
      <h1>React App That Always Crashes</h1>
      <RenderingComp />
    </div>
  );
}
