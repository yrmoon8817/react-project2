// import { createEventEmitter } from "shared/lib/EventEmitter";
import React from "react";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import * as MyRouter from "./lib/MyRouter";



const App = () =>(
    <MyRouter.Router>
      <MyRouter.Routes>
        <MyRouter.Route path="/cart" element={<CartPage/>}/>
        <MyRouter.Route path="/order" element={<OrderPage/>}/>
        <MyRouter.Route path="/" element={<ProductPage/>}/>
      </MyRouter.Routes>
    </MyRouter.Router>
) 

export default App;

/* 이벤트 에미터 실습 */
// const eventEmitter = createEventEmitter(0);
// const logger = value => console.log(value);

// eventEmitter.on(logger);
// console.log(eventEmitter.get()); // 0
// eventEmitter.set(1); // 1
// eventEmitter.set(2); //2 

// 비동기
// setTimeout(()=>eventEmitter.set(10), 3000);

/** 컨텍스트 실습 */
// import MyReact from "./lib/MyReact";
// const countContext = MyReact.createContext({
//   count:0,
//   setCount: ()=>{}
// })
// 공급자
// class CountProvider extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0
//     }
//   }
//   render(){
//     const value = {
//       count: this.state.count,
//       setCount: (nextValue) => this.setState({count: nextValue})
//     }
//     return (<countContext.Provider value={value}>{this.props.children}</countContext.Provider>)
//   }
// }

// 소비자
// const Count = () =>{
//   return (<countContext.Consumer>
//     {(value)=><div>{value.count}</div>}
//   </countContext.Consumer>)
// }
// const PlusButton =()=>{
//   return (<countContext.Consumer>
//     {(value)=><button onClick={()=>value.setCount(value.count + 1)}>+ 카운트 올리기</button>}
//   </countContext.Consumer>);
// }
// export default ()=>(
//   <CountProvider>
//     <Count />
//     <PlusButton />
//   </CountProvider>
// )

/* 레프와 돔*/
// class Foo extends React.Component{
//   render(){
//     return <>Foo</>
//   }
// }
// class MyComponent extends React.Component{
//   // 레프를 어디에 전달하느냐에 따라서 HTML 엘리먼트가 될수도 있고, 컴포넌트의 인스턴스가 될수도 있다. 
//   // 참고로 함수 컴포넌트는 인스턴스가 없기 때문에 이런식으로 ref를 전달할 수 없다.

//   divRef = React.createRef();
//   fooRef = React.createRef();
//   constructor(props){
//     super(props);
//     console.log('constructor', this.divRef);
//     console.log('constructor-foo', this.fooRef);
//   }

//   render(){
//      console.log('render', this.divRef);
//      console.log('render-foo', this.fooRef);
//     return <>
//     {/*// defRef HTML의 엘리먼트*/}
//     <div ref={this.divRef}>div</div>
//     {/*// fooRef 컴포넌트의 인스턴스*/}
//     <Foo ref={this.fooRef}>div</Foo>
//     </>
//   }
//   componentDidMount(){
//     console.log('componentDidMount', this.divRef);
//     console.log('componentDidMount-Foo', this.fooRef);
//     const divElement = this.divRef.current;
//     divElement.style.backgroundColor='#000';
//     divElement.style.width='100px';
//     divElement.style.height='100px';
//   }
// }
// export default MyComponent;