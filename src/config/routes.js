import React from 'react';
import Client from '../pages/client/ClientPage';
import ClientRegisterPage from '../pages/client/ClientRegisterPage';
import ClientUpdatePage from '../pages/client/ClientUpdatePage';

export const routes = [
  { path: '/', component: <Client /> },
  { path: '/registrar', component: <ClientRegisterPage /> },
  { path: '/alterar/:id', component: <ClientUpdatePage /> },
];
