import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppBar, Toolbar, Button } from '@mui/material';

import './NavBarStyle.scss';

const pages = [
  'Shop',
  'Products',
  'Cart',
  'Order',
  'Add Product',
  'Admin Products',
];
export default function NavBar() {
  const location = useLocation().pathname.replaceAll(/[^a-zA-Z0-9]/gm, '');
  return (
    <AppBar style={{ backgroundColor: 'teal' }} position='static'>
      <Toolbar>
        {pages.map((page) => (
          <Button
            key={page}
            className={`menu-btn ${
              location === page.toLowerCase().replaceAll(/[^a-zA-Z0-9]/gm, '')
                ? 'active'
                : ''
            }`}
          >
            <Link to={`/${page.toLowerCase().replaceAll(' ', '-')}`}>
              {page}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
