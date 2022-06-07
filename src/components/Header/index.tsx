import { ReactComponent as IconLogo } from '@/assets/images/svg/logo.svg'
import { ReactComponent as IconMenu } from '@/assets/images/svg/menu.svg'
import DarkMode from '@/components/DarkMode'
import { KEY_DRAWER, Menus } from '@/config'
import { TMenus } from '@/models'
import * as S from './styled'

function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <div className="flex-1">
          <IconLogo className="w-40 h-12 text-black dark:text-white" />
        </div>
        <div className="flex flex-none mr-5">
          {Menus.map((menu: TMenus) => {
            return (
              <S.Anchor key={menu.key} href={`#${menu.key}`}>
                {menu.text}
              </S.Anchor>
            )
          })}
        </div>
        <div className="flex flex-none">
          <DarkMode />
          <S.Label htmlFor={KEY_DRAWER}>
            <IconMenu className="inline-block w-5 h-5 stroke-current text-zinc-900 dark:text-zinc-50" />
          </S.Label>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
