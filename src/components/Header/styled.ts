import tw from 'tailwind-styled-components'

export const Container = tw.header`
  fixed navbar z-10
  px-4 py-2
  md:px-8 md:py-4
  bg-zinc-50 dark:bg-zinc-800
  shadow shadow-gray-200 dark:shadow-gray-700
`

export const Wrapper = tw.div`
  w-full max-w-5xl mx-auto
`

export const Anchor = tw.a`
  hidden lg:flex btn btn-ghost normal-case text-lg
  text-zinc-900 dark:text-zinc-50
  hover:bg-inherit hover:text-yellow-500
  dark:hover:bg-inherit dark:hover:text-yellow-500
`

export const Label = tw.label`
  lg:hidden drawer-button btn btn-ghost
  hover:bg-gray-300
  active:bg-yellow-500
  focus:bg-yellow-500
  dark:hover:bg-gray-600
  dark:active:bg-yellow-500
  dark:focus:bg-yellow-500
`
