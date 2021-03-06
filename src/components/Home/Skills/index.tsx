import { useMemo } from 'react'
import Fade from 'react-reveal/Fade'
import { KEY_COMPONENT_SKILLS, Menus } from '@/config'
import * as S from '@/components/Home/styled'
import { TMenus, TSkillItem } from '@/models'
import data from './data'

function Skill() {
  const title = useMemo(() => {
    const item = Menus.find((menu: TMenus) => menu.key === KEY_COMPONENT_SKILLS)
    return item && item.text
  }, [])

  return (
    <S.Wrapper id={KEY_COMPONENT_SKILLS}>
      <S.Title>{title}</S.Title>
      {data.map((menu: TSkillItem) => {
        return (
          <S.MenuWrapper key={menu.text}>
            <S.LeftMenu>
              <S.Name>{menu.text}</S.Name>
            </S.LeftMenu>
            <S.RightMenu>
              {menu.result.map((item: string[], idx: number) => {
                return (
                  <Fade key={`fade_skills_${idx}`} right>
                    <div className="block">
                      {item.map((subItem: string, idx2: number) => (
                        <S.Tag key={`tag_${idx2}`}>{subItem}</S.Tag>
                      ))}
                      <br />
                    </div>
                  </Fade>
                )
              })}
            </S.RightMenu>
          </S.MenuWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default Skill
