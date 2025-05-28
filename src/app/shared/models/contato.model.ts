import { Grupo } from "./grupo.model"

export interface Contato {
    id: number
    nome: string
    email: string
    telefone: string
    grupos: Grupo[]
}
