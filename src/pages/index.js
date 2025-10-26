import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  return <Redirect to={useBaseUrl('/bienvenida')} />;
}