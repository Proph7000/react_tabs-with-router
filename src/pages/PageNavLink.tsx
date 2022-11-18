import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';

export type Props = {
  to: string,
  text: string,
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      {
        'is-active': isActive,
      },
    )}
  >
    {text}
  </NavLink>
);