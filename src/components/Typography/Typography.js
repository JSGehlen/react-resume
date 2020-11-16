import React from 'react';
import cn from 'classnames';
import './Typography.scss';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subheading: 'h3',
  body: 'p',
  span: 'span',
};

const Typography = ({ variant, color, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <Component
      className={cn({
        [`title title--${variant}`]: variant,
        [`title title--${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
