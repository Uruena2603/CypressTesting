describe('Weather App Funcando', () => {
  it('debería buscar una ciudad correctamente', () => {
      cy.visit('https://uruena2603.github.io/WeatherApp.github.io/'); // Reemplaza con la URL de tu aplicación
      cy.get('#ciudad').type('Pereira'); // Ingresa el nombre de la ciudad
      cy.get('.search button').click(); // Modificamos esta línea
      cy.get('.weather').should('be.visible'); // Verifica que se muestre la información del clima
      
  });
});

describe('Weather App No Funcando', () => {
  it('debería mostrar un mensaje de error para una ciudad inválida', () => {
      cy.visit('https://uruena2603.github.io/WeatherApp.github.io/'); // Reemplaza con la URL de tu aplicación

      // Ingresa un nombre de ciudad inexistente (por ejemplo, "CiudadFicticia")
      cy.get('#ciudad').type('CiudadFicticia');

      // Haz clic en el botón de búsqueda
      cy.get('.search button').click();

      // Verifica que se muestre el mensaje de error
      cy.get('.error').should('be.visible').contains('Invalid City Name');
  });
});



  