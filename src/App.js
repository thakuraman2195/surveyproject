import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import BarChart from './BarChart';

class App extends Component {
  state = {
    surveydata: []
  }
  componentDidMount() {
    fetch('http://localhost:5000/surveydata',{
      method:"GET"
    })
    .then(res => res.json())
    .then((data) => {
      // this.setState({ surveydata: data })
      console.log(data);
      this.setState({surveydata:data})

    })
    .catch(console.log)
  }
  // [...]
  render() {

    return (
       <div>
       <div style={{maxWidth:"100px",margin:"auto"}}>
         <PieChart
       data={[
         { title: 'One', value: 10, color: '#E38627' },
         { title: 'Two', value: 15, color: '#C13C37' },
         { title: 'Three', value: 20, color: '#6A2135' },
       ]}
     />
     </div>
     <BarChart data={this.state.surveydata}/>
     </div>
    );
  }
}

export default App;