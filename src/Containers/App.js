import React,{Component} from "react";
import Cardlist from "../Components/Cardlist";
import Scroll from "../Components/Scroll";
import SearchBox from "../Components/SearchBox";
import 'tachyons' ;
import './App.css';


class App extends Component {
    constructor(){
            super()
            this.state = {
                robots: [],
                searchfield: '' 
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({robots:users}));
    }
    onSearchChange = (event) => {
        this.setState ({ searchfield: event.target.value})
        
        }
        
    
    render(){
        const {robots, searchfield} = this.state; 
        const filteredRobots = robots.filter(robots =>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    return(
    <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchchange = {this.onSearchChange}/>
        <Scroll>
            <Cardlist robots = {filteredRobots}/>
        </Scroll>
    </div>
    );
    }
}

export default App;