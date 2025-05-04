import { CuraPage } from '../support/pageObjects/CuraPage';

const cura = new CuraPage();

describe("CURA Appointment Scenarios", () => {
  beforeEach(() => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
  });

  it("Scenario 1 - Make an Appointment", () => {
    cura.clickMakeAppointment();
    cura.login("John Doe", "ThisIsNotAPassword");
    cura.fillAppointmentForm();
    cura.validateAppointmentDetails();
  });

  it("Scenario 2 - Appointment history empty", () => {
    cura.clickMakeAppointment();
    cura.login("John Doe", "ThisIsNotAPassword");
    cura.openMenu();
    cura.validateSidebarVisible();
    cura.goToHistory();
    cura.validateNoAppointmentText();
  });
});
