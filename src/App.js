import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [userList,setUserList] = useState([])

  const getUserdata = async () => {
    const userdata = await axios.get("http://localhost:31001/api/user");
    setUserList(userdata.data.data);
  };
  useEffect(() => {
    console.log(userList);
  }, [userList]);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => getUserdata()}>유저 데이터 받아오기</button>
        {userList && userList.map((item) => {
          return <div>{item._id}</div>;
        })}
      </header>
    </div>
  );
}

export default App;

