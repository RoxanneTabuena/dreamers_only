import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./components/root/Root"
import { Table } from './components/Table/Table'
import { Cur } from './components/Cur/Cur';

// feature
import { useReducer } from "react";
import { FeatureContext } from './context/FeatureContext';
import { featureReducer, initialFeatureState } from "./reducers/featureReducer";

import './App.css';


function App() {
  const router = 

  createBrowserRouter( createRoutesFromElements(
    <Route 
      path="/" 
      element={<Root/>}>
          <Route
            index
            element={< Table/>}
            />
          <Route
            path="/cur"
            element={< Cur/>}
            />
          <Route
            path="/:filter"
            element={< Table/>}
            />
    </Route>
  ))

  const [ featureState, featureDispatch ] = useReducer( featureReducer, initialFeatureState)

  return (
            <FeatureContext.Provider value={[featureState, featureDispatch]}>
              <RouterProvider router={router}/>
            </FeatureContext.Provider>
  );
}

export default App;
