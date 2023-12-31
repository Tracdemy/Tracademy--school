import './App.css';
import AppRouter from './components/router/AppRouter';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <AppRouter />
    </div>
  );
}

export default App;
