# Code Challenge - Cursos de Visual Thinking API

Requerimientos:
1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

#Solución (tiempo de desarrollo: 1 hora y 17 minutos)

Dependencias:
- Se emplea la dependencia Jest para la ejecución de pruebas unitarias para llevar un proceso más ordenado de desarrollo siguiendo la práctica TDD:
  
  `npm install -save jest`

- Se emplea también la dependencia ESLint para la limpieza de código con el objetivo de darle calidad y corregir errores de sintaxis:

  ```
  npm install -save eslint
  npm init @eslint/config
  ```
  
- Por último, se emplea la dependencia Express para el desarrollo y puesta en marcha de un servidor web básico para la API y sus endpoint requeridos:

  `npm install -save express`
  
Componentes:
1. Para iniciar, se propone una prueba para comprobar un correcto acceso a la base de datos (archivo visualpartners.json)

  ```
  test("1) Lectura de archivo correcta", () => {
    const explorers = Reader.readJsonFile("visualpartners.json");
    expect(explorers).not.toBeNull();
  });
  ```
    
2. Esta prueba se resuelve por medio de una clase llamada Reader la cual accede al archivo de base de datos y hace un retrieve de los datos que esta contiene:

  ```
  class Reader{
    static readJsonFile(path){
      const rawdata = fs.readFileSync(path);
      return JSON.parse(rawdata);
    }
  }
  ```
