import React, { Component } from 'react';
import newReviews from "./newReviews.json";
import NewReview from "./NewReview.js";
import './Review.css';
class Review extends Component {
    constructor() {
        super()
        this.state = {
            reviews: newReviews,
            title: "",
            name: "",
            review: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.addReview = this.addReview.bind(this);
    }

    addReview(e) {
        e.preventDefault()


        console.log(this.state)
        var reviews = this.state.reviews;

        //push code into reviews array//
               reviews.push({
                title: this.state.title,
                name: this.state.name, 
                review: this.state.review
       
        });

        

        this.setState({
            reviews: reviews
        })
    }

    handleChange(e) {
        this.setState(
          {
            [e.target.name]: e.target.value
          }
        )
      }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">

                        {this.state.reviews.map((item) =>
                            <NewReview

                                title={item.title}
                                image={item.image}
                                review={item.review}
                                name={item.name} />
                        )}
                        
                        <form className="addReview" onSubmit={this.addReview}>

                            <div className="form-group">
                                <input className="form-control"
                                    placeholder="enter title:"
                                    name="title"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control"
                                    placeholder="Add a review:"
                                    name="review"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control"
                                    placeholder="name"
                                    name="name"
                                    onChange={this.handleChange} />
                            </div>
                          
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        )
    }
}


export default Review;



