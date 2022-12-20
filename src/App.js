import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () =>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("success","dark mode has been enabled");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success","light mode has been enabled");
    }
  }
  const showAlert = (type,msg) =>{
    setAlert({
      type: type,
      msg: msg
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    </>
  );
}

export default App;
