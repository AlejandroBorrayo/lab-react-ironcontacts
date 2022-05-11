import logo from './logo.svg';
import{useState} from "react"
import './App.css';
import contacts from "./contacts.json"


function App() {
let arr = contacts.splice(5,5)
const [actores, setActores]= useState(arr)
console.log(contacts)
const RandomContact = ()=>{
  console.log("hol")
  const Random = Math.floor(Math.random()*contacts.length)
  setActores([...actores,contacts[Random]])
  console.log(actores)
}

const SortPopularity =()=>{
  const actors = actores.sort((a,b)=>{
    return  b.popularity - a.popularity
  })
  setActores([...actors])
}
const SortName =()=>{
  const byNAme = actores.sort((a,b)=>{
     return a.name.localeCompare(b.name);
  })
  console.log(byNAme)
  setActores([...byNAme])
}
const Eliminar=(e)=>{
  const NuevosActores= actores.filter(actor=>{
    return actor.id !== e.target.value
  })
  setActores([...NuevosActores])
}

return (
    <div className="App">
      <div className='buttons'>
      <button onClick={RandomContact} >Add random Contacts</button>
      <button onClick={SortPopularity} >Sort by Popularit</button>
      <button onClick={SortName} >Sort by Name</button>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th><h1>Picture</h1></th>
            <th><h1>Name</h1></th>
            <th><h1>Popularity</h1></th>
            <th><h1>Won Oscar</h1></th>
            <th><h1>Won Emmy</h1></th>
            <th><h1>Actions</h1></th>
          </tr>
        </thead>
        <tbody>
          {actores.map(actor=>(
            <tr key={actor.id}>
              <td><img className="ImgActor" src={actor.pictureUrl} alt ="actor"/></td>
              <td><p>{actor.name}</p></td>
              <td><p>{actor.popularity}</p></td>
              {actor.wonOscar ? <td><p>🏆</p></td> : <td><p>{""}</p></td>  }
              {actor.wonEmmy ? <td><p>🏆</p></td> : <td><p>{""}</p></td>  }
              <td><button className='Eliminar' onClick={Eliminar} value={actor.id}>Eliminar</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
