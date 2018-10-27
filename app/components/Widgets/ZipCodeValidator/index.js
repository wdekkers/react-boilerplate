import React from 'react';

// Putting this inside a connect will break activeClassName
// unless you also subscribe to changes to routing state or context
export default class ZipcodeChecker extends React.Component {
  state = { zipcode: '', zipcodes: ['07506'] };

  handleChange = e => {
    this.setState({ zipcode: e.target.value });
  };

  handleSubmit = e => {
    const zip = this.state.zipcodes.filter(zipcode => {
      if (zipcode === this.state.zipcode) {
        return zipcode;
      }
      return false;
    });
    console.log('Zip', zip);
    let msg =
      'We are sorry, our services are not available in your zipcode. Signup for our newsletter so we can inform you when we expand our services to your area.';
    if (zip.length > 0) {
      msg = `Congratulations our services in zipcode ${zip[0]} are available`;
    }
    alert(msg);
    e.preventDefault();
  };

  render() {
    return (
      <div className="temp2">
        <h3>Check if our services are available in your zipcode</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="07506"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          <input type="submit" value="Check!" />
        </form>
      </div>
    );
  }
}
