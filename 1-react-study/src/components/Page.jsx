import React from 'react';

export default function Page({header,footer,children}) {
  return (
<div className="Page">
  <header>{header}</header>
  <main>
    {children}
  </main>
  <footer>
    {footer}
  </footer>
</div>
  )
}

