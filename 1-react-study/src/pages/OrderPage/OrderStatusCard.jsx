import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const OrderStatusCard=({order}) => {
  const {name, id, status, orderDate } = order
  return (
    <Card
    header={<><strong>{status}</strong><br/>{name}</>}
      data={[
        {term:'주문일시', desc:orderDate},
        {term:'주문번호', desc:id},
      ]}
      footer={<><Button>전화</Button><Button>가게보기</Button></>}
    ></Card>
  )
}

export default OrderStatusCard;