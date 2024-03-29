describe('Prueba de inicio de sesión', () => {
    it('debería iniciar sesión correctamente', () => {
      cy.visit('https://demoqa.com/login');
  
      // Ingresa el usuario y la contraseña
      cy.get('#userName').type('test');
      cy.get('#password').type('test1234*');
  
      // Haz clic en el botón de inicio de sesión
      cy.get('#login').click();
  
      // Verifica que se redirija a la página de perfil
      cy.url().should('eq', 'https://demoqa.com/profile');
    });
  });

  