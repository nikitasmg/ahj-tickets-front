export default class Ticket {
    constructor() {
        this.root = document.querySelector('.container')
        this.addTickets()
    }

    renderTickets(tickets) {
        if (!tickets.length) {
            return 'Пока еще нет записей'
        }
        let result = ''
        tickets.forEach(ticket => {
            result += `<div class="ticket">
                          <div class="ticket__item" data-id="${ticket.id}">
                              <div class="ticket__info">
                                  <input type="checkbox" checked="${ticket.status}">
                                  <h2>${ticket.name}</h2>
                              </div>
                              <div class="ticket__info">
                                  <span>${new Date(ticket.created).toLocaleDateString()} ${new Date(ticket.created).toLocaleTimeString()}</span>
                                  <button class="button">Edit</button>
                                  <button class="button">Delete</button>
                              </div>
                             
                          </div>
                          <div class="ticket__description">
                                <p>
                                ${ticket.description ? ticket.description : '' }
                                </p>
                          </div>
                      </div>
                    `
        })
        return result
    }

    mountTickets(tickets) {
        const ticketList = document.querySelector('.tickets')
        ticketList.innerHTML = this.renderTickets(tickets)
        // ticketList.insertAdjacentHTML('beforeend', this.renderTickets(tickets))
    }

    addTickets() {
        const ticketList = document.createElement('div')
        ticketList.classList.add('tickets')
        this.root.appendChild(ticketList)
    }

}