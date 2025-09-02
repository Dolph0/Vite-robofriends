import React, {Component} from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users=> {this.setState({robots: users})})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.lenght === 0) {
            return <h1>Loading</h1>
        } else {
        return (
        <div className="flex justify-center items-center flex-col bg-gradient-to-r from-[rgb(101,115,242)] to-[rgb(58,207,190)] gap-4">
        <h1>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
        
        </div>
    )
    }
}
}
export default App