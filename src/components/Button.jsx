export const Button = ({ text, className }) => {
    return (
        <button className={ `py-4 px-14 w-max border rounded-full text-2xl font-light ${ className }` }>
            { text } M
        </button>
    )
}
