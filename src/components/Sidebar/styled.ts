import tw from 'tailwind-styled-components'

export const DrawerContainer = tw.div`
  drawer drawer-end
`
export const Input = tw.input`
  drawer-toggle 
`
export const DrawerContent = tw.div`
  drawer-content scroll-smooth
`
export const DrawerSide = tw.div`
  drawer-side
`
export const DrawerOverlay = tw.label`
  drawer-overlay
`
export const Ul = tw.ul`
  menu p-4 overflow-y-auto w-80 bg-zinc-100 dark:bg-zinc-700 text-base-content
`
export const Anchor = tw.a`
  btn btn-ghost normal-case text-lg leading-none
  text-zinc-900 dark:text-zinc-50
  hover:bg-inherit hover:text-yellow-500
  dark:hover:bg-inherit dark:hover:text-yellow-500
`
