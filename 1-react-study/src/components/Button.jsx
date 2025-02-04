import React from 'react';

export default function Button({styleType, block, ...rest}) {
  let className = 'Button';
  if(styleType) className += ` ${styleType}`;
  if(block) className += ` block`;

  return (
    <button className={className} {...rest}/>
  )
}

