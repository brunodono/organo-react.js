import { useState } from 'react';
import Banner from './component/Banner/';
import Footnote from './component/Footnote';
import Form from './component/Form';
import Teams from './component/Teams';

function App() {

  const teams = [
    {
      nome:'Programacao',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:'Inovacao e Gestao',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ];

  const [collabs, setCollabs] = useState([])

  const whenNewCollabAdded = (collab) => {
    setCollabs([...collabs, collab])
  }


  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.nome)} onCollabRegistered={collab => whenNewCollabAdded(collab)} />
      {teams.map(team => 
      <Teams key={team.nome} 
      name={team.nome} 
      boxColor={team.corPrimaria} 
      backgroundColor={team.corSecundaria} 
      collabs={collabs.filter(collab => collab.times === team.nome )}
      />)}
      <Footnote />
    </div>
  );
}

export default App;
