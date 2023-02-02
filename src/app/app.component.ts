import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  constructor() {
    // SI HAGO FUNCIONES EN EL CONSTRUCTOR, ESTO SE VA A EJECUTAR CUANDO EL COMPONENTE SE CREE.
    // CUANDO UN COMPONENTE SE RENDERIZA EN ANGULAR EN LA PARTE DEL NAVEGADOR, PRIMERO EMPIEZA EJECUTANDO EL
    // CODIGO QUE ESTA DENTRO DEL CONSTRUCTOR.
    console.log('Hola');

    // OPERADORES

    // MAP -> TRABAJA CON ARRAYS -> DENTRO DE LOS PARENTESIS RECIBE UNA FUNCION NORMAL/FUNCION FLECHA.
    //     -> ESTE MAP VA A ITERAR UNO POR UNO EN EL ARRAY, POR CADA ITERACION VA A EJECUTAR LA FUNCION QUE SE
    //        LE PASE ENTRE PARENTESIS. ESTO LO VA A GENERAR EN UN NUEVO ARRAY.
    //        EN EL CASO DEL EJEMPLO, GENERA UN ARRAY NUEVO Y CADA VALOR LO MULTIPLICA POR DOS.
    const auxMap = [1, 2, 3, 4, 5].map((num) => num * 2);
    console.log('auxMap: ', auxMap); // SALIDA: [2,4,6,8,10]

    // FOREACH -> SOLO RECORRE EL ARRAY -> DENTRO DE LOS PARENTESIS RECIBE UNA FUNCION NORMAL/FUNCION FECHA.
    //         -> ESTE FOREACH VA A RECORRER LOS DATOS DEL ARRAY, SOLO LOS LEE Y HACE LO QUE NECESITEMOS.
    const auxForEach = [1, 2, 3, 4, 5].forEach((num) => num * 2);
    console.log('auxForEach: ', auxForEach); // SALIDA: UNDEFINED

    // FIND -> BUSCA Y DEVUELVE INCLUSO UN OBJETO -> DENTRO DEL PARENTESIS RECIBE UNA FUNCION NORMAL/FUNCION FECHA.
    //      -> CUANDO RECORRE EL ARRAY, BUSCA EN CADA ITERACION SI EL NUM ES IGUAL A 3, SI LO ENCUENTA LO MUESTRA,
    //         SINO DICE UNDEFINED
    //         TAMBIEN PUEDE SER QUE QUIERAS BUSCAR UN ID E UN OBJETO ASI: .find(num => obj.id === 3)
    const auxFind = [1, 2, 3, 4, 5].find((num) => num === 3);
    console.log('auxFind: ', auxFind); // SALIDA: 3

    const auxFind2 = [1, 2, 3, 4, 5].find((num) => num === 6);
    console.log('auxFind2: ', auxFind2); // SALIDA: UNDEFINED

    // FIND INDEX -> BUSCA EL INDICE DE LA POSICION DEL ARRAY -> DENTRO DEL PARENTESIS RECIBE UNA FUNCION NORMAL/FUNCION FECHA.
    //            -> CUANDO RECORRE EL ARRAY, BUSCA EN QUE INDICE ESTA EL NUM IGUAL A 4, SI LO ENCUENTA LO MUESTA,
    //               SINO NOS TRAE -1
    const auxFindIndex = [1, 2, 3, 4, 5].findIndex((num) => num === 4);
    console.log('auxFindIndex: ', auxFindIndex); // SALIDA: 3 (EN LOS ARRAYS ARRANCAN DE LA POSICION CERO)

    const auxFindIndex2 = [1, 2, 3, 4, 5].findIndex((num) => num === 6);
    console.log('auxFindIndex2: ', auxFindIndex2); // SALIDA: -1

    // INDEXOF -> DEVUELVE EL INDICE DE LO QUE ESTAS BUSCANDO -> DENTRO DEL PARENTESIS RECIBE LO QUE ESTAMOS BUSCANDO, NO UNA FUNCION.
    //         -> PUEDE RECIBIR OBJETO, CADENA PERO DEVUELVE SOLO EL INDICE, SI LO ENCUENTA LO MUESTRA, SINO NOS TRAE -1
    const auxIndexOf = [1, 2, 3, 4, 5].indexOf(1);
    console.log('auxIndexOf: ', auxIndexOf); // SALIDA: 0 (EN LOS ARRAYS ARRANCAN DE LA POSICION CERO)

    const auxIndexOf2 = [1, 2, 3, 4, 5].indexOf(6);
    console.log('auxIndexOf2: ', auxIndexOf2); // SALIDA: -1

    const auxIndexOfString = 'Hola Mundo'.indexOf('M'); // SI BUSCAMOS UNA PALABRA ENTERA, SOLO VA A TRAER LA POSICION DEL 1° CARACETER
    console.log('auxIndexOfString: ', auxIndexOfString); // SALIDA: 5

    // FILTER -> FILTA - TRABAJA CON ARRAYS -> DENTRO DEL PARENTESIS RECIBE UNA FUNCION NORMAL/FUNCION FECHA.
    //        -> EL FILTER FUNCIONA IGUAL QUE EL MAP, DEVUELVE UN NUEVO ARRAY PERO LO FILTRA, SI ENCUENTRA LO MUESTRA, SINO NOS TRAE
    //           UN ARRAY VACIO.
    const auxFilter = [1, 2, 3, 4, 5].filter((num) => num % 2 === 0); // LE DIGO QUE FILTRE LOS NUMEROS SOLO QUE SEAN PARES
    console.log('auxFilter: ', auxFilter); // SALIDA: [2,4]

    const auxFilter2 = [1, 2, 3, 4, 5].filter((num) => num % 2 !== 0); // LE DIGO QUE FILTRE LOS NUMEROS SOLO QUE SEAN INPARES
    console.log('auxFilter2: ', auxFilter2); // SALIDA: [1,3,5]

    const auxFilter3 = [1, 2, 3, 4, 5].filter((num) => num % 6 === 0); // LE DIGO QUE FILTRE LOS NUMEROS SOLO QUE SEAN MULTIPLOS DE 6
    console.log('auxFilter3: ', auxFilter3); // SALIDA: []

    // JOIN -> RECIBE ARRAY -> LO CONVIERTE EN CADENA -> DENTRO DEL PARENTESIS RECIBE DE QUE FORMA SE VA A CONCATENAR LA CADENA.
    const auxJoin = [1, 2, 3, 4, 5].join('-'); //CONVIERTE EL ARRAY EN CADENA DE TEXTO Y LO SEPARA EN (-)
    console.log('auxJoin: ', auxJoin); // SALIDA: 1-2-3-4-5

    // SPLIT -> RECIBE CADENA -> LO CONVIERTE EN ARRAY -> DENTRO DEL PARENTESIS RECIBE EL PARAMETRO QUE TIENE QUE ENCONTRAR PARA SEPARARLO.
    const auxSplit = 'Hola,Mundo,Test'.split(','); //CONVIERTE LA CADENA DE TEXTO EN ARRAY Y LO ARMA SEGUN EL CARACTER A UBICAR EN LA CADENA
    console.log('auxSplit: ', auxSplit); // SALIDA: ["Hola, "Mundo", "Test"]

    // OPERADORES TYPESCRIPT

    //SPLICE -> RECIBE ARRAY -> RECIBE DOS PARAMETROS: CUANTOS ELEMENTOS VA A ELIMINAR Y LA POSICION DESDE DONDE VA A ELIMINAR LOS ELEMENTOS.
    //       -> EL SPLICE SE UTILIZA GENERALMENTE CUANDO SE QUIERE ELIMINAR DE UNA TABLA UNA FILA ESPECIFICA.
    //       -> PUEDE DEVOLVER LO QUE ESTAS ELIMINANDO O EL ARRAY MODIFICADO SIN LOS ELEMENTOS QUE FUERON ELIMINADOS.
    const auxSplice = ['a', 'b', 'c', 'd', 'e'].splice(1, 1); // SACA UN ELEMENTO DE LA POSICION UNO
    console.log('auxSplice: ', auxSplice); // SALIDA: ["b"]

    const A = [1, 2, 3, 4, 5];
    const auxSplice2 = A.splice(1, 1);
    //A.splice(1,1); DE ESTA FORMA SE COLOCA TAMBIEN SI NO QUERES SABER QUE SE ELIMINO
    console.log('auxSplice2: ', A, auxSplice2); // SALIDA: [1,3,4,5] [2]

    //REDUCE -> RECIBE ARRAY -> RECIBE UNA FUNCION SIMPLE/FLECHA Y EL SEGUNDO PARAMETRO ES EL VALOR INICIAL DESDE DONDE EMPEZAR A SUMAR.
    //       -> EL REDUCE SE UTILIZA PARA SUMAR VALORES DE UN ARRAY.
    //       -> TIENE TRES ENTRADAS: ACUMULADOR, VALOR ACTUAL Y EL INDICE.
    const auxReduce = [1, 2, 3, 4, 5].reduce((prev, value, index) => {
      //console.log(prev, value, index); // PARA SABER LOS VALORES DE CADA ENTRADA
      return prev + value;
    }, 0); // EL CERO ES EL VALOR DE ACUMULADOR INICIAL, SI HUBIERA SIDO VALOR 100, LA SALIDA HUBIERA SIDO 115
    console.log('auxReduce: ', auxReduce); // SALIDA: 15

    // SI RETORNA UNA LINEA DE CODIGO TAMBIEN SE PUEDE ESCRIBIR ASI:
    const auxReduce2 = [1, 2, 3, 4, 5].reduce(
      (prev, value, index) => prev + value,
      0
    );
    console.log('auxReduce2: ', auxReduce2); // SALIDA: 15

    // OPERADORES JSON
    // SE TIENE TRES OPERADORES: ENTRIES, KEY Y VALUES
    const auxJSON = {
      id: 1,
      name: 'JUAN',
      lasName: 'GUTIERREZ',
    };

    //ENTRIES -> RECIBE UN OBJETO JSON -> DEVUELVE UN ARRAY.
    //        -> LO QUE HACE ES AGARRAR LOS VALORES DEL JSON Y CONVERTIRLOS EN ARRAY, O SEA, EN ESTE CASO DEVUELVE UN ARRAY CON 3 ARRAYS DENTRO.
    const auxEntries = Object.entries(auxJSON);
    console.log('auxEntries: ', auxEntries); // SALIDA: [Array[2]], [Array[2]], [Array[2]]

    //KEYS -> RECIBE UN OBJETO JSON -> DEVUELVE UN ARRAY.
    //     -> EN ESTE CASO AGARRA SOLO LAS KEYS DEL JSON, NO SUS VALORES Y LO DEVUELVE EN UN ARRAY.
    const auxKeys = Object.keys(auxJSON);
    console.log('auxKeys: ', auxKeys); // SALIDA: ["id", "name", "lasName"]

    //VALUES -> RECIBE UN OBJETO JSON -> DEVUELVE UN ARRAY.
    //       -> EN ESTE CASO AGARRA SOLO LOS VALORES DE JSON, NO SUS KEYS Y LO DEVUELVE EN UN ARRAY.
    const auxValues = Object.values(auxJSON);
    console.log('auxValues: ', auxValues); // SALIDA: [1, "JUAN", "GUTIERREZ"]

    //CONST -> UNA VARIABLE DE TIPO CONSTANTE NO PUEDE CAMBIAR SU VALOR, UN VALOR FIJO TENDRIA.
    //LET   -> SE USA PARA REASIGNACIONES, PUEDE CAMBIAR SU VALOR.
    //         FUNCIONA DENTRO DEL CONTEXTO DONDE SE DEFINA, ES DECIR QUE SE PUEDE TENER VARIABLES LET REPETIDAS CON EL MISMO NOMBRE.

    //LET
    // EN ESTE CASO PODEMOS TENER DOS FOR CON let i = 1 Y SE EJECUTAN IGUAL COMO DOS DIFERENTES.
    for (let i = 1; i <= 5; i++) {
      //console.log(i); // SALIDA: 1 2 3 4 5
    }
    for (let i = 1; i <= 5; i++) {
      //console.log(i); // SALIDA: 1 2 3 4 5
    }
  }

  // LA FUNCION SI SE LE PASA PARAMETRO, HAY QUE DECIRLE DE QUE TIPO ES Y DESPUES ANTES DEL COMIENZO DE LA LLAVE,
  // HAY QUE DECIRLE DE QUE TIPO ES LO QUE VA A RETORNAR, SI SE LE PONE ANY, SIGNIFICA QUE PUEDE SER DE CUALQUIER
  // TIPO LO QUE RETORNE, NO ESTA BIEN VISTO USARLO PARA LAS EMPRESAS.
  // DELANTE DEL NOMBRE DE LA FUNCION SE PUEDE ESPECIFICAR SI ES PUBLIC O PRIVATE, SI ES PUBLIC, SE PUEDE ACCEDER
  // DESDE EL APP.COMPONENT.HTML Y SI FUERA PRIVADO, SOLO SE PODRIA USAR DENTRO DE LA CLASS APPCOMPONENT.
  // SI A UNA VARIABLE O FUNCION NO SE LE ACLARA, POR DEFECTO ES PUBLIC.
  /*getName(name: string): string {
    return 'Hola' + name;
  }*/

  // SE USA MUCHO EN ANGULAR LOS ARROW FUNCTIONS (FUNCIONES FLECHA), SIRVE PARA QUE EL CODIGO SEA MAS CORTO.
  // LA SINTAXIS SERIA, () (PARAMETROS DE ENTRADA), => (EN VEZ DE DOS PUNTOS O LLAVES) Y
  // {} (ACA VA EL CODIGO QUE VA A EJECUTAR LA FUNCION FLECHA).
  // ADELANTE DE LOS PARAMETROS DE ENTRADA, EL NOMBRE IRIA EN UNA CONST NOMBREDELAFUNCION = Y LA SINTAXIS ANTERIOR.

  // const getName = (name: string) => {return "Hola " + name;}

  // SI LA FUNCION FLECHA RETORNA UNA SOLA LINEA DE CODIGO, SE LO COLOCA DE LA SIGUIENTE FORMA:
  // const getName = (name: string) => "Hola " + name;

  // SI LA FUNCION NO TIENE PARAMENTROS DE ENTRADA Y RETORNA UNA SOLA LINEA, SE COLOCA DE LA SIGUIENTE FORMA:
  // const getName = () => "Hola";

  // SI TENGO DOS PARAMENTROS DE ENTRADA Y RETORNA UNA SOLA LINEA, SE LO COLOCA DE LA SIGUIENTE FORMA:
  // const getName = (name: string, lasName: string) => "Hola " + name + lastName;

  // SI EL PARAMETRO DE ENTRADA ES UNO SOLO Y NO SABEMOS DE QUE TIPO ES, SE COLOCA DE LA SIGUIENTE FORMA:
  // const getName = name => "Hola " + name;
}
