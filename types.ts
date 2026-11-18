export type tipoM = "Mensal" |"avulso";

export type Maquina = {
  id: string;
  cliente: string;
  modelo: string;
  serial?: string;
  tipo: tipoM;
};