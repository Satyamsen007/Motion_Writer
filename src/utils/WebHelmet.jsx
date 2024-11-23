import React from 'react';
import { Helmet } from 'react-helmet';

function WebHelmet({ title, favicon }) {
  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>
      {/* Favicon */}
      {favicon && <link rel="icon" href={favicon} type="image/x-icon" />}
    </Helmet>
  );
}

export default WebHelmet;
