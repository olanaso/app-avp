/*Login*/
import $ from 'jquery'

import Login from './pages/Login/Login.f7.html';
import Menu from './pages/Menu/Menu.f7.html';
import ActividadesCampo from './pages/ActividadesCampo/ActividadesCampo.f7.html';
import IngresoMTC from './pages/IngresoMTC/IngresoMTC.f7.html';
import PanelLeft from './pages/panel-left.f7.html';


/*Configuracion*/

import NotFoundPage from './pages/not-found.f7.html';


export default [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/menu/',
    component: Menu,
  },
  {
    path: '/registro-campo/',
    component: ActividadesCampo,
  },
  {
    path: '/registro-ingreso-salida-mtc/',
    component: IngresoMTC,
  },
  {
    path: '/panel-left/',
    component: PanelLeft,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
