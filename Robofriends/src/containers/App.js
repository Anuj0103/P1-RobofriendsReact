import React, {useState,useEffect} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users)
      })
    console.log(count);
  },[count])//run only when count changes

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  console.log(robots, searchfield);
  if (!robots.length) {
   return <h1>Loading</h1>
  } else {
    return (<div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      {/* <button onClick={()=>setCount(count+1)} >Click ME!</button> */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
    )}
}
    export default App