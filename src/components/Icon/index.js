/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as icons from './icons';

export const sizeStyle = {
  Tiny: css`
    width: 12px;
    min-height: 12px;
    & > svg {
      width: 12px;
    }
  `,
  Small: css`
    width: 14px;
    min-height: 14px;
    & > svg {
      width: 14px;
    }
  `,
  Normal: css`
    width: 16px;
    min-height: 16px;
    & > svg {
      width: 16px;
    }
  `,
  Big: css`
    width: 18px;
    min-height: 18px;
    & > svg {
      width: 18px;
    }
  `,
  Huge: css`
    width: 20px;
    min-height: 20px;
    & > svg {
      width: 20px;
    }
  `,
  Default: css`
    width: 1em;
    min-height: 1em;
    & > svg {
      width: 1em;
    }
  `,
};

export const defaultStyle = (color) => css`
  display: block;
  width: 1em;
  height: auto;
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
  fill: currentColor;
  color: currentColor;
  flex-shrink: 0;
  backface-visibility: hidden;
  ${color &&
  css`
    fill: ${color};
  `}
`;

export default function Icon(props) {
  const { icon, color, className, size = 'Default' } = props;

  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={[defaultStyle(color), sizeStyle[size]]}
      className={className}
    />
  );
}

/**
 * menu, arrowLeft
 */
export const types = Object.keys(icons).reduce((accum, key) => {
  // eslint-disable-next-line no-param-reassign
  accum[key] = key;
  return accum;
}, {});

/**
 * Tiny, Small, Normal, Big, Huge, Default
 */
export const sizes = Object.keys(sizeStyle).reduce((accum, key) => {
  // eslint-disable-next-line no-param-reassign
  accum[key] = key;
  return accum;
}, {});
