'use client'
import React from "react"

function useWidth () {
  const [ currentWidth, setCurrentWidth ] = React.useState(360)

  function handleCurrentWidth(event){
    setCurrentWidth(event.currentTarget.innerWidth)
  }

  window.onresize = handleCurrentWidth
  window.onload = handleCurrentWidth

  return currentWidth
}

export default useWidth