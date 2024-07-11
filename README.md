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

La lista completa de dependencias esta ubicada en el archivo package.json seccion "dependencies"

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

 El automata de pruebas genera un reporte en formato html en la ruta ./reports 

## Otras configuraciones asociadas

- En la ruta ./cypress.config.js se encuentran otros parametros de configuración del entorno, como: toma de evidencias en video, url del entorno de pruebas, etc

- En la seccion Wiki del proyecto se encuentran adjuntos los inventarios de casos de prueba, evidencias de ejecuciones y otra documentación relevante al proyecto ./wikis/home