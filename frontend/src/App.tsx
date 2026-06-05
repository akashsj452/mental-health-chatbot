import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ChatPage from './pages/ChatPage'
import MoodTrackerPage from './pages/MoodTrackerPage'
import ResourcesPage from './pages/ResourcesPage'
import CopingStrategiesPage from './pages/CopingStrategiesPage'
import TherapistFinderPage from './pages/TherapistFinderPage'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/Layout'
import { useAuthStore } from './stores/authStore'

function App() {
  const { isAuthenticated, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <Route element={<Layout />}>
            <Route path="/" element={<ChatPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/mood" element={<MoodTrackerPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/coping" element={<CopingStrategiesPage />} />
            <Route path="/therapists" element={<TherapistFinderPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/chat" replace />} />
          </Route>
        )}
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  )
}

export default App
