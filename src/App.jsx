import Navbar from './components/Navbar'
// import Footer from './components/Footer'

import Home from './sections/Home'
import About from './sections/About'
import Committee from './sections/Committee'
import CallForPapers from './sections/CallForPapers'
import Schedule from './sections/Schedule'
import Venue from './sections/Venue'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
// import Registration from './sections/Registration'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="space-y-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="committee"><Committee /></section>
        <section id="call-for-papers"><CallForPapers /></section>
        <section id="schedule"><Schedule /></section>
        <section id="venue"><Venue /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
        {/* <section id="registration"><Registration /></section> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

// import Navbar from './components/Navbar';
// import Home from './sections/Home';
// import About from './sections/About';
// function App() {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <Home />
//       <About/>
//     </div>
//   );
// }


export default App;


