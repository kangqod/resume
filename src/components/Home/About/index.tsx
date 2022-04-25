import { useMemo } from 'react'
import BgHome from '@/assets/images/jpg/home.jpg'
import { ReactComponent as IconMail } from '@/assets/images/svg/mail.svg'
import { ReactComponent as IconGithub } from '@/assets/images/svg/github.svg'
import { Wrapper, Title } from '@/components/Home/styled'
import { KEY_COMPONENT_ABOUT, Menus } from '@/config'
import { TMenus } from '@/models'
import * as S from './styled'

function About() {
  const title = useMemo(() => {
    const item = Menus.find((menu: TMenus) => menu.key === KEY_COMPONENT_ABOUT)
    return item && item.text
  }, [Menus])

  return (
    <Wrapper id={KEY_COMPONENT_ABOUT}>
      <Title>{title}</Title>
      <S.Contents>
        <S.Top>
          <S.Image src={BgHome} alt="home" />
          <S.Description>
            안녕하세요,&nbsp;&nbsp;웹 개발자&nbsp;
            <S.TextHighlight>강병용</S.TextHighlight>&nbsp;입니다.
            <br /> 웹 기술이 빠르게 발전하는 요즘 시대에
            <br />
            <S.TextHighlight>좋은 방법</S.TextHighlight>으로 개발하기 위해
            노력하고
            <br /> 사람들과의 <S.TextHighlight>협업</S.TextHighlight>을 중요시
            생각하고
            <br /> 더 좋은 코드를 위해 <S.TextHighlight>소통</S.TextHighlight>
            하는 것을 좋아합니다.
            <div className="flex items-center gap-x-3 text-zinc-900 dark:text-zinc-50">
              <IconMail />
              <a href="mailto:kangqod@naver.com">kangqod@naver.com</a>
            </div>
            <div className="flex items-center gap-x-3 text-zinc-900 dark:text-zinc-50">
              <IconGithub />
              <a href="https://github.com/kangqod" target="_blank">
                https://github.com/kangqod
              </a>
            </div>
          </S.Description>
        </S.Top>
        <S.Bottom>
          <S.Ul>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                Javascript, Typescript 를 사용합니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                ES6+ 개발을 지향하며 Babel, polyfill 적용이 가능합니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                HTML5, CSS3를 사용하여 퍼블리싱이 가능합니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                어떤 방식의 UI 테스트가 쉽게 깨지지 않고 효율적일지 고민합니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                Scss, Less 등 전처리기를 사용합니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                Vuejs, Nuxtjs 프레임워크를 이용한 프로젝트 경험이 있습니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                Vuetify, antd 프레임워크를 이용한 프로젝트 경험이 있습니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                Router, Vuex, i18n 등 기타 라이브러리 적용하여 개발한 경험이
                있습니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                프로젝트에 Webpack4를 적용하여 개발 및 배포가 가능합니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                Web API를 능숙하게 사용할 수 있고 기능 추가 및 재배포 경험이
                있습니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                D3, Threejs 를 사용하여 차트, 모델링 등 데이터를 시각화 하는데
                능숙합니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                크로스 브라우징과 반응형 웹에 대한 개발 경험이 있습니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                React 를 이용하여 프로젝트 개발중이며 vitejs(esbuild) 를
                사용하여 프로젝트 구성 경험이 있습니다.
              </S.Text>
            </li>
            <li>
              <S.Text style={{ wordBreak: 'keep-all' }}>
                프로젝트 중 redux, recoil로 상태관리 경험이 있으며 react-query
                로 데이터 관리가 가능합니다.
              </S.Text>
            </li>
          </S.Ul>
        </S.Bottom>
      </S.Contents>
    </Wrapper>
  )
}

export default About
