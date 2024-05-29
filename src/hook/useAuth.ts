import axios from "axios"

type Inputs = {
    email : string;
    password : string;

}


function useAuth() {


    // Register 
    

    // Login
    const loginUser = ({email, password} :Inputs) => {
        const url = 'https://hotels-api.academlo.tech/users/login'
         axios.post(url, {email, password} )
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userLoged", JSON.stringify(res.data.user))
            })
            .catch(erro => console.log(erro))
    }

    return {loginUser}

}
export default useAuth