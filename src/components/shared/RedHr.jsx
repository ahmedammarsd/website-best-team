import React from 'react'

function RedHr({isTransparent}) {
  return (
         <span className={`tw-h-[2px] ${isTransparent ? "tw-bg-transparent": "tw-bg-red-500"} tw-w-[40px]`}></span>
    
  )
}

export default RedHr