import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CollegeDashboard from './modules/college/pages/CollegeDashboard';
// import StudentDashboard from './modules/student/pages/StudentDashboard';
// import ExpertDashboard from './modules/expert/pages/ExpertDashboard';
// import CompanyDashboard from './modules/company/pages/CompanyDashboard';
// import Navbar from './common/components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <h1>APP Home</h1>
      <button> 
        <Link to="/college/dashboard">Go to College Dashboard</Link> 
      </button>
      <Routes>
        <Route path="/college/dashboard" element={<CollegeDashboard />} />
        {/* <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/expert/dashboard" element={<ExpertDashboard />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
