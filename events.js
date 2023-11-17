// Initialize FullCalendar
const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
        {
            title: 'Event 1',
            start: '2023-11-20T10:00:00',
            end: '2023-11-20T12:00:00',
            description: 'A detailed description of Event 1',
            location: 'Location 1',
            ticketLink: 'https://example.com/event1tickets'
        },
        {
            title: 'Event 2',
            start: '2023-11-21T14:00:00',
            end: '2023-11-21T16:00:00',
            description: 'A detailed description of Event 2',
            location: 'Location 2',
            ticketLink: 'https://example.com/event2tickets'
        }
    ]
});
