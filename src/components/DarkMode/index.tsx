import { ReactSVG, useCallback, useContext } from 'react'
import { ReactComponent as IconSun } from '@/assets/images/svg/sun.svg'
import { ReactComponent as IconMoon } from '@/assets/images/svg/moon.svg'
import { KEY_THEME_DARK, KEY_THEME_LIGHT } from '@/config'
import { ThemeContext } from '@/context/theme'
import * as S from './styled'

const KEY_SWAP_ON = 'swap-on'
const KEY_SWAP_OFF = 'swap-off'

function DarkMode() {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleClassName = useCallback((isSun: boolean) => {
    if (isSun) {
      return theme === KEY_THEME_DARK ? KEY_SWAP_OFF : KEY_SWAP_ON
    } else {
      return theme === KEY_THEME_DARK ? KEY_SWAP_ON : KEY_SWAP_OFF
    }
  }, [])

  function handleClick(_evt: React.MouseEvent<HTMLInputElement>) {
    const value = theme === KEY_THEME_DARK ? KEY_THEME_LIGHT : KEY_THEME_DARK
    setTheme!(value)
  }

  return (
    <S.Label>
      <input type="checkbox" onClick={handleClick} />
      <IconSun
        className={`${toggleClassName(
          true
        )} fill-current w-5 h-5 dark:text-zinc-50`}
      />
      <IconMoon
        className={`${toggleClassName(
          false
        )} fill-current w-5 h-5 text-zinc-900`}
      />
    </S.Label>
  )
}

export default DarkMode
