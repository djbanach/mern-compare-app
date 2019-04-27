import React, { Component } from 'react';

class CarCreate extends Component {

    constructor(props) {
        super(props);

        this.onChangeCarMake = this.onChangeCarMake.bind(this);
        this.onChangeCarModel = this.onChangeCarModel.bind(this);
        this.onChangeCarDescription = this.onChangeCarDescription.bind(this);
        this.onChangeCarMPG = this.onChangeCarMPG.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            car_make: '',
            car_model: '',
            car_description: '',
            car_mpg: '',
            selected: false
        };
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
        console.log(`Car Make: ${this.state.car_make}`);
        console.log(`Car Model: ${this.state.car_model}`);
        console.log(`Car Description: ${this.state.car_description}`);
        console.log(`Car MPG: ${this.state.car_mpg}`);

        this.setState({
            car_make: '',
            car_model: '',
            car_description: '',
            car_mpg: '',
            selected: false
        })

    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Make: </label>
                        <input type="text" className="form-control" value={this.state.car_make} onChange={this.onChangeCarMake} />
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input type="text" className="form-control" value={this.state.car_model} onChange={this.onChangeCarModel} />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.car_description} onChange={this.onChangeCarDescription} />
                    </div>
                    <div className="form-group">
                        <label>MPG: </label>
                        <input type="text" className="form-control" value={this.state.car_mpg} onChange={this.onChangeCarMPG} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Car" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}

export default CarCreate;