import { Grupo } from "./grupo.model"

export interface Contato {
    nome: string
    email: string
    telefone: string
    grupos: Grupo[]
}
