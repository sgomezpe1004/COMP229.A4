describe('ContactsManager E2E Test', () => {
  const email = 'simongomezpetro1004@gmail.com';
  const password = 'simon102006f';

  beforeEach(() => {
    // Ir a la página de login antes de cada test
    cy.visit('http://localhost:5173/login');
  });

  it('should login, navigate to contacts, and create a contact', () => {
    // ---- LOGIN ----
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Verificar que no esté en login
    cy.url().should('not.include', '/login');

    // ---- NAVEGAR A CONTACTS ----
    cy.contains('Contacts').click();
    cy.url().should('include', '/contacts-crud');

    // Esperar a que cargue el formulario
    cy.get('input[name="firstname"]', { timeout: 10000 }).should('exist');

    // ---- CREAR CONTACTO ----
    cy.get('input[name="firstname"]').type('Test');
    cy.get('input[name="lastname"]').type('User 3');
    cy.get('input[name="email"]').type('testuser3@example.com');
    cy.get('input[name="contactNumber"]').type('1234567890');

    // Hacer submit
    cy.get('button[type="submit"]').click();

    // Verificar que el contacto aparezca en la tabla
    cy.contains('Test').should('exist');
    cy.contains('User 3').should('exist');
    cy.contains('testuser3@example.com').should('exist');
    cy.contains('1234567890').should('exist');

    // ---- SNAPSHOT ----
    cy.screenshot('contact-created'); // guarda un snapshot del estado final
  });
});
