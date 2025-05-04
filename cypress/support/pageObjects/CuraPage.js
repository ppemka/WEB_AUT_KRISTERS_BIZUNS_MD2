export class CuraPage {
    clickMakeAppointment() {
      cy.contains("Make Appointment").click();
    }
  
    login(username, password) {
      cy.get("#txt-username").type(username);
      cy.get("#txt-password").type(password);
      cy.get("#btn-login").click();
    }
  
    fillAppointmentForm() {
      cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
      cy.get("#chk_hospotal_readmission").click();
      cy.get("#radio_program_medicaid").check();
      cy.get("#txt_visit_date").click();
      cy.get(".datepicker-days").contains("30").click();
      cy.get("#txt_comment").type("CURA Healthcare Service");
      cy.get("#btn-book-appointment").click();
    }
  
    validateAppointmentDetails() {
      cy.get("#facility").should("have.text", "Seoul CURA Healthcare Center");
      cy.get("#hospital_readmission").should("have.text", "Yes");
      cy.get("#program").should("have.text", "Medicaid");
      cy.get("#visit_date").should("include.text", "30");
      cy.get("#comment").should("have.text", "CURA Healthcare Service");
    }
  
    openMenu() {
      cy.get("#menu-toggle").click();
    }
  
    validateSidebarVisible() {
      cy.get("#sidebar-wrapper").should("have.class", "active");
    }
  
    goToHistory() {
      cy.contains("History").click();
    }
  
    validateNoAppointmentText() {
      cy.contains("No appointment").should("be.visible");
    }
  }
  