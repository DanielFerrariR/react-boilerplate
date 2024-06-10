describe('testing home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('testing place search', () => {
    it('should add a place by name', () => {
      cy.contains(/Hello World/);
    });
  });
});
