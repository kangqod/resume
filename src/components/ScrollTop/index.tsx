import { useLayoutEffect } from 'react'
import { ReactComponent as IconScrollTop } from '@/assets/images/svg/scrollTop.svg'
import { KEY_DRAWER_BODY } from '@/config'
import * as S from './styled'

const KEY_BUTTON_ID = 'btn-back-to-top'

function ScrollTop() {
  function scrollFunction() {
    const btnScrollTop = document.getElementById(KEY_BUTTON_ID)
    const body = document.getElementById(KEY_DRAWER_BODY)
    if (body!.scrollTop > 20) {
      btnScrollTop!.style.display = 'block'
    } else {
      btnScrollTop!.style.display = 'none'
    }
  }

  function handleClick() {
    const body = document.getElementById(KEY_DRAWER_BODY)
    body!.scrollTop = 0
  }

  useLayoutEffect(() => {
    const body = document.getElementById(KEY_DRAWER_BODY)
    body!.addEventListener('scroll', scrollFunction, { passive: true })
    return () => {
      body!.removeEventListener('scroll', scrollFunction)
    }
  }, [])

  return (
    <S.Button
      id={KEY_BUTTON_ID}
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={handleClick}
    >
      <IconScrollTop />
    </S.Button>
  )
}

export default ScrollTop
