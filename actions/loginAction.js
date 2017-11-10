
export const loginSuccessfully=object=>{
console.log("i am running action loginSuccessfully");
return {
  type: "LOGIN_SUCCESSFULLY",
  object
}
}
