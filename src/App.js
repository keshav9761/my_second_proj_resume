import './App.css';
import {useRoutes} from 'react-router-dom'
import {Resume} from './Resume'
import { Table } from './Table'
import {Login} from './Login'
import {Dashboard} from './Dashboard'
// import Model from './Model'
function App() {
  const route=useRoutes([
    {path:"/", element:<Login/>},
    // {path:"/model", element:< Model/>},
    {path:"/dash",element:<Dashboard/>,
    children:[
      {path:'resume',element:<Resume/>},
    {path:"resumelist",element:<Table/>},
  ]}
  
  ])
  return (
    <>
    <div className="App">
      {route}
    </div>
    </>
  );
}

export default App;
