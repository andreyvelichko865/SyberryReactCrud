import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Start from './components/start';
import Students from './components/students';
import UniversityDepartment from './components/university_department';
import Groups from './components/groups';
import Rating from './components/rating';
import Subjects from './components/subjects';
import Activity from './components/activity';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path ="/" component={Start}/>
          <Route path="/Students" component={Students}/>
          <Route path="/Activity" component={Activity}/>
          <Route path="/Subjects" component={Subjects}/>
          <Route path="/Rating" component={Rating}/>
          <Route path="/Groups" component={Groups}/>
          <Route path="/UniversityDepartment" component={UniversityDepartment}/>
      </Switch>
    </div>
  );
}

export default App;
