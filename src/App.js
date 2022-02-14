import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LessonManagement from "./components/LessonManagement";
import Groups from "./components/Groups";
import AddGroup from "./components/AddGroup";
// custom materialui components
import StudentsMUI from './components/StudentsMUI';
import AddStudentMUI from './components/AddStudentMUI';

function App() {
  return (
    <Router>
      <Switch>

        <Route path= "/students">
          <StudentsMUI />
        </Route>

        <Route path="/groups">
          <Groups />
        </Route>

        <Route path="/add_student">
          <AddStudentMUI />
        </Route>

        <Route path="/add_group">
          <AddGroup />
        </Route>

        <Route path="/">
          <LessonManagement />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
