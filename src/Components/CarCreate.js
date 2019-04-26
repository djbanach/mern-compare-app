import React, { Component } from 'react';

class CarCreate extends Component {

    state = {
        car_make: '',
        car_model: '',
        car_description: '',
        car_mpg: '',
        compared: false
    }

    onChangeCarMake(e) {
        this.setState({
            car_make: e.target.value
        });
    }

    onChangeCarModel(e) {
        this.setState({
            car_model: e.target.value
        });
    }

    onChangeCarDescription(e) {
        this.setState({
            car_description: e.target.value
        });
    }

    onChangeCarMPG(e) {
        this.setState({
            car_mpg: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Responsible: ${this.state.car_make}`);
        console.log(`Todo Responsible: ${this.state.car_model}`);
        console.log(`Todo Description: ${this.state.car_description}`);
        console.log(`Todo Responsible: ${this.state.car_mpg}`);

        this.setState({
            car_make: '',
            car_model: '',
            car_description: '',
            car_mpg: '',
            compared: false
        })

    }

    render() {
        return (
            <div>
                <p>Welcome to the Car Create Component</p>
            </div>
        );
    }
}

export default CarCreate;