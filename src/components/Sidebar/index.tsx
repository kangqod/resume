import { useCallback } from 'react'
import { KEY_DRAWER, KEY_DRAWER_BODY, Menus } from '@/config'
import * as S from './styled'

type TSidebarProps = {
  children: React.ReactNode
}

function Sidebar({ children }: TSidebarProps) {
  const handleClick = useCallback(() => {
    const $target: HTMLInputElement = document.getElementById(
      KEY_DRAWER
    ) as HTMLInputElement
    $target!.checked = false
  }, [])

  return (
    <S.DrawerContainer>
      <S.Input id={KEY_DRAWER} type="checkbox" />
      <S.DrawerContent id={KEY_DRAWER_BODY}>{children}</S.DrawerContent>
      <S.DrawerSide>
        <S.DrawerOverlay htmlFor={KEY_DRAWER} />
        <S.Ul>
          {Menus.map((menu: { key: string; text: string }) => {
            return (
              <li key={menu.key}>
                <S.Anchor href={`#${menu.key}`} onClick={handleClick}>
                  {menu.text}
                </S.Anchor>
              </li>
            )
          })}
        </S.Ul>
      </S.DrawerSide>
    </S.DrawerContainer>
  )
}

export default Sidebar
