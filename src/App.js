import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./components/root/Root"
import { Work } from './components/work/Work'
import { Cur } from './components/Cur/Cur';

import './App.css';


const router = 

createBrowserRouter( createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root/>}>
        <Route
          index
          element={< Work/>}
          />
        <Route
          path="/cur"
          element={< Cur/>}
          />
        <Route
          path="/:filter"
          element={< Work/>}
          />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
