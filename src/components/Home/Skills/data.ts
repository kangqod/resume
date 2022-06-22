import { TSkillItem } from '@/models'

const skills: TSkillItem[] = [
  {
    text: 'Front-end',
    result: [
      ['HTML', 'CSS(SCSS, LESS)', 'jQuery', 'JavaScript', 'TypeScript'],
      ['react', 'react-redux', 'recoil', 'react-query', 'antd', 'tailwindcss'],
      ['vue', 'nuxtjs', 'vuex', 'vuetify'],
      [
        'vitejs',
        'i18n',
        'babel',
        'webpack',
        'd3',
        'threejs',
        'chartjs',
        'Openlayers',
        'pnpm workspace',
        'changesets',
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
        'socket.io',
        'jira',
        'Confluence',
        'zeplin',
        'figma'
      ]
    ]
  }
]

export default skills
