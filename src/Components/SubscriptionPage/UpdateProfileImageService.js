import { instance, headers } from "../ApiFetch";

let key = JSON.parse(localStorage.getItem("userInfo")) || [];
const token = "Bearer " + key[0];
headers["Authorization"] = token;

function addProfileImage(profileImage) {
  const formData = new FormData();
  formData.append('profileImage', profileImage);

  const suffix = 'user/updateProfileImage';

  return instance.patch(suffix,formData,{
    headers
  });
}

export { addProfileImage };






// console.log("pro2",profileImage);
  // addProfileImage(profileImage).then(response=> {
  //   console.log("repo",response)
  // })
  // .catch(err=>{
  //   console.log("error",err)
  // })