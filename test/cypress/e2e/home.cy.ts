describe('testing home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should find hello world text', () => {
    cy.contains(/Hello World/);
  });
});
