import { Address } from "./Address"
import { Pet } from "./Pet"

export type Proprietor = {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
}

export type ProprietorDetail = {
  address: Address,
  pets: [ Pet ],
  createdAt: string
} & Proprietor

export type Proprietors = Proprietor[]