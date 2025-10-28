import type { PropsWithChildren } from 'react'

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br'>
      {children}
    </div>
  )
}

export default Layout
