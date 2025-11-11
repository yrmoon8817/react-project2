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
    <MyLayout.layoutContext.Consumer>
      {({setDialog})=>(<button onClick={()=>{setDialog(<Dialog/>); setTimeout(()=> setDialog(null),5000)}}>다이어로그 열기</button>)}
    </MyLayout.layoutContext.Consumer>  
</div>
  )
}

