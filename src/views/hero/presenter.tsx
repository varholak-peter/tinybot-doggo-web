import { graphql } from 'gatsby'
import { HeroView } from '@GTypes/HeroView'

type PresenterInput = HeroView | null

type PresenterOutput = {
  cta_button_href: string
  cta_button_text: string
  legal: string
  privacy_policy_href: string
  privacy_policy_text: string
  subtitle: string
  title: string
}

export const query = graphql`
  fragment HeroView on MarkdownRemark {
    frontmatter {
      cta_button_href
      cta_button_text
      legal
      privacy_policy_href
      privacy_policy_text
      subtitle
      title
    }
  }
`

export const presentData = (heroView: PresenterInput): PresenterOutput => {
  const { frontmatter } = heroView || {}

  return {
    cta_button_href: frontmatter?.cta_button_href ?? '/',
    cta_button_text: frontmatter?.cta_button_text ?? '',
    legal: frontmatter?.legal ?? '',
    privacy_policy_href: frontmatter?.privacy_policy_href ?? '',
    privacy_policy_text: frontmatter?.privacy_policy_text ?? '',
    subtitle: frontmatter?.subtitle ?? '',
    title: frontmatter?.title ?? '',
  }
}
