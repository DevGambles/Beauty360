import React from "react"
import { Row, Col, FormGroup, Label, Input } from "reactstrap"
import BodyAreaListViewConfig from "./BodyAreaDataListConfig"
import BasicDataListViewConfig from "./BasicDataListConfig"
import MediaHistoryDataListViewConfig from "./MediaHistoryDataListConfig"
import debounce from "lodash.debounce"

import queryString from "query-string"
import { saveMainSettings, getInitialData } from "../../../redux/actions/mainSettings"
import { connect } from "react-redux"
import services from "../../../configs/services"
import Select from 'react-select'

class Settings extends React.Component {
  state = {
    title: '',
    consent1: '',
    consent2: '',
    service: {
      "label": "Laser Hair Removal",
      "value": "Laser"
    },
  }

  saveData = debounce(() => {
    console.log("Saving data:", this.state)
    this.props.saveMainSettings({
      title: this.state.title,
      consent1: this.state.consent1,
      consent2: this.state.consent2,
      service: this.state.service.value
    });
  }, 1000)

  handleChange(index, value) {
    switch (index) {
      case 1:
        this.props.dispatch({ type: "SET_MAIN_SETTING", data: { ...this.props.mainSettings, title: value } })
        break;
      case 2:
        this.props.dispatch({ type: "SET_MAIN_SETTING", data: { ...this.props.mainSettings, consent1: value } })
        break;
      case 3:
        this.props.dispatch({ type: "SET_MAIN_SETTING", data: { ...this.props.mainSettings, consent2: value } })
        break;
    }

    this.saveData()

  }

  componentDidMount() {
    this.props.getInitialData(this.state.service.value);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.service != this.state.service)
      this.props.getInitialData(this.state.service.value);
  }

  static getDerivedStateFromProps(props) {
    const mainSettingsProps = props.mainSettings;
    return {
      title: mainSettingsProps.title,
      consent1: mainSettingsProps.consent1,
      consent2: mainSettingsProps.consent2
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* <Breadcrumbs
          breadCrumbTitle="Settings"
          breadCrumbParent="Pages"
          breadCrumbActive="Settings"
        /> */}
        <Row>
          <Col sm="12" className="mt-2 mb-2">
            <Select
              className="React"
              classNamePrefix="select"
              name="service"
              value={this.state.service}
              options={services}
              onChange={e => {
                this.setState({ service: { value: e.value, label: e.label } })
              }}
            >
            </Select>
          </Col>
          <Col sm="12" className="mt-2 mb-2">
            <div className="setting-title">
              <h5 className="text-center">Form Title</h5>
              <Input
                type="text"
                value={this.props.mainSettings.title}
                placeholder="Input title of form"
                id="form-title"
                className="form-control"
                onChange={(e) => this.handleChange(1, e.target.value)}
              />
            </div>
          </Col>
          <Col sm="6">
            <h5 className="text-center">Body Area</h5>
            <BodyAreaListViewConfig parsedFilter={queryString.parse(this.props.location.search)} />
          </Col>
          <Col sm="6">
            <h5 className="text-center">Basic Health Questions</h5>
            <BasicDataListViewConfig parsedFilter={queryString.parse(this.props.location.search)} />
          </Col>
          <Col sm="12" className="mt-2">
            <h5 className="text-center">Medical History Questions</h5>
            <MediaHistoryDataListViewConfig parsedFilter={queryString.parse(this.props.location.search)} />
          </Col>

          <Col sm="12" className="mt-2">
            <div className="setting-title">
              <h5 className="text-center">Consent Text 1</h5>
              <Input
                type="textarea"
                value={this.props.mainSettings.consent1}
                placeholder="Input consent text"
                id="form-title"
                className="form-control"
                rows={5}
                onChange={(e) => this.handleChange(2, e.target.value)}
              />
            </div>
          </Col>
          <Col sm="12" className="mt-2 mb-2">
            <div className="setting-title">
              <h5 className="text-center">Consent Text 2</h5>
              <Input
                type="textarea"
                value={this.props.mainSettings.consent2}
                rows={5}
                placeholder="Input consent text"
                id="form-title"
                className="form-control"
                onChange={(e) => this.handleChange(3, e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    mainSettings: state.mainSettings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    saveMainSettings: (settings) => dispatch(saveMainSettings(settings)),
    getInitialData: (service) => dispatch(getInitialData(service)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);