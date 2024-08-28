export const OpenLinkIcon = (props) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={ props?.width || 27.301 }
        height={ props?.height || 27.301 }
        viewBox="0 0 27.301 27.301"
        className={ props?.className || '' }
      >
        <path
          d="M7.425 71.575l19.544-19.544-17.939-.017v-4.528h25.7v25.7H30.2l-.016-17.939-19.547 19.54z"
          transform="translate(-7.425 -47.486)"
          fill={ props.color || "#fff" }
        />
      </svg>
    )
}
