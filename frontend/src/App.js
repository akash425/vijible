import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState } from 'react';
import CollegeDashboard from './modules/college/pages/CollegeDashboard';
import Header from './common/components/header/Header';
import Sidebar from './common/components/sidebar/Sidebar';
import SavedItems from './common/components/SavedItems/SavedItems';
import Feed from './common/components/Feed/Feed';
import SignUp from './common/components/SignUp/SignUp';
import ErrorPage from './common/components/ErrorPage';
import './App.css'

function App() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }

  // return (
  //   <Router>
  //     {/* <Navbar /> */}
  //     <h1>VISIBLE</h1>
  //     <button> 
  //       <Link to="/college/dashboard">Go to College Dashboard</Link> 
  //     </button>
  //     <Routes>
  //       <Route path="/college/dashboard" element={<CollegeDashboard />} />
  //     </Routes>
  //   </Router>
  // );


  const router = createBrowserRouter([
    {
      path: '/signup',
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    // Add more routes here as needed
  ]);
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router} />

      <div className="app-body">
        <Sidebar />
        <Feed />
        <SavedItems />
        {/* <SignUp /> */}
      </div>
      {/* <Router>
        <Routes>
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </Router> */}
    </div>
  );

}

export default App;
