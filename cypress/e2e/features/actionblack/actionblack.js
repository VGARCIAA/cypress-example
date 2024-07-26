import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import opensite from '../../../support/tasks/opensite.js';
import navegar from '../../../support/tasks/navegarReservas.js';

Given('Un usuario visita la {string} de reservas', (app) => {
    opensite.openGivenSite(app);
    navegar.irAReservas();
});

When('El usuario selecciona una {string} y {string}', (sede, clase) => {
    navegar.seleccionarSede(sede);
});

And ('Se logea con {string} y {string} validos', (username, password) => {

});

Then('Puede confirmar la reserva', () => {

});