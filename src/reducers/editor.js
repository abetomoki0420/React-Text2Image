const initialAppState = {
  inputText: [] ,
};

const editor = ( state = initialAppState , action ) => {
  if( action.type === "INPUT_TEXT"){
    const text = action.text.split('\n')
    return{
      inputText: text
    };
  }else{
    return state ;
  }
};

export default editor ;
