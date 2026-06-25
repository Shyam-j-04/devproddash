export function useAuth(email:string,password:string){
   
    if(email === "user@gmail.com" && password ==="user@123"){
        return true;
    }

    return false;
}