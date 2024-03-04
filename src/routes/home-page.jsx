import React from 'react'
import PageHead from '../components/page-head'
import SplashPage from '../components/splash-page'
import FeaturesPage from '../components/features-page'
import ContactPage from '../components/contact-page'
import Modal from '../components/signup-modal'
import PageFooter from '../components/page-footer'
import '../styles/home-page.css'

const HomePage = () => {
  return (
    <>
      <PageHead />
      <SplashPage />
      <FeaturesPage />
      <ContactPage />
      <Modal />
      <PageFooter />
    </>
  )
}

export default HomePage