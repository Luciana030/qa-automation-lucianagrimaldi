//2.Definir una interface CasoDeTest con: id (number), titulo (string), prioridad (string) y ejecutado (boolean).
interface CasoDeTest {
  id: number;
  titulo: string;
  prioridad: string;
  ejecutado: boolean;
};
//3.Declarar un array de al menos 3 objetos tipados con la interface.
const casosDeTest: CasoDeTest[] = [
  {
    id: 1,
    titulo: "Caso de prueba 1",
    prioridad: "Alta",
    ejecutado: false
  },
  {
    id: 2,
    titulo: "Caso de prueba 2",
    prioridad: "Media",
    ejecutado: true
  },
  {
    id: 3,
    titulo: "Caso de prueba 3",
    prioridad: "Baja",
    ejecutado: false
  }
];
//4.Escribir una función obtenerCasosDeTest(): Promise<CasoDeTest[]> que envuelva el array en un setTimeout + Promise (500ms), simulando una llamada a un servidor.
function obtenerCasosDeTest(): Promise<CasoDeTest[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(casosDeTest);
    }, 500);
  });
}
//5.Escribir una función async main() que haga await a obtenerCasosDeTest() y use forEach para imprimir cada caso formateado con formatearCaso.
const formatearCaso = (caso: CasoDeTest): string => {
  const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};
async function main(): Promise<void> {
  const casos = await obtenerCasosDeTest();
  casos.forEach((caso) => {
    console.log(formatearCaso(caso));
  });
}
main();