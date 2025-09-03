import React, { useState, useEffect} from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"


function App () {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users =>{setRobots(users)})
    },[count])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        
    }

    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if(robots.lenght === 0) {
        return <h1>Loading</h1>
    } else {
    return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-r from-[rgb(101,115,242)] to-[rgb(58,207,190)] gap-4">
    <h1>RoboFriends</h1>
    <button onClick={()=>setCount(count+1)}>Click Me!</button>
    <SearchBox searchChange = {onSearchChange}/>
    <CardList robots={filteredRobots}/>
    
    </div>
    )
    }
}

export default App