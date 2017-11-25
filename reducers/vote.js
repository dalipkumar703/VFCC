const vote=(state=false,action)=>{
  switch(action.type)
  {
    case "AADHAR_UPLOADED":
    console.log("login successfully reducer is running",action);
    return action.string
    default :
    return state
  }
}
export default vote
