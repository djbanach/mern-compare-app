import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Car = props => (
    <tr>
        <td>{props.car.car_make}</td>
        <td>{props.car.car_model}</td>
        <td>
            <Link to={"/cars/"+props.car._id}>Compare</Link>
        </td>
    </tr>
)

class CarList extends Component {

    constructor(props) {
        super(props);

        this.state = {cars: []};
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

    carList() {
        return this.state.cars.map(function(currentCar, i) {
            return <Car car={currentCar} key={i} />;
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
            </div>
        );
    }
}

export default CarList;