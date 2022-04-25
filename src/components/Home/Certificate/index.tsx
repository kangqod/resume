import { useMemo } from 'react'
import {
  Wrapper,
  Title,
  MenuWrapper,
  LeftMenu,
  RightMenu,
  Name,
  Period
} from '@/components/Home/styled'
import { KEY_COMPONENT_CERTIFICATE, Menus } from '@/config'
import { TCertificateItem, TMenus } from '@/models'
import data from './data'

function Certificate() {
  const title = useMemo(() => {
    const item = Menus.find(
      (menu: TMenus) => menu.key === KEY_COMPONENT_CERTIFICATE
    )
    return item && item.text
  }, [Menus])

  return (
    <Wrapper id={KEY_COMPONENT_CERTIFICATE}>
      <Title>{title}</Title>
      {data.map((menu: TCertificateItem) => {
        return (
          <MenuWrapper key={menu.title}>
            <LeftMenu>
              <Name>{menu.title}</Name>
            </LeftMenu>
            <RightMenu>
              <Period>취득일 : {menu.period}</Period>
            </RightMenu>
          </MenuWrapper>
        )
      })}
    </Wrapper>
  )
}

export default Certificate
