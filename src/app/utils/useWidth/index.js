import React from "react"

function useWidth () {
  const [ currentWidth, setCurrentWidth ] = React.useState(window.screen.width)
  window.onresize = () => setCurrentWidth(window.innerWidth)
  window.onload = () => setCurrentWidth(window.innerWidth)

  return currentWidth
}

export default useWidth