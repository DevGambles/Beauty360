import React, { Component } from "react"
import { Label, Input, FormGroup, Button } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/light.css"
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import Select from "react-select"
import Multiselect from 'multiselect-react-dropdown';
import serviceConfig from "../../../configs/serviceConfig"

const skinTypes = [
  {value:"1", label:"1"},
  {value:"2", label:"2"},
  {value:"3", label:"3"},
  {value:"4", label:"4"},
  {value:"5", label:"5"},
  {value:"6", label:"6"},
]

const getToday=()=>{
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return year + "-" + month + "-" + dt;
}

class DataListSidebar extends Component {
  state = {
    _id: "",
    date: getToday(),
    area: "",
    skintype: "",
    selectedSkinTypeValue: {value:"1", label:"1"},
    kj: 0,
    cost: 0,
    comments: "",
    customer_id: "",
    options: [],
    color_used : "",
    technique : "",
    pigment_used : "",
    session_duration : 0,
    type_of_pigmentation : "",
    ink_used : "",
    type_of_peel : "",
    duration : 0,
    needle_depth : 0,
    serum_used : "",
    products_used : "",
    sclerosing_agent_used : "",
    pulses : 0, //kj
    units_used : 0,
    product_used : "",
    amount_used : "",
    type_of_crystals_used : "",
    procedure : "",
  }

  addNew = false
  componentDidUpdate(prevProps, prevState) {
    if(this.props.customer_id !== prevState.customer_id){
      this.setState({ customer_id: this.props.customer_id })
    }

    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data._id !== prevState._id) {
        this.setState({ _id: this.props.data._id })
      }
      if (this.props.data.date !== prevState.date) {
        this.setState({ date: this.props.data.date })
      }
      if (this.props.data.area !== prevState.area) {
        this.setState({ area: this.props.data.area })
      }
      if (this.props.data.areas !== prevState.areas) {
        this.setState({ selectedValue: this.props.data.areas })
      }
      if (this.props.data.skintype !== prevState.skintype) {
        this.setState({ selectedSkinTypeValue: {value:this.props.data.skintype, label:this.props.data.skintype} })
        this.setState({ skintype: this.props.data.skintype })
      }
      if (this.props.data.kj !== prevState.kj) {
        this.setState({ kj: this.props.data.kj })
      }
      if (this.props.data.cost !== prevState.cost) {
        this.setState({ cost: this.props.data.cost })
      }
      if (this.props.data.comments !== prevState.comments) {
        this.setState({ comments: this.props.data.comments })
      }
      if (this.props.data.color_used !== prevState.color_used) {
        this.setState({ color_used: this.props.data.color_used })
      }
      if (this.props.data.technique !== prevState.technique) {
        this.setState({ technique: this.props.data.technique })
      }
      if (this.props.data.pigment_used !== prevState.pigment_used) {
        this.setState({ pigment_used: this.props.data.pigment_used })
      }
      if (this.props.data.session_duration !== prevState.session_duration) {
        this.setState({ session_duration: this.props.data.session_duration })
      }
      if (this.props.data.type_of_pigmentation !== prevState.type_of_pigmentation) {
        this.setState({ type_of_pigmentation: this.props.data.type_of_pigmentation })
      }
      if (this.props.data.ink_used !== prevState.ink_used) {
        this.setState({ ink_used: this.props.data.ink_used })
      }
      if (this.props.data.type_of_peel !== prevState.type_of_peel) {
        this.setState({ type_of_peel: this.props.data.type_of_peel })
      }
      if (this.props.data.duration !== prevState.duration) {
        this.setState({ duration: this.props.data.duration })
      }
      if (this.props.data.needle_depth !== prevState.needle_depth) {
        this.setState({ needle_depth: this.props.data.needle_depth })
      }
      if (this.props.data.serum_used !== prevState.serum_used) {
        this.setState({ serum_used: this.props.data.serum_used })
      }
      if (this.props.data.products_used !== prevState.products_used) {
        this.setState({ products_used: this.props.data.products_used })
      }
      if (this.props.data.sclerosing_agent_used !== prevState.sclerosing_agent_used) {
        this.setState({ sclerosing_agent_used: this.props.data.sclerosing_agent_used })
      }
      if (this.props.data.pulses !== prevState.pulses) {
        this.setState({ pulses: this.props.data.pulses })
      }
      if (this.props.data.units_used !== prevState.units_used) {
        this.setState({ units_used: this.props.data.units_used })
      }
      if (this.props.data.product_used !== prevState.product_used) {
        this.setState({ product_used: this.props.data.product_used })
      }
      if (this.props.data.amount_used !== prevState.amount_used) {
        this.setState({ amount_used: this.props.data.amount_used })
      }
      if (this.props.data.type_of_crystals_used !== prevState.type_of_crystals_used) {
        this.setState({ type_of_crystals_used: this.props.data.type_of_crystals_used })
      }
      if (this.props.data.procedure !== prevState.procedure) {
        this.setState({ procedure: this.props.data.procedure })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        _id: "",
        date: new Date(),
        area: "",
        skintype: "",
        kj: 0,
        cost: 0,
        comments: "",
        customer_id: '',
        color_used : "",
        technique : "",
        pigment_used : "",
        session_duration : 0,
        type_of_pigmentation : "",
        ink_used : "",
        type_of_peel : "",
        duration : 0,
        needle_depth : 0,
        serum_used : "",
        products_used : "",
        sclerosing_agent_used : "",
        pulses : 0, //kj
        units_used : 0,
        product_used : "",
        amount_used : "",
        type_of_crystals_used : "",
        procedure : "",
      })
    }
    if (this.addNew) {
      this.setState({
        _id: "",
        date: new Date(),
        area: "",
        skintype: "",
        kj: 0,
        cost: 0,
        comments: "",
        customer_id: '',
        color_used : "",
        technique : "",
        pigment_used : "",
        session_duration : 0,
        type_of_pigmentation : "",
        ink_used : "",
        type_of_peel : "",
        duration : 0,
        needle_depth : 0,
        serum_used : "",
        products_used : "",
        sclerosing_agent_used : "",
        pulses : 0, //kj
        units_used : 0,
        product_used : "",
        amount_used : "",
        type_of_crystals_used : "",
        procedure : "",
      })
    }
    this.addNew = false
  }

  isVisible = (name) => {
    return serviceConfig[this.props.service.value].includes(name);
  }

  onSelect = (selectedList, selectedItem) => {
    var arrOfVals = [];
    selectedList.forEach(element => {
      arrOfVals.push(element.value);
    });
    this.setState({area: arrOfVals})
  }

  onRemove = (selectedList, removedItem) => {
    var arrOfVals = [];
    selectedList.forEach(element => {
      arrOfVals.push(element.value);
    });
    this.setState({area: arrOfVals})
  }

  handleSubmit = obj => {
    
    obj.area = obj.area ? obj.area : "";
    obj.skintype = obj.skintype ? obj.skintype: "";
    obj.kj = obj.kj ? obj.kj: 0;
    obj.cost = obj.cost ? obj.cost: 0;
    obj.comments = obj.comments ? obj.comments: "";
    obj.customer_id = obj.customer_id ? obj.customer_id: "";
    obj.color_used = obj.color_used ? obj.color_used : "";
    obj.technique = obj.technique ? obj.technique : "";
    obj.pigment_used = obj.pigment_used ? obj.pigment_used : "";
    obj.session_duration = obj.session_duration ? obj.session_duration : 0;
    obj.type_of_pigmentation = obj.type_of_pigmentation ? obj.type_of_pigmentation : "";
    obj.ink_used = obj.ink_used ? obj.ink_used : "";
    obj.type_of_peel = obj.type_of_peel ? obj.type_of_peel : "";
    obj.duration = obj.duration ? obj.duration : 0;
    obj.needle_depth = obj.needle_depth ? obj.needle_depth : 0;
    obj.serum_used = obj.serum_used ? obj.serum_used : "";
    obj.products_used = obj.products_used ? obj.products_used : "";
    obj.sclerosing_agent_used = obj.sclerosing_agent_used ? obj.sclerosing_agent_used : "";
    obj.pulses = obj.pulses ? obj.pulses : 0; //kj
    obj.units_used = obj.units_used ? obj.units_used : 0;
    obj.product_used = obj.product_used ? obj.product_used : "";
    obj.amount_used = obj.amount_used ? obj.amount_used : "";
    obj.type_of_crystals_used = obj.type_of_crystals_used ? obj.type_of_crystals_used : "";
    obj.procedure = obj.procedure ? obj.procedure : "";

    if (this.props.data !== null) {
      this.props.updateData(obj)
    } else {
      this.addNew = true
      this.props.addData(obj)
    }
    let params = Object.keys(this.props.dataParams).length
      ? this.props.dataParams
      : { page: 1, perPage: 4 }
    this.props.handleSidebar(false, true)
    this.props.getData(params,this.state.customer_id)
  }

  render() {
    let { show, handleSidebar, data } = this.props
    let { date, area, kj, cost, comments, color_used, technique, pigment_used, session_duration, type_of_pigmentation, ink_used, type_of_peel, duration, needle_depth, serum_used, products_used, sclerosing_agent_used, pulses, units_used, product_used, amount_used, type_of_crystals_used, procedure } = this.state
    return (
      <div
        className={classnames("data-list-sidebar", {
          show: show
        })}>
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>{data !== null ? "UPDATE DATA" : "ADD NEW DATA"}</h4>
          <X size={20} onClick={() => handleSidebar(false, true)} />
        </div>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button color="primary" onClick={() => this.handleSubmit(this.state)}>
            {data !== null ? "Update" : "Submit"}
          </Button>
          <Button
            className="ml-1"
            color="danger"
            outline
            onClick={() => handleSidebar(false, true)}>
            Cancel
          </Button>
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}>
          {this.isVisible("date") && <FormGroup>
            <Label for="data-date">Date</Label>
            <Flatpickr
              required
              name="date"
              className="form-control"
              value={date}
              onChange={date => {
                this.setState({ date : date });
              }}
            />
          </FormGroup>}
          {this.isVisible("area") && <FormGroup>
            <Label for="data-area">Area</Label>
            <Multiselect
              options={this.props.bodyarea} // Options to display in the dropdown
              selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
              onSelect={this.onSelect} // Function will trigger on select event
              onRemove={this.onRemove} // Function will trigger on remove event
              searchBox={{'border': 'none', 'fontSize': '10px', 'minHeight': '50px'}}
              displayValue="label" // Property name to display in the dropdown options
            />
          </FormGroup>}
          {this.isVisible("skintype") && <FormGroup>
            <Label for="data-skintype">Skin Type</Label>
            <Select
              id="skintype"
              className="React mr-3"
              classNamePrefix="select"
              value={this.state.selectedSkinTypeValue}
              name="skintype"
              options={skinTypes}
              onChange={e => {
                this.setState({ skintype: e.value })
                this.setState({ selectedSkinTypeValue: {value:e.value, label:e.value} })
              }}
              >
            </Select>
          </FormGroup>}
          {this.isVisible("kj") && <FormGroup>
            <Label for="data-kj">KJ</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="data-kj"
              value={kj}
              onChange={e => this.setState({ kj: e.target.value })} />
          </FormGroup>}
          {this.isVisible("color_used") && <FormGroup>
            <Label for="data-color-used">Color Used</Label>
            <Input
              type="text"
              id="data-color-used"
              value={color_used}
              onChange={e => this.setState({ color_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("technique") && <FormGroup>
            <Label for="data-technique">Technique</Label>
            <Input
              type="text"
              id="data-technique"
              value={technique}
              onChange={e => this.setState({ technique: e.target.value })} />
          </FormGroup>}
          {this.isVisible("pigment_used") && <FormGroup>
            <Label for="data-pigment-used">Pigment Used</Label>
            <Input
              type="text"
              id="data-pigment-used"
              value={pigment_used}
              onChange={e => this.setState({ pigment_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("session_duration") && <FormGroup>
            <Label for="data-session-duration">Session Duration</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="data-session-duration"
              value={session_duration}
              onChange={e => this.setState({ session_duration: e.target.value })} />
          </FormGroup>}
          {this.isVisible("type_of_pigmentation") && <FormGroup>
            <Label for="data-type-of-pigmentation">Type of Pigmentation</Label>
            <Input
              type="text"
              id="data-type-of-pigmentation"
              value={type_of_pigmentation}
              onChange={e => this.setState({ type_of_pigmentation: e.target.value })} />
          </FormGroup>}
          {this.isVisible("ink_used") && <FormGroup>
            <Label for="data-ink-used">Ink Used</Label>
            <Input
              type="text"
              id="data-ink-used"
              value={ink_used}
              onChange={e => this.setState({ ink_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("type_of_peel") && <FormGroup>
            <Label for="data-type-of-peel">Type Of Peel</Label>
            <Input
              type="text"
              id="data-type-of-peel"
              value={type_of_peel}
              onChange={e => this.setState({ type_of_peel: e.target.value })} />
          </FormGroup>}
          {this.isVisible("duration") && <FormGroup>
            <Label for="data-duration">Duration</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="data-duration"
              value={duration}
              onChange={e => this.setState({ duration: e.target.value })} />
          </FormGroup>}
          {this.isVisible("needle_depth") && <FormGroup>
            <Label for="data-needle_depth">Needle Depth</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="data-needle_depth"
              value={needle_depth}
              onChange={e => this.setState({ needle_depth: e.target.value })} />
          </FormGroup>}
          {this.isVisible("serum_used") && <FormGroup>
            <Label for="data-serum-used">Serum Used</Label>
            <Input
              type="text"
              id="data-serum-used"
              value={serum_used}
              onChange={e => this.setState({ serum_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("products_used") && <FormGroup>
            <Label for="data-products-used">Products Used</Label>
            <Input
              type="text"
              id="data-products-used"
              value={products_used}
              onChange={e => this.setState({ products_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("sclerosing_agent_used") && <FormGroup>
            <Label for="data-sclerosing-agent-used">Sclerosing Agent Used</Label>
            <Input
              type="text"
              id="data-sclerosing-agent-used"
              value={sclerosing_agent_used}
              onChange={e => this.setState({ sclerosing_agent_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("pulses") && <FormGroup>
            <Label for="data-pulses">Pulses</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="data-pulses"
              value={pulses}
              onChange={e => this.setState({ pulses: e.target.value })} />
          </FormGroup>}
          {this.isVisible("units_used") && <FormGroup>
            <Label for="data-units-used">Units Used</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="data-units-used"
              value={units_used}
              onChange={e => this.setState({ units_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("product_used") && <FormGroup>
            <Label for="data-product-used">Product Used</Label>
            <Input
              type="text"
              id="data-product-used"
              value={product_used}
              onChange={e => this.setState({ product_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("amount_used") && <FormGroup>
            <Label for="data-amount-used">Amount Used</Label>
            <Input
              type="text"
              id="data-amount-used"
              value={amount_used}
              onChange={e => this.setState({ amount_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("type_of_crystals_used") && <FormGroup>
            <Label for="data-type-of-crystals-used">Type Of Crystals Used</Label>
            <Input
              type="text"
              id="data-type-of-crystals-used"
              value={type_of_crystals_used}
              onChange={e => this.setState({ type_of_crystals_used: e.target.value })} />
          </FormGroup>}
          {this.isVisible("procedure") && <FormGroup>
            <Label for="data-procedure">Procedure</Label>
            <Input
              type="text"
              id="data-procedure"
              value={procedure}
              onChange={e => this.setState({ procedure: e.target.value })} />
          </FormGroup>}
          {this.isVisible("cost") && <FormGroup>
            <Label for="data-cost">Cost</Label>
            <Input
              type="number"
              inputMode="numeric"
              id="data-cost"
              value={cost}
              onChange={e => this.setState({ cost: e.target.value })} />
          </FormGroup>}
          {this.isVisible("comments") && <FormGroup>
            <Label for="data-comments">Comments</Label>
            <Input
              type="text"
              id="data-comments"
              value={comments}
              onChange={e => this.setState({ comments: e.target.value })} />
          </FormGroup>}
        </PerfectScrollbar>
      </div>
    )
  }
}
export default DataListSidebar
