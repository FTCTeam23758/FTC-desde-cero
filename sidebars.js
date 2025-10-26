// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {

  tutorialSidebar: [
    {
      type: 'doc',
      id: 'bienvenida',
      label: 'Bienvenida',
    },

    {
      type: 'category',
      label: 'Programación y eléctrica',
      
      items: [
        {
          type: 'doc',
          id: 'introduccion-progra-electrica',
          label: 'Introducción',
        },

        {
          type: 'doc',
          id: 'instalacion-progra-electrica',
          label: 'Software necesario',
        },
      ],
    },

    {
      type: 'doc',
      id: 'recursos-utiles',
      label: 'Recursos útiles',
    },

    {
      type: 'doc',
      id: 'contribuir',
      label: 'Cómo contribuir',
    },
  ],
};

export default sidebars;
