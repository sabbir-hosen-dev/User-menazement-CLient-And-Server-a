import { useEffect, useState } from "react";
import Form from "./Form"
import Users from "./Users"


function App() {
  const [users, setUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);




  return (
    <div className="center">
        <Form users={users} setUser={setUser} />
        <Users users={users}   />

    </div>
  )
}

export default App
