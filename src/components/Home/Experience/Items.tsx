import { memo } from 'react'
import * as S from '@/components/Home/styled'
import { TExperienceDesc } from '@/models'

type TItemsProps = {
  item: TExperienceDesc
}
function Items({ item }: TItemsProps) {
  return (
    <S.Ul>
      <li>
        <>
          <p>{item.title}</p>
          <S.Ul className="list-circle">
            {item.description.map((desc) => (
              <li>
                <S.Description>{desc}</S.Description>
              </li>
            ))}
            <li>
              {item.tech.map((skill) => (
                <S.Tag>{skill}</S.Tag>
              ))}
            </li>
          </S.Ul>
        </>
      </li>
    </S.Ul>
  )
}

export default memo(Items)
