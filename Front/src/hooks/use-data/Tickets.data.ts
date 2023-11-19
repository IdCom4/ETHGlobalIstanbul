import { fetchMyTickets } from "../../utils/graphDataFetcher"

const TICKETS: TTicket[] = [
  {
    id: '1',
    eventId: '1',
    description: "1 hour",
    price: 18
  }
]

export class TicketsData {
  static async getAllEventTickets(eventId: string): Promise<TTicket[]> {
    return TICKETS.filter((ticket) => ticket.eventId === eventId)
  }

  static async getMyTickets(userAddress: string): Promise<TTicket[]> {
    const ticketFromBlockchainRow = await fetchMyTickets(userAddress)
    console.log("🚀 ~ file: Tickets.data.ts:19 ~ TicketsData ~ getMyTickets ~ ticketFromBlockchainRow:", ticketFromBlockchainRow)

    return TICKETS
  }

  static async getTicketById(id: string): Promise<TTicket | null> {
    return TICKETS.find((ticket) => ticket.id === id) || null
  }

  static async getEventTicketCategories(eventId: string): Promise<TTicketCategory[]> {
    return [{ label: TICKETS[0].description, supply: 1, transferFees: 10 }]
  }

  static async getEventTicketCategory(categoryId: string): Promise<TTicketCategory> {
    return { label: TICKETS[0].description, supply: 1, transferFees: 10 }
  }
}