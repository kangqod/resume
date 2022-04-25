import { useMemo } from 'react'
import dayjs from 'dayjs'
import { KEY_COMPONENT_EXPERIENCE, Menus } from '@/config'
import * as S from '@/components/Home/styled'
import { TMenus, TExperienceItem, TExperienceDesc } from '@/models'
import data from './data'
import Items from './Items'

function Experience() {
  const title = useMemo(() => {
    const item = Menus.find(
      (menu: TMenus) => menu.key === KEY_COMPONENT_EXPERIENCE
    )
    return item && item.text
  }, [Menus])

  return (
    <S.Wrapper id={KEY_COMPONENT_EXPERIENCE}>
      <S.Title>{title}</S.Title>
      {data.map((menu: TExperienceItem, idx: number) => {
        const [start, end] = menu.period.split(',')
        const startDate = dayjs(start).format('YYYY-MM-DD')
        const endDate = end ? dayjs(end).format('YYYY-MM-DD') : ''
        return (
          <>
            <S.MenuWrapper key={menu.companyName}>
              <S.LeftMenu>
                <S.Name>{menu.companyName}</S.Name>
              </S.LeftMenu>
              <S.RightMenu>
                <S.Period>
                  {startDate} ~ {endDate}
                </S.Period>
                <S.SubTitle>{menu.position}</S.SubTitle>
                {menu.children.map((item: TExperienceDesc, idx: number) => {
                  return <Items key={`items_${idx}`} item={item} />
                })}
              </S.RightMenu>
            </S.MenuWrapper>
            {data.length - 1 !== idx && <S.SubDivider />}
          </>
        )
      })}
    </S.Wrapper>
  )
}

export default Experience
