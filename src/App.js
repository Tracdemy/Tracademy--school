import { useState } from 'react';
import './App.css';
import AppRouter from './components/router/AppRouter';
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {

  const [user, setUser] = useState({})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    setUser(user)
  } else {
  }
});
  return (
    <div className="App">
      <AppRouter user={user}/>
    </div>
  );
}

export default App;