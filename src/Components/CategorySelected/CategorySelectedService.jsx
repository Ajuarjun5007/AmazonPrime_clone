import { instance } from "../ApiFetch";

// queryParams--> anything after ? is query params


function getDetailsByTypeOrCategory (key,value) {
    const suffix=`ott/show?filter={"`+key+`":"`+value.toLowerCase()+`"}`
   return instance.get(
        suffix, 
      );
  };
  
function getDetailsByTypeOrCategories (key,value) {
  const suffix=`ott/show?filter={"${key}":[${value.map((keyword)=>`"`+keyword.toLowerCase()+'"')}]}`
   return instance.get(
        suffix, 
      );
  };
  export {getDetailsByTypeOrCategory,getDetailsByTypeOrCategories};