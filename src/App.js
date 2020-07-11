import React, {Component} from "react";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title/index";
import Table from "./components/Table";

import projectData from "./repos.json";

class App extends Component { 
  
  state = {
    projects: []
  };

  // Populate list with employees when component mounts
  componentDidMount(){
    this.setState({projects: projectData});
  }

  render() {

    console.log(projectData);

    return (
      <Wrapper>
        <Title title="Joel Cifford: Bootcamp Projects"/>
        <Table projects={this.state.projects}/>
      </Wrapper> 
    )
  }
};

export default App;
