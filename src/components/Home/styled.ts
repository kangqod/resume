import tw from 'tailwind-styled-components'

export const HomeContainer = tw.main`
max-w-5xl my-0 mx-auto pt-16 md:pt-20
bg-zinc-50 dark:bg-zinc-800
`

export const Wrapper = tw.article`
px-4 py-8 md:px-8 md:py-16
`

export const Title = tw.h1`
font-bold text-3xl text-zinc-900 dark:text-zinc-50 relative inline-block mt-4 pt-2 mb-8
before:absolute before:bg-yellow-500 before:top-0
before:w-full before:h-2
`

export const Tag = tw.span`
text-xs font-semibold inline-block py-1 px-2 rounded-full 
text-black dark:text-white bg-gray-200 dark:bg-gray-600 
last-mr-0 mr-2
`

export const MenuWrapper = tw.div`
flex mt-5 md:mt-10 flex-col md:flex-row
`
export const LeftMenu = tw.div`
flex flex-col flex-1 pl-4 md:pl-8 text-zinc-900 dark:text-zinc-50 max-w-full md:max-w-300 lg:max-w-sm

`
export const RightMenu = tw.div`
flex flex-col flex-1 pl-4 md:pl-0 mt-2 md:mt-0 gap-y-2
`

export const Period = tw.p`
font-medium text-lg lg:text-xl text-zinc-900 dark:text-zinc-50
`
export const Name = tw.p`
font-medium text-xl lg:text-2xl text-zinc-900 dark:text-zinc-50
md:sticky md:top-20
`
export const SubTitle = tw.p`
text-base lg:text-lg italic text-gray-500 dark:text-gray-400 mb-4
`
export const Description = tw.p`
text-sm lg:text-base text-gray-500 dark:text-gray-400
`
export const Ul = tw.ul`
list-disc mt-2 pl-8 md:pl-4 text-zinc-900 dark:text-zinc-50
`
export const Divider = tw.div`
divider
`
export const SubDivider = tw.div`
divider before:bg-yellow-500 after:bg-yellow-500
`
