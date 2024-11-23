import React from 'react';
import Client from '../pages/client/ClientPage';
import ClientRegisterPage from '../pages/client/ClientRegisterPage';

export const routes = [
  { path: '/', component: <Client /> },
  { path: '/registrar', component: <ClientRegisterPage /> },
];
