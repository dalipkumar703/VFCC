
export const loginSuccessfully=object=>{
console.log("i am running action loginSuccessfully");
return {
  type: "LOGIN_SUCCESSFULLY",
  object
}
}
export const aadharUploaded=string =>{
   console.log("aadhar uploaded !!");
  return {
    type: "AADHAR_UPLOADED",
    string
  }
}
export const savePincode=string=> {
  console.log("save pincode");
  return {
    type: "SAVE_PINCODE",
    string
  }
}
