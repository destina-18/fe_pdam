import { ReactNode } from "react"

export interface User {
    id: number
    username: string
    password: string
    role: string
    owner_token: string
    createdAt: string
    updatedAt: string
}

export interface Admin {
    email: ReactNode
    id: number
    user_id: number
    name: string
    phone: string
    owner_token: string
    createdAt: string
    updatedAt: string
    user: User
}



export interface Customer {
  billAmount: number
  service: any
  status: ReactNode
  email: ReactNode
  user: User
  username: string
  id: number
  user_id: number
  customer_number: string
  name: string
  phone: string
  address: string
  service_id: number
  owner_token: string
  createdAt: string
  updatedAt: string
}

export interface Services {
  status: string
  description: string
  id: number
  name: string
  min_usage: number
  max_usage: number
  price: number
  owner_token: string
  createdAt: string
  updatedAt: string
}


    