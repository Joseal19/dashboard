import './App.css';
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCfKeruZPDMTp7oVSgOU5ZqO5rgjpoqHL4",
  authDomain: "dashboard-5872b.firebaseapp.com",
  projectId: "dashboard-5872b",
  storageBucket: "dashboard-5872b.appspot.com",
  messagingSenderId: "809274088054",
  appId: "1:809274088054:web:d873b5dc4db7b126289d57",
  measurementId: "G-WTJWV0G9GH"
};

const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className='w-full h-full bg-[#1f2937]'>
      <main className="max-w-container m-auto">
        <header className="App-header">
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </header>
      </main>
    </div>
  );
}

export default App;
