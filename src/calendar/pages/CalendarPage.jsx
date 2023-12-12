import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, CalendarModal, Navbar } from "../"
import { getMessageES, localizer } from '../../helpers';
import { useEffect, useState } from 'react';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';
import { FabAddNew } from '../components/FabAddNew';
import {FabDelete} from '../components/FabDelete'
export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const {user} = useAuthStore()
  //Metodo y propiedades enviados desde el custom hook, para el manejo de envio de evento y activar la nota
  const {events, setActiveEvent, startLoadingEvents} = useCalendarStore();

  //para obtener la ultima vista en mi localStorage
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventeStyleGetter = (event, start, end, isSelected) => {
    //este evento se disparara cuando suceda algo en el calendario, depende de lo que se reciba aca, cambiaran los estilos y entradas
    // console.log({event, start, end, isSelected})
    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid)
    const style = {
      backgroundColor: isMyEvent ? '#347CF7': '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  }; 

  const onDoubleClick = (event) => {
    // console.log({doubleClick:event})
    openDateModal();
  };

  const onSelect = (event) => {
    // console.log({click: event})
    setActiveEvent(event)
  }; 

  const onViewChanged = (event) => {
    // console.log({viewChanged: event})
    //para establecer el ultimo event (lastview) en mi localStorage
    localStorage.setItem('lastView', event);
    setLastView(event)
  };

  useEffect(() => {
    startLoadingEvents()
  },[])

  return (
    <>
      <Navbar />
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)'}}
      culture='es'
      messages={getMessageES()}
      eventPropGetter={eventeStyleGetter}
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
      defaultView={lastView}
    />
    <CalendarModal />
    <FabAddNew />
    <FabDelete />
    </>
  )
}
