import React from 'react';
import * as MyLayout from '../lib/MyLayout';
import Backdrop from './Backdrop';
import Dialog from './Dialog';
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
  <MyLayout.DialogContainer/>
</div>
  )
}

