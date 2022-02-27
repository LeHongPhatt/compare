import "./main.css";
import { useState } from "react";

export default function Main() {
const [txt1, settxt1] = useState('');
const [txt2, settxt2] = useState('');
const [arrtxt1, setarrtxt1] = useState([]);
const [arrtxt2, setarrtxt2] = useState([]);
const [arrdif, setarrdif] = useState([]);

const [isShow, setisShow] = useState(false);


// const string = '12345'
// const arr = string.split('')
// console.log('====arr====,',arr)

const getDiff=(text1,text2)=>{
  setarrdif([])
  let dif = []

  setisShow(true)
    let arr1 = text1.split('')
    let arr2 = text2.split('')
    if(arr1.length>0){
      console.log('===1==')
      for(let i = 0; i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
          dif = dif.concat({index:i})
        }
      }
    }
    else{
      console.log('===2==')
      for(let i = 0; i<arr2.length;i++){
        if(arr2[i] !== arr1[i]){
          dif = dif.concat({index:i})
        }
      }
    }
    if(dif.length >0){
      setarrdif(dif)
    }
    else{
      alert('khong khác')
    }


}

const background = (index)=>{
    try {
      const check = arrdif.some(item=>item.index == index)
        if( check ){
            return 'red'
        }
        else return 'white'
    } catch (error) {
        console.log('-=====lỗi====',error)
    }

}
const realError = console.error;
console.error = (...x) => {
  // debugger;
  if (x[0] === 'Warning: The tag <g> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.') {
    return;
  }
  
};

const styles = {
    border: '1px solid rgba(0, 0, 0, 1)', width:'50%',marginTop:10,margin:10,borderRadius:5
};
  return (
    <div style={{}}>

      <div className="logo_background">
        <div className="logo"> TEXT COMPARE !</div>
        {/* <span></span> */}
        <button className="btn">Edit</button>
        <button className="btn">Switch</button>
        <button onClick={()=>getDiff(txt1,txt2)} className="btn2">Compare</button>
        <button className="btn3">Clear</button>
      </div>

      <div style={{display:'flex'}}>
      <div style={styles}>
         {
             (arrtxt1.length>0 && isShow) ? arrtxt1.map((item,index)=>{
                 return(
                     <text style={{backgroundColor:background(index)}}>{item}</text>
                 )
             })
             :<div style={{height:20}}/>
         }
      </div>
      <div style={styles}>
      {
             (arrtxt2.length >0 && isShow) ? arrtxt2.map((item,index)=>{
                 return(
                     <text style={{backgroundColor:background(index)}}>{item}</text>
                 )
             })
             :<div style={{height:20}}/>
         }
      </div>
         
      </div>

      <div style={{marginTop:50 }}>
        <textarea onChange={(val)=>{ settxt1(val.target.value);setarrtxt1(val.target.value.split('')); setisShow(false) }} style={{ width: "50%",height:500}} className="text1"></textarea>
        <textarea onChange={(val)=>{ settxt2(val.target.value);setarrtxt2(val.target.value.split(''));setisShow(false)  }} style={{ width: "50%",height:500}} className="text2"></textarea>
      </div>

    </div>
    // <></>
  );
}
