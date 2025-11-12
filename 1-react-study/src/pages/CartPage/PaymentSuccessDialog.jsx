import Button from "../../components/Button"
import Dialog from "../../components/Dialog"
import * as MyRouter from '../../lib/MyRouter'
import * as MyLayout from '../../lib/MyLayout'

const PaymentSuccessDialog = ({navigate, closeDialog}) =>{
  const handleClickNo = () => {
    closeDialog();
    navigate('/');
  }
  const handleClickYes= () =>{
    closeDialog();
    navigate('/order');
  }
  return <Dialog
    header={<>결제 완료</>}
    footer={<>
      <Button style={{marginRight: "8px"}} onClick={handleClickNo}>아니오</Button>
      <Button styleType={"brand"} onClick={handleClickYes}>예</Button>
    </>}> 결제가 완료되었습니다. 주문 상태를 보러 가시겠습니까?</Dialog>
}
export default MyLayout.withLayout(MyRouter.withRouter(PaymentSuccessDialog));