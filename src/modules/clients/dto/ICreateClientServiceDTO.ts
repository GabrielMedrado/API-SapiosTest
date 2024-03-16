export interface ICreateClientServiceDTO {
  cnpj: string;
  razao_social: string;
  nome_do_contato: string;
  telefone: number;
}

export interface IDeleteClientDTO {
  id: string;
}

export interface IUpdateClientDTO {
  id: string;
  cnpj: string;
  razao_social: string;
  nome_do_contato: string;
  telefone: number;
}
