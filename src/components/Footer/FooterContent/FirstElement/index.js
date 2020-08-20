import React from 'react';

import {GridElement, TableCell, HeaderCell, StyledLink} from '../index';

export default () => (
  <GridElement>
    <thead>
      <tr>
        <HeaderCell>Company</HeaderCell>
      </tr>
    </thead>
    <tbody>
      <tr>
        <TableCell>
          <StyledLink href="#">Blog</StyledLink>
        </TableCell>
      </tr>
      <tr>
        <TableCell>
          <StyledLink href="#">Privacy Policy</StyledLink>
        </TableCell>
      </tr>
      <tr>
        <TableCell>
          <StyledLink href="#">About</StyledLink>
        </TableCell>
      </tr>
      <tr>
        <TableCell>
          <StyledLink href="#">Terms & Cond. </StyledLink>
        </TableCell>
      </tr>
    </tbody>
  </GridElement>
);
