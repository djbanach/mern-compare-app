import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Compare from './Compare';

const Car = props => (
    <tr className={props.car.selected ? 'selected' : ''}>
        <td>{props.car.car_make}</td>
        <td>{props.car.car_model}</td>
        <td>
            <button className="btn btn-primary" name="compare" onClick={this.getSelectedCar()}>Compare</button>
        </td>
    </tr>
)

class CarList extends Component {

    constructor(props) {
        super(props);

        this.getSelectedCar = this.getSelectedCar.bind(this);

        this.state = {
            selectedCar: [],
            cars: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cars/')
        .then(res => {
            this.setState({ cars: res.data });
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // componentWillMount(e) {
    //     axios.get('http://localhost:4000/cars/'+this.state.cars._id)
    //     .then(res => {
    //         this.setState({
    //             selectedCar: res.data
    //         })
    //     })
    // }

    carList() {
        return this.state.cars.map(function(currentCar, i) {
            return <Car car={currentCar} key={i} />;
        })
    }

    getSelectedCar(e) {
        // const id = e.target.elements.compare.value;
        axios.get('http://localhost:4000/cars/'+this.state.cars._id)
        .then(res => {
            this.setState({
                selectedCar: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Car List</h2>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.carList() }
                    </tbody>
                </table>
                <div className="col-xs-4">
                    <Compare car={this.selectedCar} />
                </div>
            </div>
        );
    }
}

export default CarList;