export const OpenLinkShortIcon = (props) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={ props?.width || 14.778 }
        height={ props?.height || 14.778 }
        viewBox="0 0 16.778 16.778"
        className={ props?.className || '' }
      >
        <path
          d="M7.425 62.29l12.011-12.011-11.024-.01v-2.783H24.2v15.791h-2.78l-.01-11.024L9.4 64.264z"
          transform="translate(-7.425 -47.486)"
          fill={ props?.color || "#fff" }
        />
      </svg>
    )
}
