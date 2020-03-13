import React from 'react'

const CartIconNumber = ({ number, radius, className }) => {
  return (
    <svg
      className={className}
      height={radius * 2}
      width={radius * 2}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={radius} cy={radius} r={radius} fill="red" />
      <text
        y={Math.floor(radius * 2 - radius * 0.3)}
        x={radius}
        fontFamily="sans-serif"
        fontSize={radius * 2}
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        {number}
      </text>
    </svg>
  )
}

export default CartIconNumber
