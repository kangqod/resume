import { TExperienceItem, TExperienceDesc } from '@/models'

const vuno: TExperienceDesc[] = [
  {
    title: '사내 솔루션 모노레포 기반으로 구축 (2022.06 ~ ing)',
    description: [
      'vite 기반의 모노레포 개발 환경 구축',
      'pnpm workspace & changesets 조합',
      'common ui를 vite 로 빌드',
      'merge 시 git actions에서 사내 저장소에 모듈 버저닝 및 자동 배포'
    ],
    tech: [
      'vite',
      'pnpm workspace',
      'changesets',
      'react',
      'antd',
      'git actions (self hosted)'
    ]
  },
  {
    title: '사내 솔루션 본에이지 v2 개발 (2021.09 ~ 2022.06)',
    description: [
      'vite 기반의 react 개발 환경 구축',
      'react-query를 사용하여 데이터 관리',
      'i18n을 통한 다국어 지원',
      'Dark theme 지원',
      'WebSocket을 통한 실시간 양방향 통신',
      '데이터를 통한 리포트 페이지 추가'
    ],
    tech: [
      'react',
      'vite',
      'TypeScript',
      'react-query',
      'recoil',
      'socket-io',
      'styled-components',
      'antd',
      'framer-motion',
      'react-intl',
      'dayjs',
      'apexchart'
    ]
  },
  {
    title: '사내 솔루션 본에이지 & 암웨이 개발 (2021.01 ~ 2021.03)',
    description: [
      'cra 기반의 react 개발 환경 구축',
      '유저 관리에 필요한 Admin 페이지 개발',
      'Atomic Design Pattern 적용',
      '데이터를 통한 리포트 페이지 추가'
    ],
    tech: ['react', 'react-redux', 'antd', 'styled-components']
  },
  {
    title: '사내 크레딧 시스템 개발 (2020.11 ~ 2021.09)',
    description: [
      'cra 기반의 react 개발 환경 구축',
      '유저 관리에 필요한 admin 페이지 개발',
      'i18n을 통한 다국어 지원'
    ],
    tech: ['react', 'react-redux', 'antd', 'styled-components']
  },
  {
    title: '사내 솔루션 본에이지 유지보수 (2020.08 ~ ing)',
    description: ['다국어 기능 개발', '리포트 기능 개발', '기타 버그 수정'],
    tech: ['html', 'css', 'jQuery', 'gulp']
  }
]

const upy: TExperienceDesc[] = [
  {
    title: 'ELand ERP 솔루션 개발 (2020.04 ~ 2020.07)',
    description: [
      '매장 관리 시스템으로 매장을 도면으로 표출, 편집 및 관리 기능 개발',
      'library를 UMD 로 배포하여 외부에서 사용 가능하도록 개발'
    ],
    tech: ['typeScript', 'webpack', 'babel (polyfill)', 'scss']
  },
  {
    title: '사내 GIS 제품 개발 (2019.12 ~ 2020.07)',
    description: [
      '사내 GIS 엔진으로 지도 표시 및 데이터 시각화에 중점을 둔 프로젝트',
      'Nexus3 구축 및 사내 엔진 관리'
    ],
    tech: [
      'vue',
      'vuex',
      'vuetify',
      'i18n',
      'scss',
      'socket-io',
      'nexus3',
      'openlayers'
    ]
  },
  {
    title: '사내 반응형 홈페이지 제작 (2019.10 ~ 2019.11)',
    description: ['사내 홈페이지 리뉴얼하였으며 정적 페이지로 제공'],
    tech: ['vue', 'nuxtjs', 'i18n']
  },
  {
    title: 'XCurenet 보안시스템 개발 (2019.01 ~ 2019.03)',
    description: [
      '보안 기능을 웹으로 시각화 및 관리 기능 개발',
      '업무에 맞춘 보안 설정 및 조작 기능 개발'
    ],
    tech: ['jQuery', 'd3', 'WebSocket', 'html', 'css']
  },
  {
    title: '한전 ADMS-NMS 솔루션 개발 (2018.11 ~ 2019.01)',
    description: [
      '지도상에 설비 표출 및 데이터 시각화',
      '각종 데이터를 수집하여 현황판(대시보드) 기능 개발'
    ],
    tech: ['jQuery', 'd3', 'WebSocket', 'html', 'css', 'openlayers']
  }
]

const hemanntech: TExperienceDesc[] = [
  {
    title: '사내 GIS 제품 3.0 엔진 개발 (2015.09 ~ 2018.11)',
    description: [
      '데이터화 된 설비를 지도상에 표출하는 기능',
      '각종 설비들을 차트형태로 시각화'
    ],
    tech: ['jQuery', 'd3', 'WebSocket', 'html', 'css', 'openlayers']
  },
  {
    title: '한전 해상풍력 GIS기반 종합상황감시 시스템 (2017.01 ~ 2018.11)',
    description: [
      '데이터화 된 설비를 지도상에 표출하는 기능',
      '각종 설비들을 차트형태로 시각화',
      '모델링된 터빈 데이터를 Threejs Library 사용하여 화면에 표출',
      'CCTV 화면 정보 연계'
    ],
    tech: ['jQuery', 'd3', 'threejs', 'WebSocket', 'html', 'css', 'openlayers']
  },
  {
    title: '한전 해상풍력 고장구간 판독 시스템 (2018.04 ~ 2018.05)',
    description: [
      '데이터화 된 설비를 지도상에 표출하는 기능 및 애니메이션 추가'
    ],
    tech: ['jQuery', 'd3', 'html', 'css', 'openlayers']
  },
  {
    title: '사내 3D Map 엔진 개발 참여 (2016.05 ~ 2016.10)',
    description: ['Cesium Library 분석 및 엔진 개발'],
    tech: ['jQuery', 'Cesiumjs']
  },
  {
    title: '해외 GIS 엔진 프로토타입 개발 (2016.03 ~ 2016.09)',
    description: [
      '데이터화 된 설비를 지도상에 표출하는 기능',
      '각종 설비들을 차트형태로 시각화'
    ],
    tech: ['jQuery', 'd3', 'html', 'css', 'openlayers']
  },
  {
    title: '부영산전 스마트 열배관 시스템 고도화 (2015.12 ~ 2016.03)',
    description: ['각종 설비들을 차트형태로 시각화'],
    tech: ['jQuery', 'd3', 'html', 'css', 'openlayers']
  },
  {
    title: '티브로드(TSIS) 도면관리 시스템 (2015.04 ~ 2015.08)',
    description: [
      '데이터화 된 설비를 지도상에 표출하는 기능',
      '각종 설비들을 차트형태로 시각화'
    ],
    tech: ['jQuery', 'd3', 'html', 'css', 'openlayers']
  },
  {
    title: '사내 GIS 제품 2.0 고도화 (2014.03 ~ 2015.03)',
    description: ['사내 엔진 모듈 업데이트 및 유지보수'],
    tech: ['jQuery', 'd3', 'html', 'css', 'openlayers']
  },
  {
    title: '스마트 열배관 시스템(부영산전) (2013.11 ~ 2014.02)',
    description: ['데이터화 된 설비를 지도상에 표출하는 기능'],
    tech: ['jQuery', 'html', 'css', 'openlayers']
  },
  {
    title: 'LG U+ WEB-GIS 고도화 (2013.07 ~ 2013.10)',
    description: ['Web-GIS 다량의 설비 표출 기능 개선'],
    tech: ['Flex', 'ActionScript']
  },
  {
    title: '사내 GIS 제품 2.0 엔진 개발 (2012.07 ~ 2013.06)',
    description: [
      '데이터화 된 설비를 지도상에 표출하는 기능',
      '각종 설비들을 차트형태로 시각화'
    ],
    tech: ['jQuery', 'd3', 'html', 'css', 'openlayers']
  },
  {
    title: 'K-EMS 시각화 (한전 KDN) (2012.03 ~ 2012.06)',
    description: [
      '데이터화 된 설비를 지도상에 표출하는 기능',
      '각종 설비들을 차트형태로 시각화'
    ],
    tech: ['jQuery', 'html', 'css', 'openlayers']
  },
  {
    title:
      'N/W 선로 효율화 접속함체 결선도 기능 개선 (LG U+) (2011.12 ~ 2012.03)',
    description: ['결손도 관련 기능 개선 및 유지보수'],
    tech: ['Flex', 'ActionScript']
  },
  {
    title: 'Web-GIS 소스 현행화 및 유지보수 (LG U+) (2011.08 ~ 2011.11)',
    description: ['기존 GIS 소스 버그수정 및 유지보수'],
    tech: ['Flex', 'ActionScript']
  }
]

const experiences: TExperienceItem[] = [
  {
    period: '2020-08-31,',
    companyName: '뷰노',
    position: '프론트엔드 개발자',
    children: vuno
  },
  {
    period: '2018-11-26,2020-07-27',
    companyName: '유피와이',
    position: '프론트엔드 개발자',
    children: upy
  },
  {
    period: '2011-08-08,2018-11-25',
    companyName: '혜만테크',
    position: '프론트엔드 개발자',
    children: hemanntech
  }
]

export default experiences
