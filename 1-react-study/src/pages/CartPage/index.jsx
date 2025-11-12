import React from "react";
import * as MyRouter from "../../lib/MyRouter"
import ProductApi from "shared/api/ProductApi";
import OrderApi from "shared/api/OrderApi";
import Page from "../../components/Page"
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import * as MyLayout from "../../lib/MyLayout";
import ErrorDialog from "../../components/ErrorDialog";
import PaymentSuccessDialog from "./PaymentSuccessDialog";


class CartPage extends React.Component{
  constructor(props){
    super(props);
    this.state= {product:null};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async fetch(){
    const {params, startLoading, finishLoading}= this.props;
    const {productId} = params();
    // 주소가 없는 경우
    if(!productId) return;
    startLoading('장바구니에 담는 중...');
    try{
      const product = await ProductApi.fetchProduct(productId);
      this.setState({product})
      finishLoading()
    }catch(e){
      openDialog(<ErrorDialog/>);
      return     
    }
  }
  async handleSubmit(values) {
    const {startLoading, finishLoading, openDialog} = this.props;
    startLoading('결제중...')
    try { 
      await OrderApi.createOrder(values);
    }catch(e) {
      openDialog(<ErrorDialog/>)
      return;
    }
    finishLoading();
    // TODO : 결제 성공후
    openDialog(<PaymentSuccessDialog/>)
    // this.props.navigate('/order')
  }  
  componentDidMount(){
    this.fetch();
  }
  render(){
    const {product} = this.state;
    return (<div className="CartPage">
      <Page 
      header={<Title backUrl={"/"}>장바구니</Title>} 
      footer={
      <PaymentButton />
      }>
      {product&&<ProductItem product={product}/>}
      {/**역방향 : 자식에서 처리하여 부모에게 전달 */}
      <OrderForm onSubmit={this.handleSubmit}/>
      </Page>
    </div>)
  }
}
export default MyLayout.withLayout(MyRouter.withRouter(CartPage));