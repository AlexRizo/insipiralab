import { ClientIcon, DesarrolloIcon, IdeaIcon, LegalIcon, ManufacturaIcon, SeleccionIcon } from "../icons"
import { TimeObject } from "./TimeObject";

const timeData = [
    { 
        id: 1,
        text: 'CLIENTE',
        icon: <ClientIcon />,
    },
    {
        id: 2,
        text: 'Idea',
        icon: <IdeaIcon />,
    },
    {
        id: 3,
        text: 'Legal',
        icon: <LegalIcon />,
    },
    {
        id: 4,
        text: 'Desarrollo personalizado',
        icon: <DesarrolloIcon />,
    },
    {
        id: 5,
        text: 'Selección de empaque',
        icon: <SeleccionIcon />,
    },
    {
        id: 6,
        text: 'Manufactura',
        icon: <ManufacturaIcon />,
    },
];

console.log(timeData.length );

export const TimeLine = () => {
    return (
        <div className="flex gap-8">
            {
                timeData.map((item) => (
                    <TimeObject key={ item.id } index={ item.id } text={ item.text } isLast={ timeData.length === item.id }>
                        { item.icon }
                    </TimeObject>
                ))
            }
        </div>
    )
}
