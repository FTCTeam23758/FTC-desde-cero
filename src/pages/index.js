const React = require('react');
const Redirect = require('@docusaurus/router').Redirect;

function Home() {
  return React.createElement(Redirect, { to: '/intro' });
}

module.exports = Home;