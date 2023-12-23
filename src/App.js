import { useState } from 'react';
import './App.css';
import AppRouter from './components/router/AppRouter';
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {

  const [user, setUser] = useState({})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;
    // ...
    console.log(user)
    setUser(user)
  } else {
    // User is signed out
    // ...
  }
});
  return (
    <div className="App">
      <AppRouter user={user}/>
    </div>
  );
}

export default App;
