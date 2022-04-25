import { useMemo } from 'react'
import dayjs from 'dayjs'
import { ReactComponent as IconGithub } from '@/assets/images/svg/github.svg'
import * as S from './styled'

function Footer() {
  const year = useMemo(() => {
    return dayjs().year()
  }, [])
  return (
    <S.Container>
      <p className="block">
        Copyright © {year} <S.Name>Chad.K</S.Name> - All right reserved.
      </p>
    </S.Container>
  )
}

export default Footer
