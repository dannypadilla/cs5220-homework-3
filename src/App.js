import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LessonManagement from "./components/LessonManagement";
import Groups from "./components/Groups";
import AddStudent from "./components/AddStudent";
import AddGroup from "./components/AddGroup";
import StudentsMUI from './components/StudentsMUI';

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
          <AddStudent />
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
