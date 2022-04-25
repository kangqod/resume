import tw from 'tailwind-styled-components'

export const Button = tw.button`
  p-4 text-zinc-900 dark:text-zinc-50 font-medium text-xs leading-tight uppercase rounded-full shadow-md
  transition duration-150 ease-in-out hidden bottom-16 right-8 fixed
 hover:bg-gray-300 hover:shadow-lg
 active:bg-yellow-500 active:shadow-lg 
 focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0
 dark:bg-gray-700
 dark:hover:bg-gray-600 dark:hover:shadow-lg
 dark:active:bg-yellow-500 dark:active:shadow-lg 
 dark:focus:bg-yellow-500 dark:focus:shadow-lg dark:focus:outline-none dark:focus:ring-0
`
