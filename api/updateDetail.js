
export default async function uploadImage(image,email){

  var data = new FormData();
data.append('email', email); // you can append anyone.
data.append('name',"gallery");
data.append('photo', {
  uri: image,
  type: 'image/jpeg', // or photo.type
  name: email+'.jpg'
});
console.log("data:",data);
  try {
     let response = await fetch('https://df58c1a4.ngrok.io/api/uploadImage',{
       method:'POST',
       headers: {
        'Accept':"application/json",
     'Content-Type':"multipart/form-data"
  },
  body: data
});
     let responseJson = await response.json();
      console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
