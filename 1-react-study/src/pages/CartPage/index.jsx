import React from "react";
import * as MyRouter from "../../lib/MyRouter"
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page"
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";


class CartPage extends React.Component{
  constructor(props){
    super(props);
    this.state= {product:null};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async fetch(){
    const {productId}= this.props.params();
    // 주소가 없는 경우
    if(!productId) return;

    try{
      const product = await ProductApi.fetchProduct(productId);
      this.setState({product})
    }catch(e){
      console.error(e);
    }
  }
  
  handleSubmit(values) {
    console.log(values);

    // TODO : 결제 성공후
    this.props.navigate('/order')
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
export default MyRouter.withRouter(CartPage);