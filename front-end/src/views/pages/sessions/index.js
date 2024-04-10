import React from "react"
import { Row, Col } from "reactstrap"
import ListViewConfig from "./DataListConfig"
import queryString from "query-string"
import services from "../../../configs/services"
import Select from 'react-select'

class Sessions extends React.Component{
  state = {
    service: {
      "label": "Laser Hair Removal",
      "value": "Laser"
    },
  }

  render(){
    return (
      <React.Fragment>
        <Row className="mb-2">
          <Col sm="12">
            <Select
              className="React"
              classNamePrefix="select"
              name="service"
              value={this.state.service}
              options={services}
              onChange={e => {
                this.setState({ service: {value:e.value, label:e.label} })
              }}
              >
            </Select>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <ListViewConfig key={this.state.service} service={this.state.service} parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Sessions