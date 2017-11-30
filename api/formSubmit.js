
export default async function submitVotingForm(answer){

  try {
     let response = await fetch('https://df58c1a4.ngrok.io/api/votingformsubmit',{
       method:'POST',
       headers: {
        'Accept':"application/json",
     'Content-Type':"application/json"
  },
  body: JSON.stringify(answer)
});
     let responseJson = await response.json();
      console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
