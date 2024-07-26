## PROYECTO DE EJEMPLO PARA PRUEBAS AUTOMATIZADAS CON CYPRESS

Proyecto de automatización de pruebas funcionales de sistema para pagina web dummy sauce labs, usando CyPress. Con integración hacia CyPress Cloud & Cucumber 

## Antes de ejecutar 

Antes de iniciar la ejecución verificar los siguientes requerimientos de sistema:
- Verificar que Node JS este instalado, para esto ejecutar el comando: 
```sh
npm version
```
> Nota importante: en caso de no tener node instalado como gestor de versiones, puede instalarse el package manager desde: https://nodejs.org/en/download/package-manager 

- Ejecutar instalación de paquetes (dependencias) del proyecto

```sh
npm i
```

- Verificar que CyPress este instalado, version compatible:  "cypress": "^13.13.0"
```sh
npm cypress -v
```

## Dependencias

La lista completa de dependencias esta ubicada en el archivo package.json seccion "dependencies". Este proyecto usa la dependencia cypress-cucumber-preprocessor, la cual es una libreria abierta no oficialmente creada por CyPress para el uso de lenguaje Gherkin en la definicion de specs (test cases automatizados). La documentación relacionada se puede encontrar en: [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

## Documentación y uso

Para ejecutar las pruebas se deben seguir los siguientes pasos principales

- Para ejecutar desde terminal: asegurarse de que el proyecto compila correctamente ejecutando el comando

```sh
npx cypress run 
```
> Nota importante: este comando ejecuta todas los CyPress specs incluidos en el proyecto

- Para ejecutar desde CyPress IDE: 

```sh
npx cypress open
```
Dar click en el navegador de preferencia, luego navegar a E2E Tests, escoger el spec deseado y ejecutar

- Para ejecutar desde CyPress Cloud: Esto requiere un usuario asociado a CyPress Cloud. En el archivo cypress.config.js asociar un ID de proyecto vinculado a una cuenta de CyPress Cloud valido, ejemplo:

```sh
 projectId: "dfoc2t"
```

luego, ejecutar por via de comandos 

```sh
npx cypress run --record --key e7844be2-c9c2-4f67-ad9e-6f8a947291a8
```

> Nota importante: esta key es unica y generada via CyPress cloud, idealmente puede guardarse dentro de la maquina como una variable de entorno, de la siguiente manera

```sh
export CYPRESS_RECORD_KEY="e7844be2-c9c2-4f67-ad9e-6f8a947291a8"
```
```sh
echo $CYPRESS_RECORD_KEY
```

```sh
npx cypress run --record
```

## Reportes de ejecuciones

 El automata de pruebas genera un reporte en formato html en la ruta ./cypress/reports, la configuracion asociada a esto se encuentra en el archivo ./cypress.config.js, para generar el reporte ejecutar el siguiente comando:

```sh
npx cypress run --reporter mochawesome
```
 El automata tambien genera reportes .json asociados al plugin de cucumber, este puede ser integrado con reporteadores para cucumber. La ruta del reporte es ./cypress/reports/ para configuraciones referirse al archivo .cypress-cucumber-preprocessor
 
Los videos de ejecuciones se guardan en la ruta ./videos 

## Otras configuraciones asociadas

- Este proyecto utiliza un patron de diseño basado en ScreenPlay, los paquetes asociados son los siguientes

  ```sh
    tasks ->   cypress/support/tasks
    questions -> cypress/support/questions
    user interface -> cypress/fixture/pages
    step definitions -> cypress/e2e/features/<folder_per_feature>/steps.js
    features -> cypress/e2e/features/feature.feature
  ```

- En la ruta ./cypress.config.js se encuentran otros parametros de configuración del entorno, como: toma de evidencias en video, url del entorno de pruebas, etc

- En la seccion Wiki del proyecto se encuentran adjuntos los inventarios de casos de prueba, evidencias de ejecuciones y otra documentación relevante al proyecto ./wikis/home

- Cypress Cucumber Preprocessor configuraciones: 
    
    * Asegurarse de que el archivo .cypress-cucumber-preprocessor.json se encuentra ubicado en el root del proyecto. El archivo contiene el glue que indica en cual carpeta deben albergarse los step definitions

    ```sh
    "step_definitions": "./cypress/e2e/features/"
    ```

    * Los step definitions deben seguir una jerarquia de carpetas como la siguiente:

    [![](https://mermaid.ink/img/pako:eNqFUTtvAjEM_iuWpzuJY-iYmbVTtyqLe3EgVRJHeQwI8d-bKxyoCNTN_vw9ZPuEsxhGhcFFEyjpCJBF6jDMx5S5lHFcIAB-40uhlJslDpYKWJqseMN5ksTxSgSwTLV17dq_VsBKAYgSvjJfpXf4_7Qn8u13-Tt9cHGep2Xt8UX89nGDpw7k62qAGwycAznTL3laQI31wIE1ql4attR81ajjuVOpVfk4xhlVzY032JKhyjtH-0wBlSVfOpql7Q-3LlH8FLlP2bgq-f3yu98Xnn8AvgOQrg?type=png)](https://mermaid.live/edit#pako:eNqFUTtvAjEM_iuWpzuJY-iYmbVTtyqLe3EgVRJHeQwI8d-bKxyoCNTN_vw9ZPuEsxhGhcFFEyjpCJBF6jDMx5S5lHFcIAB-40uhlJslDpYKWJqseMN5ksTxSgSwTLV17dq_VsBKAYgSvjJfpXf4_7Qn8u13-Tt9cHGep2Xt8UX89nGDpw7k62qAGwycAznTL3laQI31wIE1ql4attR81ajjuVOpVfk4xhlVzY032JKhyjtH-0wBlSVfOpql7Q-3LlH8FLlP2bgq-f3yu98Xnn8AvgOQrg)

    * En el archivo cypress.config.js asegurarse de tener la siguiente configuracion: 

    ```sh
    e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile:false
  },
  ```
    