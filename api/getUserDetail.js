

export default async function checkAadharSubmit(email){
  try {
     let response = await fetch('https://df58c1a4.ngrok.io/api/aadhar-check/'+email,{
       method:'GET'

     });
     let responseJson = await response.json();
      //console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
