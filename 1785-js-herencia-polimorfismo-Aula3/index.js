/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';
import { CuentaNomina } from './CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticador } from './Empleados/SistemaAutenticacion.js';


const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1234');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);

const cuentaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100);
cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());

const empleado = new Empleado ('juna Perez', '26545678',10000);

const gerente = new Gerente ('Pablo Ruiz', 765443, 15000);
const director = new Director('Noriega Alejandro', 25678999,20000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());
console.log(SistemaAutenticador(empleado,1234));

