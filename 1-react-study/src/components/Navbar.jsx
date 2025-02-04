import React from 'react';

export default function Navbar({list}) {
  return (
    <nav className="Navbar">
      <ul>
        {
          list.map((item)=><li><a href="#" className={classText}>{item}</a></li>)
        }
      </ul>
    </nav>
  )
}

