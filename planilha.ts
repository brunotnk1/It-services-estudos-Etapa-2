import ExcelJS from "exceljs";
import type { Maquina, tipoM} from "./types";

export async function lerPlanilha(caminho: string): Promise<Maquina[]> {
  // 1. Abrir a planilha
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(caminho);
  const aba = workbook.worksheets[0];

  // 2. Lista vazia que vai receber as máquinas
  const maquinas: Maquina[] = [];

  // 3. Passar por cada linha
  aba.eachRow((linha, numeroDaLinha) => {
  if (numeroDaLinha === 1) return;            // pula o cabeçalho

  const id = linha.getCell(1).text.trim();
  if (!id) return;                            // pula linhas sem ID (as das instruções)

  const cliente = linha.getCell(2).text.trim();
  const modelo = linha.getCell(3).text.trim();
  const serialTexto = linha.getCell(4).text.trim();

  const tipoTexto = linha.getCell(5).text.toLowerCase();
  const tipo: tipoM = tipoTexto.includes("avul") ? "avulso" : "mensal";

  maquinas.push({ id, cliente, modelo, serial: serialTexto || undefined, tipo });
}); // 4. Devolver a lista pronta
  return maquinas;
}
