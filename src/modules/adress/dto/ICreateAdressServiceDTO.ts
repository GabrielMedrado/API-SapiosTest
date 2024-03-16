export interface ICreateAdressServieDTO {
  logradouro: string;
  numero: number;
  complemento?: string;
  cidade: string;
  estado: string;
  cep: string;
}
export interface IUpdateAddressServieDTO {
  id: string;
  logradouro: string;
  numero: number;
  complemento?: string;
  cidade: string;
  estado: string;
  cep: string;
}
