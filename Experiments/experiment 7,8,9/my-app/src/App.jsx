import './App.css';
import Student from './Lab/Experiment 7/Student';
import Count from './Lab/Experiment 8/Count';
import RegistrationForm from './Lab/Experiment 9/RegistrationForm';

function App() { 

  return (
    <>
      {/* <Student/> */}
       <div className="app">
      <h1>Student Details</h1>
      <div className="student-list">
        <Student name="Faraz Farooqui" course="B.Tech AIML" marks={85} />
        <Student name="Bipul Patel" course="B.Tech AIML" marks={90} />
        <Student name="Aman Shukla" course="B.Tech AIML" marks={97} />
      </div>
    </div>
     {/* <Count/> */}
<RegistrationForm/>    
    </>
  );
}

export default App;