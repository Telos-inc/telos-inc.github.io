type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    }
  }
}

type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
    categories: string[]
  }
}

type MainNewsFrontmatterType = {
  title: string
  date: string
}

type MainNewsItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: MainNewsFrontmatterType
  }
}
