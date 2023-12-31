import logo from './logo.svg';
import './App.css';
// import Cars from './Cars';
// import Complifecycle from './comp-life-cycle-demo';
// import Garage from './Props/props-demo';
// import Footbal from './Events/events-demo';
import GoalConditionals from './Conditionals/condi-if-ternary-demo';
import FootballTeams from './Conditionals/logincal-operator-demo';

function App() {
  const teams = ['TeamA', 'TeamB', 'TeamC'];
  const noTeams = [];
  return (
    <div>
      <h4> Demo for conditional renders ! </h4>
      <h3> <GoalConditionals isGoal={true} /> </h3>

      <h2> <FootballTeams footBallTeams={teams} /> </h2>

    </div>
  );
}



export default App;
