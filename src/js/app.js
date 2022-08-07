import {View} from "./components/view";
import {TicketService} from "./services/TicketService";
import Ticket from "./components/Ticket";
import {logPlugin} from "@babel/preset-env/lib/debug";

const root = document.getElementById('root')
new View(root)
const addButton = document.querySelector('.add-button')
const addModal = document.querySelector('.modal')
const addTicketForm = document.querySelector('.add-form')
const container = document.querySelector('.container')
const {addTicket, getOneTicket, getTickets} = TicketService()
const ticketList = new Ticket()
let tickets

addButton.addEventListener('click', () => {
    addModal.classList.add('active')
})

addTicketForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const description = e.target[1].value
    const {data} = await addTicket({name, description})
    const newTickets = [...tickets, data]
    ticketList.mountTickets(newTickets)

    addTicketForm.reset()

    // addModal.classList.remove('active')
})

addTicketForm.addEventListener('reset', (e) => {
    // add ticket to BD
    addModal.classList.remove('active')
})

container.addEventListener('click', e => {
    const target = e.target

    if (target.classList.contains('ticket__item')) {
        const id = target.dataset.id
        const desc = target.nextElementSibling
        desc.classList.toggle('active')
        getOneTicket(id).then(({description}) => desc.innerHTML = description)
    }
})

const mounted = async () => {
    tickets = await getTickets()
    ticketList.mountTickets(tickets)
}

mounted()




