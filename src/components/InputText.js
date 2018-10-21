import React from 'react'

const style ={
  InputText:{
    height:150 ,
    width:"auto" ,
    resize:"none" ,
    fontSize:30
  }
}

const InputText = ( {onKeyUp} ) => (
  <textarea  onKeyUp={ onKeyUp } style={ style.InputText}></textarea>
);

export default InputText ;
