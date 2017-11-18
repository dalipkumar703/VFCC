
export default async function uploadImage(image,email){

  const data = new FormData();
data.append('name', 'testName'); // you can append anyone.
data.append('photo', {
  uri: image,
  type: 'image/jpeg', // or photo.type
  name: 'testPhotoName'
});
  try {
     let response = await fetch('https://dedf90e5.ngrok.io/api/uploadImage',{
       method:'POST',
       headers: {
         'Accept':'application/json',
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
