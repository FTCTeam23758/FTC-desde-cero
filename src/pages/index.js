/*const React = require('react');
const Redirect = require('@docusaurus/router').Redirect;

function Home() {
  return React.createElement(Redirect, { to: '/intro' });
}

module.exports = Home;*/

import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  return <Redirect to={useBaseUrl('/bienvenida')} />;
}