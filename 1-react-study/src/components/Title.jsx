import React from 'react';

/* 뒤로가기 버튼을 넣는 방법 2가지
  1. Title이 뒤로가기 주소를 인자로 받는 방법 : 뒤로가기 버튼을 네더하고 주소로 이동시키는 역할을 함
  2. Title에서 뒤로가기를 분리하는 방법. 외부에서 뒤로가기 앨리먼트를 주입하면 단순히 렌더 역할만 하는 것.
*/
// 2번 방식
const Title = ({backUrl, children}) => {
  if(backUrl) {
    return <>
      <a href={backUrl}/>
      <h1 style={{paddingRight:"44px"}}>{children}</h1>
    </>
  }
  return (
    <h1>{children}</h1>
  )
}
export default Title;
