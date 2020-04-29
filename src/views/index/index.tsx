import React, { FC } from 'react'

import { Layout } from '~/components/Layout'
import { Hero } from '~/views/hero'

import { useData } from './presenter'
import * as S from './styled'

export const IndexPage: FC = () => {
  const {
    fragments,
    page: { description, title },
  } = useData()

  return (
    <Layout title={title}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Hero data={fragments.heroView} />
    </Layout>
  )
}
