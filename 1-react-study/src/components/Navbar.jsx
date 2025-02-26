import React from 'react';

export default function Navbar({list}) {
  return (
    <nav className="Navbar">
      <ul>
        {
          list.map((item, idx)=><li key={idx}><a href="#" className={item.state}>{item.name}</a></li>)
        }
      </ul>
    </nav>
  )
}

