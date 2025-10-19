export const Link =(to)=>{
  const handleClick=(e)=>{
    e.preventDefault();
  }
  return <a {...rest} href={to} onClick={handleClick} />
}