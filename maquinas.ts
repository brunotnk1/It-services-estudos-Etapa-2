import { tipoM, Maquina } from "./types";
import { carregarMaquinas, salvarMaquinas } from "./dados";
import { buscarPorID, proximoID, contadorCliente, contarDoCliente } from "./util";
import { lerPlanilha } from "./planilha";

const maquinas = await carregarMaquinas();
const m = maquinas[0];
const prefixo = "AVL";
const planilha = await lerPlanilha("Cadastro_Maquinas.xlsx");

//console.log(buscarPorID(maquinas, "VER-0001"));
//console.log(proximoID(maquinas, prefixo));

console.log(planilha);



/*const J: Maquina[] = [{ 
id: "VER-0001", cliente: "Vero Verde", modelo: "Dell Latitude 5420", serial: "", tipo: "Mensal"
},
{ 
id: "VER-0002", cliente: "Vero Verde", modelo: "Dell Latitude 5320", serial: "", tipo: "Mensal"
}];

console.log(m);
console.log(J[0]);






/*
const tecnico: string = "bruno";
const maquinavero: number = 3;
const concluido: boolean = true;
const estatus: string[] = ["concluido", "pendente", "em andamento"];
console.log(tecnico, maquinavero, concluido, estatus[0]);
*/
