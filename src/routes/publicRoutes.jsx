import { Route } from 'react-router-dom'
import { PublicPaths } from './routePaths'
import LandingPage from '../shared/pages/LandingPage.jsx'
import LoginPage from '../pages/auth/LoginPage.jsx'
import RegisterPage from '../pages/auth/RegisterPage.jsx'

export function PublicRoutes() {
  return (
    <>
      <Route path={PublicPaths.landing} element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </>
  )
}

