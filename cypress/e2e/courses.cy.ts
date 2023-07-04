import Course from '../helpers/courses.helpers';
import data from '../fixtures/data';

describe('Course test cases', () => {
  
  before(() => {
    cy.viewport('iphone-xr', 'portrait')
  })
  it('it should return number of listed courses for electronics profession', () => {
    // const course = new Course;
    cy.visit('/');
    Course.interceptApis();
    Course.preRegistrationFlow();
    Course.Register(data.telephone,data['first-name'],data['last-name'],data.email,data.password)
    Course.getCourses();
  });
});