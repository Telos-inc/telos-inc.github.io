import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout/Layout'
import MainBanner from 'components/main/MainBanner'
import MainDescription from 'components/main/MainDescription'
import MainCenterAnimate from 'components/main/MainCenterAnimate'
import MainPhotoZone from 'components/main/MainPhotoZone'
import MainBottomAnimate from 'components/main/MainBottomAnimate'
import MainNews from 'components/main/MainNews'
import MainContact from 'components/main/MainContact'
import SEO from 'components/shared/SEO'

type MainPageProps = {
  data: {
    allMarkdownRemark: {
      edges: MainNewsItemType[]
    }
  }
}

const IndexPage = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}: MainPageProps) {
  return (
    <Layout>
      {/* 필요시 title description props 전달
      description은 옵셔널로 props로 넣지 않을 시 
      Raise your flag to tomorrow 로 고정됨 */}
      <SEO title="HOME" description="메인 페이지" />
      <MainBanner />
      <MainDescription />
      <MainCenterAnimate />
      <MainPhotoZone />
      <MainBottomAnimate />
      <MainNews mainNewsList={edges} />
      <MainContact />
    </Layout>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`
