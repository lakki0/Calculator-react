function Calculator(){
  const [display,setDisplay] = React.useState({current:"0",total:"0",isInitial:true,preOp:""});
  function handleNumber(value){
    let newVal = value;
    if(!display.isInitial){
    newVal = display.current + value;
    }
    setDisplay({current:newVal,total:display.total,isInitial:false,preOp:display.preOp});
  }
  function handleOperator(value){
    const total = doCal();
    setDisplay({current:total.toString(),total:total.toString(),isInitial:true,preOp:value});
  }
  function doCal(){
    let total = parseInt(display.total);
    switch(display.preOp){
        case "+": total += parseInt(display.current);
        break;
        case "-": total -= parseInt(display.current);
        break;
        case "*": total *= parseInt(display.current);
        break;
        case "/": total /= parseInt(display.current);
        break;
      default:
        total = parseInt(display.current);
    }
    return total;
  }
  function handleClear(){
    setDisplay({current:"0",total:"0",isInitial:true,preOp:""})
  }
  return (
    <div className="inner-container">
      <div className="output-container">{display.current}</div>
      <CalButtons value="7" onClick={handleNumber}/>
      <CalButtons value="8" onClick={handleNumber}/>
      <CalButtons value="9" onClick={handleNumber}/>
      <CalButtons className="operators" onClick={handleOperator} value="/"/>
      
      <CalButtons value="4" onClick={handleNumber}/>
      <CalButtons value="5" onClick={handleNumber}/>
      <CalButtons value="6" onClick={handleNumber}/>
      <CalButtons className="operators" onClick={handleOperator} value="*"/>
      
      <CalButtons value="1" onClick={handleNumber}/>
      <CalButtons value="2" onClick={handleNumber}/>
      <CalButtons value="3" onClick={handleNumber}/>
      <CalButtons className="operators" onClick={handleOperator} value="-"/>
      
      <CalButtons className="operators" onClick={handleClear} value="C"/>
      <CalButtons value="0" onClick={handleNumber}/>
      <CalButtons className="operators" onClick={handleOperator} value="="/>
      <CalButtons className="operators" onClick={handleOperator} value="+"/>
    </div>
  )
 }

function CalButtons(props){
  return <button className={props.className} onClick={()=>props.onClick(props.value)}>{props.value}</button>
}
ReactDOM.render(<Calculator className="app-container"/>,document.getElementById("root"));
