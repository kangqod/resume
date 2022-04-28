import tw from 'tailwind-styled-components'

export const Contents = tw.div`
flex flex-col justify-center md:items-center flex-wrap gap-y-5 md:flex-nowrap w-full
pt-8 px-8
`

export const Image = tw.img`
hidden md:block w-auto h-4/5 md:h-64 lg:h-96
`
export const Description = tw.h2`
font-bold text-lg sm:text-xl md:text-xl leading-10 sm:leading-10 md:leading-9 lg:leading-15 text-zinc-900 dark:text-zinc-50
px-4 md:px-2
`
export const TextHighlight = tw.span`
text-yellow-600
`
export const Top = tw.div`
flex gap-x-12 lg:gap-x-20
`
export const Bottom = tw.div`
py-4 px-8 md:p-3
`
export const Ul = tw.ul`
list-disc text-zinc-900 dark:text-zinc-50
`
export const Li = tw.li`
mt-1 md:mt-2
`
export const Text = tw.p`
text-zinc-900 dark:text-zinc-50
`
export const AddressWrapper = tw.div`
flex items-center gap-x-3 text-zinc-900 dark:text-zinc-50
`
export const Anchor = tw.a`
hover:text-yellow-600
`