import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Users from './components/Users/Users';
import Main from './Layout/Main';
function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
     children: [
      {path: '/', element: <Home></Home>},
      {path: '/about', element: <About></About>},
      {path: '/users',
      loader:async () =>{
       return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element: <Users></Users>}

      ]
    },
    {path: '*', element: <h3>This route not found</h3>}
    
    

    ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


