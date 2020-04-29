import { graphql, useStaticQuery } from 'gatsby'

import { IndexPage } from '@GTypes/IndexPage'

type PresenterInput = IndexPage['indexPage']

type PresenterOutput = {
  description: string
  title: string
}

export const query = graphql`
  query IndexPage {
    indexPage: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        title
        description
      }
    }
    heroView: markdownRemark(frontmatter: { templateKey: { eq: "hero" } }) {
      ...HeroView
    }
  }
`

export const presentData = (indexPage: PresenterInput): PresenterOutput => {
  const { frontmatter } = indexPage || {}

  return {
    description: (frontmatter && frontmatter.description) || 'Description',
    title: (frontmatter && frontmatter.title) || 'Title',
  }
}

type UseDataOutput = {
  fragments: {
    heroView: IndexPage['heroView']
  }
  page: PresenterOutput
}

export const useData = (): UseDataOutput => {
  const data = useStaticQuery<IndexPage>(query)

  return {
    fragments: {
      heroView: data.heroView,
    },
    page: presentData(data.indexPage),
  }
}
