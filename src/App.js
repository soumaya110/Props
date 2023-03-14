
import './App.css';
import FullName from './Profile/FullName';
import Bio from './Profile/Bio';
import Profession from './Profile/Profession';

function App() {
  return (

    <div >
      <FullName name ="Soumaya" lastName="Jebali" age="32 years old"/>
      <Profession profession="I am currently a student" 
      study=" I'am graduated from Iset'Com"/>
      <Bio interests="My Interests are"/>
    </div>
  );
}

export default App;
