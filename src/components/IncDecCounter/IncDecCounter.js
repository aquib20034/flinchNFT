import React, {useState} from "react";

const IncDecCounter = React.forwardRef(( props,innerRef ) => {
    // console.log('maxQuantity----->',props.maxAllow)
  let [num, setNum]= useState(1);
  let incNum =()=>{
    if(num<props.maxAllow)
    setNum(Number(num)+1);
  };

  let decNum = () => {
     if(num > 1 )
     {
      setNum(num - 1);
     }
  }

 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <div className="fieldWrap">
        <div className="Quantity increaseQuantity">
            <button onClick={decNum} type="button" className="quantityButton">
                -
            </button>
        </div>
        <div className="quantityInput">
            <input type={'tel'} ref={innerRef} prediction="false" value={num} onChange={handleChange} />
        </div>
        <div className="Quantity decreaseQuantity">
            <button onClick={incNum} type="button" className="quantityButton">
                +
            </button>
        </div>
    </div>
   </>
)
});
export default IncDecCounter;