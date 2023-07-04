 import selector from '../fixtures/selectors'
 
 const Course = {
    interceptApis : () => {
        cy.intercept('/course-takers/courses/*').as('courses');
    },

    preRegistrationFlow: () => {
    cy.contains('a', selector.platform).scrollIntoView().click();
    cy.contains('a', selector.RegisterButton).click();
    cy.wait(1000)
    cy.get(selector.profession).click();
    cy.get(selector.apprenticeship).click()
    },

    Register: (phoneNo, firstName, lastName, email, password) => {
    cy.get(selector['first-name']).eq(0).type(firstName);
    cy.get(selector['last-name']).eq(0).type(lastName);
    cy.get(selector.email).eq(0).type(email);
    cy.get(selector.password).eq(0).type(password)
    cy.contains(selector['register-button']).should('be.visible').scrollIntoView().click({force:true})
    cy.get(selector.telephone).eq(1).scrollIntoView().type(phoneNo, {force:true})
    cy.contains(selector.complete_registration).click()
    cy.contains(' Zum letzten Schritt ').scrollIntoView().click({force:true})
    cy.wait(1000)
    cy.get('button').contains(' Kostenlos registrieren ').click({force:true})
    }, 

    getCourses: () => {
        cy.wait('@courses').then(({ response }) => {
            const courses = response.body;
            cy.log(courses)
        })
    }
};

export default Course;