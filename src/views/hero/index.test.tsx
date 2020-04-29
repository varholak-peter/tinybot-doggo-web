import { presentData } from './presenter'

describe('Hero view presenter', () => {
  it('happy path', () => {
    const input = {
      __typename: 'MarkdownRemark',
      frontmatter: {
        __typename: 'MarkdownRemarkFrontmatter',
        cta_button_href: 'Kobzol 1',
        cta_button_text: 'Kobzol 2',
        legal: 'Kobzol 3',
        privacy_policy_href: 'Kobzol 4',
        privacy_policy_text: 'Kobzol 5',
        subtitle: 'Kobzol 6',
        title: 'Kobzol 7',
      },
    } as const
    const expected = {
      cta_button_href: 'Kobzol 1',
      cta_button_text: 'Kobzol 2',
      legal: 'Kobzol 3',
      privacy_policy_href: 'Kobzol 4',
      privacy_policy_text: 'Kobzol 5',
      subtitle: 'Kobzol 6',
      title: 'Kobzol 7',
    }

    const actual = presentData(input)

    expect(actual).toStrictEqual(expected)
  })
})
