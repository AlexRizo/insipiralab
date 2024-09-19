import { TimeObject } from "./TimeObject";

export const TimeLine = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center xl:justify-normal xl:flex-normal gap-0 xl:gap-1 2xl:gap-8 px-2">
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
