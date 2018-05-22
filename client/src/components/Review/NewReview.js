import React, { Component } from 'react';

class NewReview extends Component {
    render() {
        return (

            <div className="col-sm-3">
                <div className="card">
                    <h2>{this.props.title}</h2>
                    
                    {this.props.image ? (<img src={this.props.image} alt="Space" />) : null  }
                     
                    <h3>{this.props.review}</h3>
                    <p className="title">{this.props.name}</p>
                </div>
            </div>


        )
    }
}

export default NewReview;
