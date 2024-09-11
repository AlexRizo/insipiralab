import { Column } from "./Column"

export const GridCol = ({ data = [] }) => {
    return (
        <div className="grid-cols-4 gap-4 hidden 2xl:grid">
            {
                data.map((col) => (
                    <Column key={ col.id } { ...col } />
                ))
            }
        </div>
    )
}
