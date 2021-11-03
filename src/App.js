import BirthdayCard from './components/BirthdayCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <BirthdayCard
      name = {"Doe, Jane"}
      age = {45}
      hair = {"Black"}>
      </BirthdayCard>
      <BirthdayCard
      name = {"Smith, John"}
      age = {88}
      hair = {"Brown"}>
      </BirthdayCard>
      <BirthdayCard
      name = {"Fillmore, Millard"}
      age = {50}
      hair = {"Brown"}>
      </BirthdayCard>
      <BirthdayCard
      name = {"Smith, Maria"}
      age = {62}
      hair = {"Brown"}>
      </BirthdayCard>
    </div>
  );
}

export default App;
