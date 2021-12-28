const inputResetStyles = [
  'outline-none',
  'active:outline-none',
  'focus:outline-none',
  'ring-0',
  'active:ring-0',
  'focus:ring-0',
]

const lightMode = ['bg-white', 'text-gray-800', 'border-gray-300', 'active:border-gray-500', 'focus:border-gray-400']

const darkMode = [
  'dark:bg-gray-800',
  'dark:text-gray-200',
  'dark:border-gray-600',
  'dark:active:border-gray-400',
  'dark:focus:border-gray-500',
]

export const textInput = [...inputResetStyles, ...lightMode, ...darkMode, 'w-full', 'rounded-md', 'border-2']
