import './App.css'
import Card from './components/Card'

function App() {
  /*
    let myObj ={
    name:"shivam",
    age:20
  }
  let myArr=[1,2,3]
  */
  return (
    <>
      {/* <Card newObj={myObj} newArr={myArr}/> */}
      <Card username={"Shivam"} btnText={"Visit me"}/>
    </>
  )
}

export default App
