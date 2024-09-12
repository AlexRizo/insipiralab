import React from 'react'

export const SliderArrowIcon = (props) => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 50 50"
          className={`hidden xl:block ${props?.className && props.className}`}
        >
          <g data-name="Grupo 188" fill="none">
            <g data-name="Pol\xEDgono 1">
              <path
                d="M14.937 0l14.937 25.441H0z"
                transform="translate(-1814.65 -4647.65) rotate(-30 9614.334 -1061.023)"
              />
              <path
                d="M14.937 3.95L3.493 23.44H26.38L14.937 3.95m0-3.95l14.937 25.44H0L14.937 0z"
                fill="#d80197"
                transform="translate(-1814.65 -4647.65) rotate(-30 9614.334 -1061.023)"
              />
            </g>
            <g
              data-name="Elipse 32"
              transform="translate(-1814.65 -4647.65) translate(1814.65 4647.65)"
              stroke="#d80197"
              strokeWidth={2}
            >
              <circle cx={25} cy={25} r={25} stroke="none" />
              <circle cx={25} cy={25} r={24} />
            </g>
          </g>
        </svg>
        <svg
          data-name="Grupo 188"
          xmlns="http://www.w3.org/2000/svg"
          width={20.873}
          height={20.873}
          viewBox="0 0 20.873 20.873"
          className={`xl:hidden ${props?.className && props.className}`}
        >
          <g data-name="Pol\xEDgono 1" fill="none">
            <path d="M6.235 0l6.235 10.62H0z" transform="rotate(-30 14.35 .557)" />
            <path
              d="M6.235 3.95L3.493 8.62h5.485L6.235 3.95m0-3.95l6.236 10.62H0L6.235 0z"
              fill="#d80197"
              transform="rotate(-30 14.35 .557)"
            />
          </g>
          <g data-name="Elipse 32" fill="none" stroke="#d80197" strokeWidth={2}>
            <circle cx={10.436} cy={10.436} r={10.436} stroke="none" />
            <circle cx={10.436} cy={10.436} r={9.436} />
          </g>
        </svg>
      </>
    )
}
