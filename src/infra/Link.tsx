import { FC } from 'react';
import {LinkProps, Link as ReactLink} from 'react-router-dom';

interface Props extends LinkProps{ }

export const Link : FC<Props> = (props) => {
  return <ReactLink {...props}>{props.children}</ReactLink>
}