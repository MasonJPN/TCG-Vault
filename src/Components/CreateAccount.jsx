import {useState} from "react"


export default function CreateAccount(){


const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


function handleSubmit(e){
e.preventDefault();

if (!email || !password) return ;

alert("Account was created !")
}



    return(
       <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Create Your Account</h2>
                    <button className="google">Google</button>
                    <button className="apple">Apple</button>
                        <p>or</p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={((e) => {setEmail(e.target.value)})}
                     />
                     
                     <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={((e) => {setPassword(e.target.value)})}
                     />

                     <button type="submit">
                       Create Account
                     </button>


            </form>
       </div>
    )
}