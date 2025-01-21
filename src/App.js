import { useState } from 'react';
import './App.scss';
import PaginateButtons from './components/PaginateButtons/PaginateButtons';
import Page from './components/page/page';
import { veggiePages } from './data/veggieData';
// import { veggiePages } from '../data/veggieData';

function App() {
  const [currPage, setCurrPage] = useState(0);

  return (
    <div className="App">
    {/* <h1 className="text-blue-600">
      Hello world!
    </h1> */}
    <main className={`App ${veggiePages[currPage].color} p-8 flex flex-row justify-between items-center transition-colors duration-500`}>
      <Page currPage={currPage} />
      <PaginateButtons currPage={currPage} setCurrPage={setCurrPage} />
    </main>
    </div>
  );
}

export default App;
