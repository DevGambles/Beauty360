import React, { Component, useMemo } from "react"
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Button
} from "reactstrap"
import DataTable from "react-data-table-component"
import classnames from "classnames"
import ReactPaginate from "react-paginate"
import { history } from "../../../history"
import {
  Edit,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "react-feather"
import { connect } from "react-redux"
import {
  getData,
  filterData
} from "../../../redux/actions/customer"

import {
  addData
} from "../../../redux/actions/sessions"

import Sidebar from "./DataListSidebar"

import "../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../assets/scss/pages/data-list.scss"
import config from "../../../configs/config"

const selectedStyle = {
  rows: {
    selectedHighlighStyle: {
      backgroundColor: "rgba(115,103,240,.05)",
      color: "#7367F0 !important",
      boxShadow: "0 0 1px 0 #7367F0 !important",
      "&:hover": {
        transform: "translateY(0px) !important"
      }
    }
  }
}

const ActionsComponent = props => {
  return (
    <div className="data-list-action"
      onClick={() => {
        return props.currentData(props.row)
      }}
      >
      <Edit
        className="cursor-pointer mr-1"
        size={20}
      />
      Add New Session
    </div>
  )
}

const CustomHeader = props => {
  return (
    <div className="data-list-header d-flex justify-content-between flex-wrap">
      <div className="actions-left d-flex flex-wrap">
      </div>
      <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
        <UncontrolledDropdown className="data-list-rows-dropdown mr-1 d-md-block d-none">
          <DropdownToggle color="" className="sort-dropdown">
            <span className="align-middle mx-50">
              {`${props.index[0] || 0} - ${props.index[1] || 0} of ${props.total}`}
            </span>
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu tag="div" right>
            <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(4)}>
              4
            </DropdownItem>
            <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(10)}>
              10
            </DropdownItem>
            <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(15)}>
              15
            </DropdownItem>
            <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(20)}>
              20
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <div className="filter-section">
          <Input type="text" onChange={e => props.handleFilter(e)} />
        </div>
      </div>
    </div>
  )
}

class DataListConfig extends Component {

  state = {
    data: [],
    totalPages: 0,
    currentPage: 0,
    bodyarea: [],
    columns: [
      {
        name: "Name",
        selector: "name",
        sortable: true,
        // minWidth: "300px",
        cell: row => (
          <p title={row.name} className="text-truncate text-bold-500 mb-0">
            {row.name}
          </p>
        )
      },
      {
        name: "Phone",
        selector: "phone",
        sortable: true
      },
      {
        name: "City",
        selector: "city",
        sortable: true
      },
      {
        name: "First Session",
        selector: "fsession",
        sortable: true
      },
      {
        name: "Last Session",
        selector: "lsession",
        sortable: true
      },
      {
        name: "Referred By",
        selector: "referredby",
        sortable: true
      },
      {
        name: "Actions",
        sortable: true,
        cell: row => (
          <ActionsComponent
            row={row}
            getData={this.props.getData}
            parsedFilter={this.props.parsedFilter}
            currentData={this.handleCurrentData}
          />
        )
      }
    ],
    allData: [],
    value: "",
    rowsPerPage: 4,
    sidebar: false,
    currentData: null,
    selected: [],
    totalRecords: 0,
    sortIndex: [],
    addNew: ""
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dataList.data.length !== state.data.length || state.currentPage !== props.parsedFilter.page) {
      return {
        data: props.dataList.data,
        allData: props.dataList.filteredData,
        totalPages: props.dataList.totalPages,
        currentPage: parseInt(props.parsedFilter.page) - 1,
        rowsPerPage: parseInt(props.parsedFilter.perPage),
        totalRecords: props.dataList.totalRecords,
        sortIndex: props.dataList.sortIndex,
        bodyarea: props.dataList.bodyarea
      }
    }

    // Return null if the state hasn't changed
    return null
  }

  thumbView = this.props.thumbView

  componentDidMount() {
    this.props.getData({...this.props.parsedFilter, service: this.props.service.value})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.thumbView) {
      this.thumbView = false
      let columns = [
        {
          name: "Name",
          selector: "name",
          sortable: true,
          cell: row => (
            <p title={row.name} className="text-truncate text-bold-500 mb-0">
              {row.name}
            </p>
          )
        },
        {
          name: "Email",
          selector: "email",
          sortable: true
        },
        {
          name: "Phone",
          selector: "phone",
          sortable: true
        },
        {
          name: "City",
          selector: "city",
          sortable: true
        },
        {
          name: "First Session",
          selector: "fsession",
          sortable: true
        },
        {
          name: "Last Session",
          selector: "lsession",
          sortable: true
        },
        {
          name: "Referred By",
          selector: "referredby",
          sortable: true
        },
        {
          name: "Consent Form",
          selector: "pdf",
          sortable: true,
          cell: row => (
                <a
                  className="m-0"
                  href={config.host+'consentforms/'+row.pdf}
                  _target="blank"
                >View</a>
          )
        },
        {
          name: "Actions",
          sortable: true,
          cell: row => (
            <ActionsComponent
              row={row}
              getData={this.props.getData}
              parsedFilter={this.props.parsedFilter}
              currentData={this.handleCurrentData}
            />
          )
        }
      ]
      this.setState({ columns })
    }
    if (this.props.service != prevProps.service)
      this.props.getData({...this.props.parsedFilter, service: this.props.service.value})
  }

  handleFilter = e => {
    this.setState({ value: e.target.value })
    this.props.filterData(e.target.value)
  }

  handleRowsPerPage = value => {
    let { parsedFilter, getData } = this.props
    let page = parsedFilter.page !== undefined ? parsedFilter.page : 1
    history.push(`?page=${page}&perPage=${value}`)
    this.setState({ rowsPerPage: value })
    getData({ page: parsedFilter.page, perPage: value })
  }

  handleSidebar = (boolean, addNew = false) => {
    this.setState({ sidebar: boolean })
    if (addNew === true) this.setState({ currentData: null, addNew: true })
  }

  handleCurrentData = obj => {
    this.setState({ currentData: obj })
    this.handleSidebar(true)
  }

  handlePagination = page => {
    let { parsedFilter, getData } = this.props
    let perPage = parsedFilter.perPage !== undefined ? parsedFilter.perPage : 4
    let urlPrefix = this.props.thumbView
      ? ""
      : ""
    history.push(
      `${urlPrefix}?page=${page.selected + 1}&perPage=${perPage}`
    )
    getData({ page: page.selected + 1, perPage: perPage })
    this.setState({ currentPage: page.selected })
  }

  render() {
    let {
      columns,
      data,
      allData,
      totalPages,
      value,
      rowsPerPage,
      currentData,
      sidebar,
      totalRecords,
      sortIndex
    } = this.state

    return (
      <div
        className={`data-list ${
          this.props.thumbView ? "thumb-view" : "list-view"
        }`}>
        <DataTable
          columns={columns}
          data={value.length ? allData : data}
          pagination
          paginationServer
          paginationComponent={() => (
            <ReactPaginate
              previousLabel={<ChevronLeft size={15} />}
              nextLabel={<ChevronRight size={15} />}
              breakLabel="..."
              breakClassName="break-me"
              pageCount={totalPages}
              containerClassName="vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2"
              activeClassName="active"
              forcePage={
                this.props.parsedFilter.page
                  ? parseInt(this.props.parsedFilter.page - 1)
                  : 0
              }
              onPageChange={page => this.handlePagination(page)}
            />
          )}
          noHeader
          subHeader
          responsive
          pointerOnHover
          selectableRowsHighlight
          onSelectedRowsChange={data =>
            this.setState({ selected: data.selectedRows })
          }
          customStyles={selectedStyle}
          subHeaderComponent={
            <CustomHeader
              handleSidebar={this.handleSidebar}
              handleFilter={this.handleFilter}
              handleRowsPerPage={this.handleRowsPerPage}
              rowsPerPage={rowsPerPage}
              total={totalRecords}
              index={sortIndex}
            />
          }
          sortIcon={<ChevronDown />}
        />
        <Sidebar
          show={sidebar}
          data={currentData}
          addData={this.props.addData}
          handleSidebar={this.handleSidebar}
          thumbView={this.props.thumbView}
          bodyarea={this.state.bodyarea||[]}
          getData={this.props.getData}
          dataParams={this.props.parsedFilter}
          service={this.props.service}
          addNew={this.state.addNew}
        />
        <div
          className={classnames("data-list-overlay", {
            show: sidebar
          })}
          onClick={() => this.handleSidebar(false, true)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    dataList: state.customer
  }
}

export default connect(mapStateToProps, {
  getData,
  addData,
  filterData
})(DataListConfig)