export const  onTextAreaInputed = (e) => {
  const text = e.target.value
  return{
    type: "INPUT_TEXT" ,
    text
  }
};
