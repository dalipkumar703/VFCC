export async function getForm(pincode){
  try {
     let response = await fetch('https://df58c1a4.ngrok.io/api/votingformdetail/'+pincode,{
       method:'GET'
     });
     let responseJson = await response.json();
      //console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
export async function getVotingResult(pincode){
  try {
     let response = await fetch('https://df58c1a4.ngrok.io/api/get-voting-result/'+pincode,{
       method:'GET'
     });
     let responseJson = await response.json();
      //console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
