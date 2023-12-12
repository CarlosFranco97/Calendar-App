//Estariamos cambiando las propiedades de mi calendario
export const getMessageES = () => {
  return {
    allDay: 'Todo el Día', 
    previous: '<',
    next: '>',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'No hay eventos en este rango',
    showMore: total => `+Ver más ${{total}}` 
  }
}
