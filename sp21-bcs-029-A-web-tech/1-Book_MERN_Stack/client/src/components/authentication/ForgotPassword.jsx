import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [email,setEmail] = useState()
    const [resetLink,setResetLink] = useState()
    const navigate = useNavigate()

    const handleForgotPassword = async (e) => {
        e.preventDefault()
        if (!email) {
          alert('Please enter your email address');
          return;
        }
        try {
          const response = await axios.post('http://localhost:5000/user/forgot-password', {
            email: email 
          });
          console.log('Password reset request successful', response.data.link);
          await navigate('/updatePassword', {state : { resetLink: response.data.link}});
        } catch (error) {
          console.error('Error sending reset request:', error);
        }
      };

  return (
    <div className="container mx-auto mt-20">
        {/* <Navbar/> */}
        <div className="max-w-md mx-auto rounded p-8 shadow-lg"  style={{background:"#ece9e9"}}>
            <h2 className="text-2xl font-bold mb-4" style={{color:"#333333"}}>reset password</h2>
            <form id="loginForm" className="space-y-4" onSubmit={handleForgotPassword}>
                <div>
                    <label for="email" className="block mb-1" style={{color:"#333333"}}>Email:</label>
                    <input  style={{background:"#F0EEEE"}} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded"
                    onChange={(E)=>setEmail(E.target.value)}/>
                </div>
                <button type="submit" className="block w-full bg-blue-500 text-white py-2 rounded">send email</button>
            </form>
        </div>
    </div>
  )
}
