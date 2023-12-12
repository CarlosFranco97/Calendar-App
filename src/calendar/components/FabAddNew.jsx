import { useCalendarStore, useUiStore } from "../../hooks"
import { addHours } from "date-fns";
export const FabAddNew = () => {
    const {openDateModal} = useUiStore();
    const {setActiveEvent} = useCalendarStore();
    //para abrir el modal
    const handleClickNew = () => {
        setActiveEvent({
        title: 'Hola',
        notes: 'Mundo',
        start: new Date(), //Momento en el que quiero que empiece el evento
        end: addHours(new Date(), 2), //Se le suma al evento 2 horas. 
        bgColor: '#fafafa',
        user: {
        _id: '123',
        name: 'Carlos'
        }
        })
        openDateModal()
    }
    return (
    <button
        className="btn btn-primary fab"
        onClick={handleClickNew}
    >
        <i className="fa fa-plus"></i>
    </button>
  )
}
