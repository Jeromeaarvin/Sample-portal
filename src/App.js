import './App.css';
import DashboardPage from './Dashboard/DashboardPage';
import { BrowserRouter as Router, Route ,Routes, BrowserRouter} from 'react-router-dom';
import ManageApllicationPage from './ManageApllication/ManageApllicationPage';
import ManageStudentsPage from './ManageStudents/ManageStudentsPage';
import SearchProgramPage from './SearchProgram/SearchProgramPage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<DashboardPage/>} />
      <Route path="/ManageApllicationPage" element={<ManageApllicationPage/>} />
      <Route path="/ManageStudentsPage" element={<ManageStudentsPage/>} />
      <Route path="/SearchProgramPage" element={<SearchProgramPage/>} />
      
      </Routes>
      <ManageStudentsPage></ManageStudentsPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
