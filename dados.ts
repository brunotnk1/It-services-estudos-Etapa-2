import { readFile, writeFile } from "node:fs/promises";
import { Maquina } from "./types";

export async function carregarMaquinas(): Promise<Maquina[]> {
  const texto = await readFile("maquinas.json", "utf-8");
  return JSON.parse(texto);
}

export async function salvarMaquinas(lista: Maquina[]): Promise<void> {
  await writeFile("maquinas.json", JSON.stringify(lista, null, 2));
}