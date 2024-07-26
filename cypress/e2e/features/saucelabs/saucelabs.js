import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import opensite from '../../../support/tasks/opensite.js';
import login from '../../../support/tasks/login.js';
import validatelogin from '../../../support/questions/validatelogin.js';

Given('I open the website {string}', (app) => {
  opensite.openGivenSite(app);
});

When('I attempt to login with valid username {string} and password {string}', (username, password) => {
  login.fillLoginForm(username,password);
});

Then('I should be logged in', () => {
  validatelogin.isLoggedIn();
});