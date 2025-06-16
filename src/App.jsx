// src/App.jsx
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* This is where page content will be rendered */}
      </main>
      <Footer />
    </div>
  )
}
