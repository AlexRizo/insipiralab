import { Column } from "./Column"

export const GridCol = ({ data = [] }) => {
    return (
        <div className="grid-cols-4 gap-4 grid">
            {
                data.map((col) => (
                    <Column key={ col.id } { ...col } />
                ))
            }
        </div>
    )
}
