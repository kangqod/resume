import { useMemo } from 'react'
import dayjs from 'dayjs'
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
