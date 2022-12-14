import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [login, setLogin] = React.useState([])

  const nav = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const fetchLoginData = await axios.post('http://localhost:8000/resumelogin', login)
    console.log(fetchLoginData)
    if (fetchLoginData.data.msg ==="login successful") {
      nav('/dash')
    }
    alert("success", fetchLoginData.data.msg)
  }


  const handleLogin = (e) => {
    setLogin((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    console.log(e.target.value)
  }
  return (
    <>
      <div>
        <form>
          <b><u>Login</u></b>
          <div>
            <input type="text" placeholder='username'
              name="username"
              value={login.username}
              onChange={handleLogin}
            /><br />
            <input type="text" placeholder='password'
              name="password"
              value={login.password}
              onChange={handleLogin}
            /><br />
            <button onClick={loginSubmit}>Login</button>
          </div>
        </form>

      </div>
    </>
  )
}
