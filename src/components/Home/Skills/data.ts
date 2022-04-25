import { TSkillItem } from '@/models'

const skills: TSkillItem[] = [
  {
    text: 'Front-end',
    result: [
      ['HTML', 'CSS(SCSS, LESS)', 'jQuery', 'JavaScript', 'TypeScript'],
      ['React', 'Redux', 'Recoil', 'react-query', 'antd', 'TailwindCSS'],
      ['Vue', 'Nuxtjs', 'Vuex', 'Vuetify'],
      [
        'i18n',
        'babel',
        'webpack',
        'd3',
        'threejs',
        'chartjs',
        'Openlayers',
        'Responsive'
      ]
    ]
  },
  {
    text: 'Back-end',
    result: [['python', 'flask']]
  },
  {
    text: 'ETC',
    result: [
      [
        'git',
        'docker',
        'nexus3',
        'Socket.io',
        'jira',
        'Confluence',
        'Zeplin',
        'Figma'
      ]
    ]
  }
]

export default skills
