const login=(state=[],action)=>{
  switch(action.type)
  {
    case "LOGIN_SUCCESSFULLY":
    console.log("login successfully reducer is running",action);
    return [
      ...state,
      {
        name: action.object.name,
        email: action.object.email
      }
    ]
    default :
    return state
  }
}
export default login
