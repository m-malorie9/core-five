import React, { Component } from 'react';

class BirthdayCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    render() {
        let changeAge = ()=> {
            this.setState({age: this.state.age + 1})
        }
        return (
            <>
                <div>
                    <h1> {this.props.name} </h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hair}</p>
                    <button onClick = {changeAge}>
                        Birthday Button for {this.props.name}</button>
                    <hr/>
                </div>
            </>
        );
    }
}
    
export default BirthdayCard;