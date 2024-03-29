# CypressTesting

Este repositorio sirve como punto de partida para explorar Cypress, una poderosa herramienta de pruebas para aplicaciones web modernas.

## Acerca de CypressTesting

Esta es mi primera incursión en Cypress, donde aprendo los fundamentos de configurar Cypress dentro de un proyecto, configurar las dependencias necesarias y aprovechar sus capacidades para automatizar procesos de prueba. A través de este repositorio, profundizo en varios conceptos y prácticas de pruebas automatizadas, centrándome en la construcción de suites de pruebas sólidas para aplicaciones web.

## Aprendizajes Clave y Características

- **Instalación de Dependencias**: Aprende cómo instalar las dependencias requeridas para Cypress dentro de tu proyecto.
- **Configuración**: Comprende la configuración de archivos, incluido cypress.json, para aprovechar extensiones como el reportero Mochawesome para generar informes HTML de las pruebas ejecutadas.
- **Ejecución de Scripts**: Explora las capacidades de scripting desde el archivo package.json para ejecutar Cypress con directivas específicas desde la terminal.
- **Ejecución de Pruebas**: Diseña y ejecuta pruebas automatizadas en una aplicación de clima previamente desarrollada. Ten en cuenta que las pruebas deben residir en la carpeta 'e2e' generada por Cypress para una ejecución adecuada.
- **Prácticas y Conceptos**: Obtén información sobre diversas prácticas y conceptos aplicados en pruebas automatizadas, asegurando la confiabilidad, mantenibilidad y eficiencia de las suites de pruebas.

## Detalles de Implementación

Para utilizar la extensión Mochawesome para informes HTML, asegúrate de las siguientes configuraciones:

### package.json

```json
"scripts": {
    "test": "cypress open",
    "html-report": "cypress run --spec cypress/e2e/weather.spec.cy.js --browser chrome --headed"
}
```

### cypress.config.js

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
```

### /cypress/support/e2e.js

```javascript
import './commands'
import 'cypress-mochawesome-reporter/register'
```




