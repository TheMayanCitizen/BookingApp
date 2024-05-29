import axios from "axios"

type Inputs = {
    email : string;
    password : string;
    firstName?: string;
    lastName?: string;
    option?: 'unknown' | 'male' | 'female' | 'other';
}


function useAuth() {
    // Register 
    const createUser = (data:Inputs)=>{
        const url = 'https://hotels-api.academlo.tech/users';
        console.log(data)
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

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

    return {loginUser, createUser}

}
export default useAuth