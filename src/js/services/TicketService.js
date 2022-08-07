import axios from "axios";

export const TicketService = () => {
    const baseUrl = 'https://ajh-http.herokuapp.com/ticket'

    const getTickets = async () => {
        try {
            const {data} = await axios.get(baseUrl)
            return data
        } catch (e) {
            console.log(e)
        }

    }

    const addTicket = async (body) => {
        try{
            return await axios.post(baseUrl, body)
        }catch (e) {
            console.log(e)
        }
    }

    const getOneTicket = async (id) => {
        try{
            const {data} = await axios.get(baseUrl+`/${id}`)
            return data
        }catch (e) {
            console.log(e)
        }
    }

    return {getTickets, getOneTicket, addTicket}
}