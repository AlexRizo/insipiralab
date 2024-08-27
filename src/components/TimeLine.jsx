import { TimeObject } from "./TimeObject";

export const TimeLine = ({ data }) => {
    return (
        <div className="flex gap-8">
            {
                data.map((item) => (
                    <TimeObject key={ item.id } index={ item.id } text={ item.text } isLast={ data.length === item.id }>
                        { item.icon }
                    </TimeObject>
                ))
            }
        </div>
    )
}
