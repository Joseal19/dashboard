import './App.css';
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from 'react-router-dom';


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
