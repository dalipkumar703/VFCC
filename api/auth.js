

export default async function signUp(name,email,password){
  try {
     let response = await fetch('https://df58c1a4.ngrok.io/api/userSubmit',{
       method:'POST',
       headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name:name,
    email: email,
    password: password
  })

     });
     let responseJson = await response.json();
      console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
