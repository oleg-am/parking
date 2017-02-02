import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Count from 'components/Count';

import * as actions from './actions';
import selectors from './selectors';
import './style.css';


const {
  shape,
  // objectOf,
  // oneOfType,
  number,
  string,
  func
} = PropTypes;

class Parking extends Component {
  static propTypes = {
    routeParams: shape({
      numberOfPlaces: string,
    }),
    numberOfPlaces: number,
    trucks: number,
    disableds: number,
    sedans: number,
    createParking: func,
    changeNumberOfParkingPlaces: func,
    changeNumberOfCars: func,
  }

  constructor(props) {
    super();
    console.log({ props });
  }

  componentWillMount() {
    const { routeParams: { numberOfPlaces }, createParking } = this.props;
    console.log({ numberOfPlaces });
    createParking(+numberOfPlaces);
  }

  changeNumberOfParkingPlaces = (e) => {
    this.props.changeNumberOfParkingPlaces(+e.target.value);
  }

  changeNumberOfCars = carType => (e) => {
    this.props.changeNumberOfCars({ [carType]: +e.target.value });
  }


  render() {
    const {
      numberOfPlaces,
      trucks,
      disableds,
      sedans,
    } = this.props;

    return (
      <div>
        <h2> Count: </h2>
        <Count
          title="Parking places"
          id="numberOfPlaces places"
          value={numberOfPlaces}
          onChange={this.changeNumberOfParkingPlaces}
        />
        <div>
          <label htmlFor="calculate">Automatically calculate</label>
          <input type="checkbox" id="calculate" />
        </div>
        <Count
          title="Trucks"
          id="numberOfTrucks"
          value={trucks}
          onChange={this.changeNumberOfCars('trucks')}
        />
        <Count
          title="Disableds"
          id="numberOfDisableds"
          value={disableds}
          onChange={this.changeNumberOfCars('disableds')}
        />
        <Count
          title="Sedans"
          id="numberOfSedans"
          value={sedans}
          onChange={this.changeNumberOfCars('sedans')}
        />

        <table className="table-bordered table table-calendar unselectable">
          <tbody>
            <tr>
              <td>Track</td>
              <td>Track</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(selectors, actions)(Parking);
