import { Maquina } from "./types";

export function buscarPorID(lista: Maquina[], id: string): Maquina | undefined {
    return lista.find((maquina) => maquina.id === id);
}

export function contadorCliente(lista: Maquina[]): Record<string, number> {
    return lista.reduce((contador, m) => {
         contador[m.cliente] = (contador[m.cliente] || 0) + 1;
         return contador;
    }, {} as Record<string, number>);
}

export function contarDoCliente(maquinas: Maquina[], cliente: string): number {
  return maquinas.filter((m) => m.cliente === cliente).length;
}

export function proximoID(lista: Maquina[], prefixo: string ): string {
    const ids = lista
        .filter((maquina) => maquina.id.startsWith(prefixo))
        .map((maquina) => maquina.id);
    const maxId = Math.max(...ids.map((id) => parseInt(id.split("-")[1])));
    return `${prefixo}-${String(maxId + 1).padStart(4, "0")}`;
}
