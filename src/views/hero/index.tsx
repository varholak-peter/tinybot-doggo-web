import React, { FC } from 'react'
import { HeroView } from '@GTypes/HeroView'

import { Layout } from '~/components/Layout'

import { presentData } from './presenter'
import * as S from './styled'

type Props = {
  data: HeroView | null
}

export const Hero: FC<Props> = ({ data }) => {
  const {
    cta_button_href,
    cta_button_text,
    legal,
    privacy_policy_href,
    privacy_policy_text,
    subtitle,
    title,
  } = presentData(data)

  return (
    <Layout title={title}>
      <S.Title>{title}</S.Title>
      <S.Description>{cta_button_href}</S.Description>
      <S.Description>{cta_button_text}</S.Description>
      <S.Description>{legal}</S.Description>
      <S.Description>{privacy_policy_href}</S.Description>
      <S.Description>{privacy_policy_text}</S.Description>
      <S.Description>{subtitle}</S.Description>
    </Layout>
  )
}
