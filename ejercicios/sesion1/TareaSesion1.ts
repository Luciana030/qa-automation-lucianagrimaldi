//Declarar un array de al menos 5 objetos, cada uno representando un caso de prueba con: id (number), titulo (string), prioridad (string: "alta" | "media" | "baja") y ejecutado (boolean)
type Prioridad = "alta" | "media" | "baja";
type Caso = { id: number; titulo: string; prioridad: Prioridad; ejecutado: boolean };

const casos: Caso[] = [
  { id: 1, titulo: "Iniciar sesión", prioridad: "alta", ejecutado: true },
  { id: 2, titulo: "Recuperar contraseña", prioridad: "media", ejecutado: false },
  { id: 3, titulo: "Cerrar sesión", prioridad: "baja", ejecutado: true },
  { id: 4, titulo: "Validar usuario", prioridad: "alta", ejecutado: false },
  { id: 5, titulo: "Mantener sesión", prioridad: "media", ejecutado: false },
];
//3.Escribir una función contarPorPrioridad(casos) que recorra el array y devuelva cuántos casos hay de cada prioridad.
function contarPorPrioridad(casos: Caso[]): Record<Prioridad, number> {
  const conteo: Record<Prioridad, number> = { alta: 0, media: 0, baja: 0 };
  casos.forEach(caso => conteo[caso.prioridad]++);
  return conteo;
}

console.log(contarPorPrioridad(casos)); // { alta: 2, media: 2, baja: 1 }
//4.Escribir una función listarPendientes(casos) que devuelva solo los casos donde ejecutado sea false.
function listarPendientes(casos: Caso[]) {
  const pendientes: Caso[] = [];
  casos.forEach(caso => { if (caso.ejecutado === false) pendientes.push(caso); });
  return pendientes;
}

const resultado = listarPendientes(casos);
//5 y 6.Escribir una arrow function formatearCaso(caso) que reciba un objeto caso y devuelva un string legible, por ejemplo: "#1 - Login válido (alta) - Pendiente"
const formatearCaso = (caso: Caso): string =>
  `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${
    caso.ejecutado === true ? "Ejecutado" : "Pendiente"
  }`;

casos.forEach(caso => console.log(formatearCaso(caso)));