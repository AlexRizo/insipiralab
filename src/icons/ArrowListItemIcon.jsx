export const ArrowListItemIcon = ({ active = false }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={9.101}
        height={9.101}
        viewBox="0 0 9.101 9.101"
        className={`${ !active && 'transform rotate-45' }`}
      >
        <path
          fill={active ? "#000" : "#E71567"}
          d="M7.425 55.516L13.94 49H7.96v-1.51h8.566v8.566h-1.51l-.005-5.98L8.5 56.587z"
          transform="translate(-7.425 -47.486)"
        />
      </svg>
    )
}
