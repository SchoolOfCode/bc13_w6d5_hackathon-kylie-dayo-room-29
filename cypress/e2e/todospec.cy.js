describe("Checking index page", () => {
  it("Vists the to do page and adds a todo to the list.", () => {
    cy.visit("localhost:3000/");
    // cy.contains("Create!").click();

    cy.get(".form-task").type("feed tuki!").should("have.value", "feed tuki!");

    cy.get(".form-date").type("1999-01-08").should("have.value", "1999-01-08");
    cy.get(".create-button").click();
  });

  it("Delete a todo from the list.", () => {
    cy.visit("localhost:3000/");
    // cy.contains("Create!").click()
    cy.visit("localhost:3000/");
    cy.get(".create-button").click();
  });
});
