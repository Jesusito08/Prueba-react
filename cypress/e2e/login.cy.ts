describe('Inicio de sesión', () => {
  it('permite al usuario iniciar sesión', () => {
    // Visita la página de inicio de sesión
    cy.visit('/login');

    // Rellena el formulario de inicio de sesión
    cy.get('input[type=text]').type('eve.holt@reqres.in');
    cy.get('input[type=password]').type('cityslicka');

    // Envía el formulario
    cy.get('button[type=button]').click();

    // Verifica que el usuario ha iniciado sesión correctamente
    // Esto dependerá de cómo manejes el inicio de sesión en tu aplicación
    // Por ejemplo, podrías verificar que se muestra un mensaje de bienvenida:
    cy.window().its('localStorage.token').should('exist');

    // Verifica que no se muestra ningún mensaje de error
    cy.get('p').should('not.exist');
  });
});