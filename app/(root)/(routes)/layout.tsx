import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <div className='w-full h-[9vh] md:h-[9vh] lg:h-[9vh] xl:h-[10vh] bg-Dark02 py-4 xl:py-4 md:py-4 lg:py-4 px-6'>
            <Navbar />
        </div>
        <div  className='w-full h-[90vh] bg-Dark01 '>
        {children}
        </div>
    </div>
  )
}

export default layout
