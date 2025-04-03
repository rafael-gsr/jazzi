import { MouseEventHandler } from "react"

type ArrowProps = {
  disabled: boolean,
  onClick: MouseEventHandler,
  left?: boolean,
}

function Arrow (props: ArrowProps) {
  const disabled = props.disabled && 'arrow--disabled'

  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left
        ? (<path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />)
        : (<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />)
      }
    </svg>
  )
}

export default Arrow