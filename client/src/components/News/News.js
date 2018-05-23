import React, { component } from 'react';
import News from "news";


class News extends React.Component {
    state = {
        response: ""
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({
                response: res.express
            }))
            .catch(err => console.log(err));

    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div className="App">
       
            </div>
        );
    }








}


export default News;  