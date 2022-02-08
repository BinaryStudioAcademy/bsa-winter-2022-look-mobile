import React from 'react'
import LandingPage from 'src/pages/landing-page'

const RootNavigator: React.FC = () => {
  /* TODO:
  const authorized = useSelector(...)

  if (!authorized) {
    return <AuthNavigator />
  }
  */

  return <LandingPage />
}

export default RootNavigator
