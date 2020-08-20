import React from 'react';

import {GridElement, TableCell, HeaderCell, StyledLink} from '../index';

export default () => (
  <GridElement>
    <thead>
      <tr>
        <HeaderCell>Product</HeaderCell>
      </tr>
    </thead>
    <tbody>
      <tr>
        <TableCell>
          <StyledLink href="#">Price</StyledLink>
        </TableCell>
      </tr>
      <tr>
        <TableCell>
          <StyledLink href="#">Features</StyledLink>
        </TableCell>
      </tr>
      <tr>
        <TableCell>
          <StyledLink href="#">Review</StyledLink>
        </TableCell>
      </tr>
      <tr>
        <TableCell>
          <StyledLink href="#">How It Works </StyledLink>
        </TableCell>
      </tr>
    </tbody>
  </GridElement>
);
