import { get, post } from './fetch'

export const getContacts = () => get('contacts')
export const getOrders = (id) => get(`contacts/${id}/order`)
export const createContact = (name, phone) => post(`contacts`, { name, phone })
