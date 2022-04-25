export * from './menu'

export type TSkillItem = {
  text: string
  result: string[][]
}

export type TExperienceDesc = {
  title: string
  description: string[]
  tech: string[]
}

export type TExperienceItem = {
  period: string
  companyName: string
  position: string
  children: TExperienceDesc[]
}

export type TCertificateItem = {
  title: string
  period: string
}
