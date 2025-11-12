import React from 'react';
import Page from '../../components/Page';
import Title from '../../components/Title';
import Navbar from '../../components/Navbar';
import * as MyLayout from "../../lib/MyLayout";
import ProductItem from '../../components/ProductItem';
import ProductApi from 'shared/api/ProductApi';
import OrderableProductItem from './OrderableProductItem';
import Dialog from '../../components/Dialog';
import ErrorDialog from '../../components/ErrorDialog';

class ProductPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      productList:[],
    }
  }
  async fetch(){
    const {startLoading, finishLoading,openDialog} = this.props;
    startLoading('메뉴 목록 로딩중...');
    try{
      // throw 'fake error'
      const productList = await ProductApi.fetchProductList();
      this.setState({productList})
      finishLoading()

    }catch(e){
      openDialog(<ErrorDialog/>);
      return
    }
  }
  componentDidMount(){
    this.fetch();
  }
  render(){
  return (
    <div className="ProductPage">
      <Page
        header={<Title>메뉴목록</Title>}
        footer={<Navbar list={[{name:"메뉴목록", state:"active"},{name:"주문내역", state:""}]}/>}>
        <ul>
          {this.state.productList.map(product=>(
            <li key={product.id}>
              <OrderableProductItem product={product}/>
            </li>
          ))}
        </ul>
      </Page>
    </div>)
  }
}

export default MyLayout.withLayout(ProductPage);