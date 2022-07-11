import Collab from '../Collab';
import './Teams.css';

const Teams = (props) => {

  const css = { backgroundColor: props.backgroundColor }

  return (
    (props.collabs.length > 0) ? <section className='team' style={css}>
      <h3 style={{ borderColor: props.boxColor }}>{props.name}</h3>
      <div className='collabbox'>
        {props.collabs.map(collab => <Collab cardColor={props.boxColor} key={collab.nome} name={collab.nome} position={collab.cargo} img={collab.imagem} />)}
      </div>
    </section>
    : ''
  )
}

export default Teams