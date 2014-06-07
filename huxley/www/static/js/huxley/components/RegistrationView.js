/**
 * Copyright (c) 2011-2014 Berkeley Model United Nations. All rights reserved.
 * Use of this source code is governed by a BSD License (see LICENSE).
 *
 * @jsx React.DOM
 */

'use strict';

var console = require('console');

var $ = require('jquery');
var React = require('react/addons');

var Button = require('./Button');
var CountryStore = require('../stores/CountryStore');
var CommitteeStore = require('../stores/CommitteeStore');
var NavLink = require('./NavLink');
var OuterView = require('./OuterView');

require('jquery-ui/effect-shake');

var RegistrationView = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      countries: [],
      committees: [],
      first_name: null,
      last_name: null,
      username: null,
      password: null,
      password2: null,
      school_name: null,
      school_address: null,
      school_state: null,
      shool_zip: null,
      school_country: "United States of America",
      program_type: "Club",
      times_attended: null,
      min_delegation_size: null,
      max_delegation_size: null,
      primary_name: null,
      primary_email: null,
      primary_phone: null,
      secondary_name: null,
      secondary_email: null,
      secondary_phone: null,
      country_pref1: 0,
      country_pref2: 0,
      country_pref3: 0,
      country_pref4: 0,
      country_pref5: 0,
      country_pref6: 0,
      country_pref7: 0,
      country_pref8: 0,
      country_pref9: 0,
      country_pref10: 0,
      committee_prefs: [],
      loading: false
    };
  },

  componentDidMount: function() {
    CountryStore.getCountries(function(countries) {
      this.setState({countries: countries});
    }.bind(this));
    CommitteeStore.getSpecialCommittees(function(committees) {
      this.setState({committees: committees});
    }.bind(this));
  },

  render: function() {
    var cx = React.addons.classSet;
    return (
      <OuterView>
        <form
          id="registration"
          className="registration-form"
          onSubmit={this._handleSubmit}>
          <div>
            <h1>Register for Berkeley Model United Nations</h1>
            <p>Please fill out the following information to register your school
            for BMUN 63. All fields are required except for Secondary Contact
            information.</p>
            <NavLink direction="left" href="/www/login">
              Back to Login
            </NavLink>
          </div>
          <div className="registration-fields">
            <hr />
            <h3>Account Information</h3>
            <input
              className="text"
              type="text"
              name="first_name"
              placeholder="First Name"
              valueLink={this.linkState('first_name')}
            />
            <input
              className="text"
              type="text"
              name="last_name"
              placeholder="Last Name"
              valueLink={this.linkState('last_name')}
            />
            <input
              className="text"
              type="text"
              name="username"
              placeholder="Username"
              valueLink={this.linkState('username')}
            />
            <input
              className="text"
              type="password"
              name="password"
              placeholder="Password"
              valueLink={this.linkState('password')}
            />
            <input
              className="text"
              type="password"
              name="password2"
              placeholder="Password (confirm)"
              valueLink={this.linkState('password2')}
            />
            <hr />
            <h3>School Information</h3>
            <p className="instructions">Where is your school located?</p>
            <ul>
              <li>
                <label name="school_location">
                  <input
                    className="choice"
                    type="radio"
                    name="school_location"
                    valueLink={this.linkState('school_location')}
                    checked="true"
                  /> United States of America
                  </label>
              </li>
              <li>
                <label name="school_location">
                  <input
                    className="choice"
                    type="radio"
                    name="school_location"
                    valueLink={this.linkState('school_location')}
                  /> International
                </label>
              </li>
            </ul>
            <input
              className="text"
              type="text"
              name="school_name"
              placeholder="Official School Name"
              valueLink={this.linkState('school_name')}
            />
            <input
              className="text"
              type="text"
              name="school_address"
              placeholder="Street Address"
              valueLink={this.linkState('school_address')}
            />
            <input
              className="text"
              type="text"
              name="school_city"
              placeholder="City"
              valueLink={this.linkState('school_city')}
            />
            <input
              className="text"
              type="text"
              name="school_state"
              placeholder="State"
              valueLink={this.linkState('school_state')}
            />
            <input
              className="text"
              type="text"
              name="school_zip"
              placeholder="Zip"
              valueLink={this.linkState('school_zip')}
            />
            <input
              className="text"
              type="text"
              name="school_country"
              placeholder="Country"
              valueLink={this.linkState('school_country')}
            />
            <hr />
            <h3>Program Information</h3>
            <p className="instructions">What category best describes your program?</p>
            <ul>
              <li>
                <label name="program_type">
                  <input
                    className="choice"
                    type="radio"
                    name="program_type"
                    checked="true"
                    valueLink={this.linkState('program_type')}
                  /> Club
                </label>
              </li>
              <li>
                <label name="program_type">
                  <input
                    className="choice"
                    type="radio"
                    name="program_type"
                    valueLink={this.linkState('program_type')}
                  /> Class
                </label>
              </li>
            </ul>
            <p className="instructions">Please tell us a bit more about your delegation this
              year.</p>
            <input
              className="text"
              type="text"
              name="times_attended"
              placeholder="Number of BMUN sessions attended"
              valueLink={this.linkState("times_attended")}
            />
            <input
              className="text"
              type="text"
              name="min_delegation_size"
              placeholder="Minimum Delegation Size"
              valueLink={this.linkState('min_delegation_size')}
            />
            <input
              className="text"
              type="text"
              name="max_delegation_size"
              placeholder="Maximum Delegation Size"
              valueLink={this.linkState('max_delegation_size')}
            />
            <hr />
            <h3>Primary Contact</h3>
            <input
              className="text"
              type="text"
              name="primary_name"
              placeholder="Name"
              valueLink={this.linkState('primary_name')}
            />
            <input
              className="text"
              type="text"
              name="primary_email"
              placeholder="Email"
              valueLink={this.linkState('primary_email')}
            />
            <input
              className="text"
              type="text"
              name="primary_phone"
              placeholder="Phone Number"
              valueLink={this.linkState('primary_phone')}
            />
            <hr />
            <h3>Secondary Contact</h3>
            <input
              className="text"
              type="text"
              name="secondary_name"
              placeholder="Name"
              valueLink={this.linkState('secondary_name')}
            />
            <input
              className="text"
              type="text"
              name="secondary_email"
              placeholder="Email"
              valueLink={this.linkState('secondary_email')}
            />
            <input
              className="text"
              type="text"
              name="secondary_phone"
              placeholder="Phone Number"
              valueLink={this.linkState('secondary_phone')}
            />
            <hr />
            <h3>Country Preferences></h3>
            <p className="instructions">Please choose 10 United Nations Member States or
            Observers your school would like to represent. A reference list of
            countries and their relation to committees is available online.
            Please diversify your selection.</p>
            <ul>
              <li>
                <label>01</label>
                <select name="country_pref1" valueLink={this.linkState('country_pref1')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>02</label>
                <select name="country_pref2" valueLink={this.linkState('country_pref2')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>03</label>
                <select name="country_pref3" valueLink={this.linkState('country_pref3')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>04</label>
                <select name="country_pref4" valueLink={this.linkState('country_pref4')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>05</label>
                <select name="country_pref5" valueLink={this.linkState('country_pref5')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>06</label>
                <select name="country_pref6" valueLink={this.linkState('country_pref6')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>07</label>
                <select name="country_pref7" valueLink={this.linkState('country_pref7')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>08</label>
                <select name="country_pref8" valueLink={this.linkState('country_pref8')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>09</label>
                <select name="country_pref9" valueLink={this.linkState('country_pref9')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
              <li>
                <label>10</label>
                <select name="country_pref10" valueLink={this.linkState('country_pref10')} defaultValue="0">
                  <option value="0">No Preference</option>
                  {this.renderOptions()}
                </select>
              </li>
            </ul>
            <hr />
            <h3>Special Committee Preferences</h3>
            <p className="instructions">Would your delegation be interested in being represented
            in the following small/specialized committees? Positions are limited
            and we may not be able to accomodate all preferences.</p>
            <ul>
              {this.renderCommittees()}
            </ul>
            <hr />
              <NavLink direction="left" href="/www/login">
                Back to Login
              </NavLink>
              <div className="right">
                <span className="help-text"><em>All done?</em></span>
                <Button
                  color="green"
                  loading={this.state.loading}
                  type="submit">
                  Register
                </Button>
              </div>
          </div>
        </form>
      </OuterView>
    );
  },

  renderCommittees: function() {
    return this.state.committees.map(function(committee) {
      return (
        <li>
          <label name="committee_prefs">
            <input
              className="choice"
              type="checkbox"
              name="committee_prefs"
            />
            {committee.full_name}
          </label>
        </li>
      );
    });
  },

  renderOptions: function() {
    return this.state.countries.map(function(country) {
      return <option key={country.id} value={country.id}>{country.name}</option>
    });
  },

  _handleSubmit: function(event) {
    this.setState({loading: true});
    $.ajax({
      type: 'POST',
      url: '/api/users',
      data: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password2,
        school: {
          name: this.state.school_name,
          address: this.state.school_address,
          state: this.state.school_state,
          zip: this.state.school_zip,
          country: this.state.school_country,
          program_type: this.state.program_type,
          times_attended: this.state.times_attended,
          min_delegation_size: this.state.min_delegation_size,
          max_delegation_size: this.state.max_delegation_size,
          primary_name: this.state.primary_name,
          primary_email: this.state.primary_email,
          primary_phone: this.state.primary_phone,
          secondary_name: this.state.secondary_name,
          secondary_email: this.state.secondary_email,
          secondary_phone: this.state.secondary_phone,
          country_prefs: [
            this.state.country_pref1,
            this.state.country_pref2,
            this.state.country_pref3,
            this.state.country_pref4,
            this.state.country_pref5,
            this.state.country_pref6,
            this.state.country_pref7,
            this.state.country_pref8,
            this.state.country_pref9,
            this.state.country_pref10
          ],
          committee_prefs: this.state.committee_prefs
        }
      },
      success: this._handleSuccess,
      error: this._handleError,
      dataType: 'json'
    });
    event.preventDefault();
  },

  _handleSuccess: function(data, status, jqXHR) {
    console.log(jqXHR.responseJSON);
  },

  _handleError: function(jqXHR, status, error) {
    var response = jqXHR.responseJSON;
    if (!response.detail) {
      return;
    }

    this.setState({
      error: response.detail,
      loading: false
    }, function() {
      $(this.getDOMNode()).effect(
        'shake',
        {direction: 'up', times: 2, distance: 2},
        250
      );
    }.bind(this));
  }
});

module.exports = RegistrationView;