import React, { Component } from 'react';
import "./Faq.css"


class Faq extends Component {
    render() {
        return (
            <div>
                <h1 className = "whiteTxt">Frequently Asked Questions</h1>
               
               <p>Q: How many pieces of luggage can I bring?</p>
               <p>A: Each passenger is allowed 1 checked bag (up to 50lbs)  and 1 carry on. Passengers can check extra bags for for minimal fee of $1500.00 per bag.</p>
                <br />

                <p>Q: Do I need to bring my own space suit?</p>
                <p>A: No, Final Countdown provides complimentary space suits.</p>
                <br />

                <p>Q: What do I do if I lost my ticket?</p>
                <p>A: Please contact info@Finalcountdown.com</p>
                <br />

                <p>Q: How do I write a complaint if im not happy with my experience?</p>
                <p>A: You don’t. Please refer to Donald Trumps review.</p>
                <br />

                <p>What do I do in the event of a crash?</p>
                <p>A- Brace, pray.. might get a middle school named after you.</p>

            </div>

        )
    }
}

export default Faq; 