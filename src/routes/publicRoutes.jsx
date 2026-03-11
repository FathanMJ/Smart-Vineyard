import { Route } from 'react-router-dom'
import { PublicPaths } from './routePaths'
import LandingPage from '../shared/pages/LandingPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.jsx'

export function PublicRoutes() {
  return (
    <>
      <Route path={PublicPaths.landing} element={<LandingPage />} />
      <Route path={PublicPaths.login} element={<LoginPage />} />
      <Route path={PublicPaths.forgotPassword} element={<ForgotPasswordPage />} />
    </>
  )
}

