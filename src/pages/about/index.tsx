import React from 'react'
import Layout from 'components/layout/Layout'
import AboutBanner from 'components/about/AboutBanner'
import AboutBranch from 'components/about/AboutBranch'
import AboutPartners from 'components/about/AboutPartners'
import SEO from 'components/shared/SEO'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="ABOUT" description="기업 소개 페이지" />
      <AboutBanner />
      <AboutBranch />
      <AboutPartners />
    </Layout>
  )
}

export default AboutPage
