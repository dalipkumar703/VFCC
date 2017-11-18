
export default async function uploadImage(image,email){
var params={
  email:email,
  image:image
};
var formData=new FormData();
for(var k in params)
{
  formData.append(k,params[k]);
}
  try {
     let response = await fetch('http://dedf90e5.ngrok.io/api/uploadImage',{
       method:'POST',
       headers: {
        'Accept':"application/json",
     'Content-Type':"multipart/form-data"
  },
  body: formData

     });
     let responseJson = await response.json();
      console.log("res:",responseJson);
     return responseJson;
   } catch(error) {
     console.error(error);
   }
}
