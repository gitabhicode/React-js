import Login from "./components.jsx/login"
import './App.css'
import Profile from "./components.jsx/profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {


  return (
    <>
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>

    </>
  )
}

export default App
