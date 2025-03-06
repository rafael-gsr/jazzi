import React from "react"

function useWidth () {
  const [ currentWidth, setCurrentWidth ] = React.useState(360)

  const handleCurrentWidth = (event) => {
    setCurrentWidth(event.currentTarget.innerWidth)
  }

  React.useEffect(() => {
    window.onresize = handleCurrentWidth
    window.onload = handleCurrentWidth
    setCurrentWidth(window.innerWidth)
  }, [])

  return currentWidth
}

export default useWidth