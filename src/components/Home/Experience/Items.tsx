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
            {item.description.map((desc: string, idx: number) => (
              <li key={`li_${idx}`}>
                <S.Description style={{ wordBreak: 'keep-all' }}>
                  {desc}
                </S.Description>
              </li>
            ))}
            <li>
              {item.tech.map((skill: string, idx2: number) => (
                <S.Tag key={`tag_${idx2}`}>{skill}</S.Tag>
              ))}
            </li>
          </S.Ul>
        </>
      </li>
    </S.Ul>
  )
}

export default memo(Items)
