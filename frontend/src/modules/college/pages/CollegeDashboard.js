import React from 'react';
import Profile from '../components/Profile'; 
import Analytics from '../components/Analytics'; 
import Upload from '../components/Upload';
import Sidebar from '../../../common/components/sidebar/Sidebar';

const CollegeDashboard = () => {
  return (
    <div>
      <h1>College Dashboard</h1>
      <Profile /> 
      <Analytics /> 
      <Upload />
      <Sidebar></Sidebar>
      {/* Add other components like Profile, Analytics, and Upload here */}
    </div>
  );
}

export default CollegeDashboard;
