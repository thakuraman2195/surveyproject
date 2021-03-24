import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';


export default class Demo extends Component {
    constructor(props) {
        super(props);
        console.log("here");
    }
  
  sendContent = (data) => {
    let final = []
    for (i = 0; i < data.length; i++) {
        p = []
        for (var key in data[i]["ques_ans"]) {

            if (data[i]["ques_options"].hasOwnProperty(key)) {

                const entry = {}
                entry["option"] = data[i]["ques_options"][key]
                entry["answer"] = data[i]["ques_ans"][key]
                p.push(entry)
            }
        }
        final.push(p);
    }
    return final;
}

 rewrite = (obj) => {
    let finalVal = []
    for (key in obj) {
        let p = sendContent(obj[key])
        const entry = {}
        entry[key] = p
        finalVal.push(entry)
    }
    return finalVal;
}

  renderChart = (data) => {
    return (
        <Paper>
            <Chart
                data={chartData}
            >
                <ArgumentAxis />
                <ValueAxis max={7} />

                <BarSeries
                    valueField="population"
                    argumentField="year"
                />
                <Title text="World population" />
                <Animation />
            </Chart>
        </Paper>
    );
}





render() {

    const { data: chartData } = this.props;
    if (!chartData.hasOwnProperty("React"))
        return <></>
    const content = rewrite(chartData)
    const value = content.map((data, index) => (
        <div key={index}>
            {renderChart(data)}
        </div>
    ))

    console.log(this.props);
    return value;
}

}