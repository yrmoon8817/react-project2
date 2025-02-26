import React from 'react';

export default function Card({header,footer,data=[]}) {
  return (
    <div className='Card'>
      <header>{header}</header>
      <main>{
        data.map(({term, desc})=>(
        <dl key={term}>
            <dt>{term}</dt>
            <dd>{desc}</dd>
          </dl>))
        }</main>
      <footer>{footer}</footer>
    </div>
  )
}

