// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'

// Sections (Pages)
import Home from './sections/Home'
import Committee from './sections/Committee'
import CallForPapers from './sections/CallForPapers'
import Schedule from './sections/Schedule'
import Venue from './sections/Venue'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Registration from './sections/Registration'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'committee', element: <Committee /> },
      { path: 'call-for-papers', element: <CallForPapers /> },
      { path: 'schedule', element: <Schedule /> },
      { path: 'venue', element: <Venue /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'contact', element: <Contact /> },
      { path: 'registration', element: <Registration /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
