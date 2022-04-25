import { useCallback, useMemo } from 'react'
import { KEY_COMPONENT_SKILLS, Menus } from '@/config'
import * as S from '@/components/Home/styled'
import { TMenus, TSkillItem } from '@/models'
import data from './data'

function Skill() {
  const title = useMemo(() => {
    const item = Menus.find((menu: TMenus) => menu.key === KEY_COMPONENT_SKILLS)
    return item && item.text
  }, [Menus])

  const bgColor = useCallback((index: number) => {
    return
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
                  <div className="block" key={idx.toString()}>
                    {item.map((subItem: string, idx2: number) => (
                      <S.Tag key={idx2.toString()} className={bgColor(idx)}>
                        {subItem}
                      </S.Tag>
                    ))}
                    <br />
                  </div>
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
