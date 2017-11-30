const pincode=(state=null,action)=>{
  switch(action.type)
  {
    case "SAVE_PINCODE":
    console.log("login successfully reducer is running",action);
    return action.string
    default :
    return state
  }
}
export default pincode
