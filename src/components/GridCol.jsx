import { Column } from "./Column"

export const GridCol = ({ data = [] }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                data.map((col) => (
                    <Column key={ col.id } { ...col } />
                ))
            }
        </div>
    )
}
