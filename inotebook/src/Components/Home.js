import Addnote from './Addnote'
import Notes from './Notes'

const Home = (props) => {
 const {showAlert} = props;
  return (
    <div>
      <Addnote />
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home
