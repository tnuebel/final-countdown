import React, { Component } from 'react';
import "./Faq.css"


class Faq extends Component {
    render() {
        return (
            <div>
                <h1 className = "whiteTxt">Frequently Asked Questions</h1>
               
               <p>How many pieces of luggage can I bring?</p>
               <p>A- Each passenger is allowed 1 checked bag (up to 50lbs)  and 1 carry on. Passengers can check extra bags for for minimal fee of $1500.00 per bag.</p>

                <p>Do I need to bring my own space suit?</p>
                <p>A- No, Final Countdown provides complimentary space suits.</p>

                <p>What do I do if I lost my ticket?</p>
                <p>A- contact info@Finalcountdown.com</p>

                <p>How do I write a complaint if im not happy with my experience?</p>
                <p>A- you don’t, please refer to Donald Trumps review.</p>

                <p>What do I do in the event of a crash?</p>
                <p>A-  Refer to Challenger Flight of ’86.</p>

            </div>

        )
    }
}

export default Faq; 