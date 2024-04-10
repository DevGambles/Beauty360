import React from "react"
import "../../assets/scss/pages/authentication.scss"
import { getForm, submitConsentForm } from "../../redux/actions/client"
import consentLogo from "../../assets/img/logo/logo.png"
import { connect } from "react-redux"
import {
  Card,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  Row
} from "reactstrap"

import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/light.css"
import "../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import "../../assets/scss/custom.scss"
import Radio from "../../components/@vuexy/radio/RadioVuexy"
import {history} from "../../history"

import SignModal from './SignModal'
import jsPDF from 'jspdf'
import { toast } from 'react-toastify';
import Select from "react-select"
import SweetAlert from 'react-bootstrap-sweetalert';
import html2canvas from 'html2canvas';

import { getInitialData } from "../../redux/actions/mainSettings"
// import LoadingOverlay from 'react-loading-overlay';

const referredby = [
  {value: "Google/website", label: "Google/website"},
  {value: "Facebook", label: "Facebook"},
  {value: "Instagram", label: "Instagram"},
  {value: "Kijiji", label: "Kijiji"},
  {value: "Walk-in", label: "Walk-in"},
  {value: "Word of mouth", label: "Word of mouth"}
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

class Consentform extends React.Component {

  constructor(props){
    super(props);
    let url = this.props.location.pathname.split(":")[1];
    this.props.getForm(url);
  }
  state = {
    topDate : getToday(),
    birthdate: getToday(),
    basicquestions: [],
    mediahistory: [],
    bodyarea: [],
    status: false,
    signModal: false,
    signUrl : '',
    name: '',
    email: '',
    defaultAlert : false,
    confirmAlert : false,
    cancelAlert : false,
    saveAlert: false,
    successAlert: false,
    isActive: false,
    consent: {
      title: "Consent Laser Hair Removal",
      consent1: "",
      consent2: "",
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      signModal: !prevState.signModal
    }))
  }

  handler = (value,target, url) => {
    this.setState({ [target]: value,signUrl: url })
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.response !== this.props.response && this.props.response.status && null !== this.props.response.emailSent) {
      this.setState({
        "saveAlert": false,
        "successAlert": true
      })
    }

    if(!this.props.response.status){
      history.push('/error');
    }

    this.props.getInitialData(this.props.response.service);
    this.state.consent.title = this.props.mainSettings.title;
    this.state.consent.consent1 = this.props.mainSettings.consent1;
    this.state.consent.consent2 = this.props.mainSettings.consent2;
  }

  handleAlert = (state, value) => {
    this.setState({ [state] : value })
  }

  async submit(){
    this.handleAlert("saveAlert", true);
    // this.setState({isActive: true});
    let formData = new FormData();;
    let contactsInfo = document.querySelectorAll('#contact-info input');
    let signInfo = document.querySelectorAll('#page2 input');
    let contactsInfoData = {}
    let signInfoData = {}

    contactsInfo.forEach(element => {
      contactsInfoData[element.getAttribute('name')] = element.value;
    });
    contactsInfoData['topdate'] = this.state.topDate;
    contactsInfoData['birthdate'] = this.state.birthdate;
    contactsInfoData['bodyarea'] = this.state.bodyarea;
    formData.append('service', this.props.response.service);
    formData.append('userId', this.props.response.userId);
    formData.append('contactInfo', JSON.stringify(contactsInfoData));

    signInfo.forEach(element => {
      signInfoData[element.getAttribute('name')] = element.value;
    });
    signInfoData['sign'] = /*this.state.signUrl*/'';
    formData.append('signInfo', JSON.stringify(signInfoData));

    if(window.innerWidth < 1024){
      document.getElementById("viewport").setAttribute("content", "width=1200px");
    }

    // this.props.submitConsentForm({});
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const doc = new jsPDF('p', 'px', 'a4');

    html2canvas(page1, {
      useCORS: true,
    }).then(canvas => {
      const image = canvas.toDataURL('image/jpeg', 1.0);
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      const marginX = (pageWidth - canvasWidth) / 2;
      const marginY = (pageHeight - canvasHeight) / 2;
      canvas.toBlob(blob => {
        blob.name = "page1";
        var fileUrl1 =  URL.createObjectURL(blob);
        blob.name = "page1";
        window.URL.revokeObjectURL(fileUrl1);
        fileUrl1 = window.URL.createObjectURL(blob);
        // window.URL.revokeObjectURL(this.fileUrl);
        // fileUrl = window.URL.createObjectURL(blob);
        // resolve({fileUrl : fileUrl,blob : blob});

        html2canvas(page2, {
          useCORS: true,
        }).then(canvas2 => {
          const image1 = canvas2.toDataURL('image/jpeg', 1.0);
          const pageWidth1 = doc.internal.pageSize.getWidth();
          const pageHeight1 = doc.internal.pageSize.getHeight();

          const widthRatio1 = pageWidth1 / canvas2.width;
          const heightRatio1 = pageHeight1 / canvas2.height;
          const ratio1 = widthRatio1 > heightRatio1 ? heightRatio1 : widthRatio1;

          const canvasWidth1 = canvas2.width * ratio1;
          const canvasHeight1 = canvas2.height * ratio1;

          const marginX1 = (pageWidth1 - canvasWidth1) / 2;
          const marginY1 = (pageHeight1 - canvasHeight1) / 2;
          canvas2.toBlob(blob2 => {
            blob2.name = "page2";
            var fileUrl2 =  URL.createObjectURL(blob2);
            blob2.name = "page2";
            window.URL.revokeObjectURL(fileUrl2);
            fileUrl2 = window.URL.createObjectURL(blob2);


            formData.append('page1', blob);
            formData.append('page2', blob2);
            formData.append('margin1',JSON.stringify({w: canvasWidth, h: canvasHeight, mx: marginX, my: marginY}));
            formData.append('margin2', JSON.stringify({w: canvasWidth1, h: canvasHeight1, mx: marginX1, my: marginY1}));
            this.props.submitConsentForm(formData);
            document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=1");
          },'image/jpeg');
        });

      }, 'image/jpeg');
    });

  }

  async handleSubmit(e) {
    e.preventDefault();
    if(!this.state.signUrl){
      toast.warn('Please sign the consent form.');
      return;
    }

    this.setState({ defaultAlert : true });
  }

  async handleDownload(e){
    e.preventDefault();
    if(!this.state.signUrl){
      toast.warn('Please sign the consent form.');
      return;
    }

    if(window.innerWidth < 1024){
      document.getElementById("viewport").setAttribute("content", "width=1200px");
    }

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const doc = new jsPDF('p', 'px', 'a4');

    html2canvas(page1, {
      useCORS: true,
    }).then(canvas => {
      const image = canvas.toDataURL('image/jpeg', 1.0);
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      const marginX = (pageWidth - canvasWidth) / 2;
      const marginY = (pageHeight - canvasHeight) / 2;

      doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
      doc.addPage()

      html2canvas(page2, {
        useCORS: true,
      }).then(canvas2 => {
        const image1 = canvas2.toDataURL('image/jpeg', 1.0);
        const pageWidth1 = doc.internal.pageSize.getWidth();
        const pageHeight1 = doc.internal.pageSize.getHeight();

        const widthRatio1 = pageWidth1 / canvas2.width;
        const heightRatio1 = pageHeight1 / canvas2.height;
        const ratio1 = widthRatio1 > heightRatio1 ? heightRatio1 : widthRatio1;

        const canvasWidth1 = canvas2.width * ratio1;
        const canvasHeight1 = canvas2.height * ratio1;

        const marginX1 = (pageWidth1 - canvasWidth1) / 2;
        const marginY1 = (pageHeight1 - canvasHeight1) / 2;

        doc.addImage(image1, 'JPEG', marginX1, marginY1, canvasWidth1, canvasHeight1);

        doc.save('Ink Diva Beauty Consent Form - '+this.state.name+'.pdf');

        document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=1");
      });
    });
  }

  render() {
    let {
      topDate,
      birthdate,
      signUrl,
      name,
      email
    } = this.state
    return (
      <Card style={{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",overflow:"auto"}}>
        <CardBody className="container">
          <Form id="pdfbody" onSubmit={(e)=>this.handleSubmit(e)}>
            <div id="page1" className="pl-3 pr-3">
              <div className="col-sm-12 col-xs-12 consent-logo">
                <img src={consentLogo} alt="" style={{position:"absolute"}} width={200}/>
              </div>
              <div id="contact-info">
                <FormGroup row>
                  <Col md={{ size: 6, offset: 6 }} >
                    <span>Date:</span>
                    <Flatpickr
                      required
                      name="topdate"
                      className="form-control"
                      value={topDate}
                      onChange={date => {
                        this.setState({ topDate : date });
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 6, offset: 6 }}>
                    <span>Referred by:</span>
                    <Select
                      className="React"
                      classNamePrefix="select"
                      name="referredby"
                      options={referredby}
                      >
                  </Select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <span>Name & Surname:</span>
                    <Input
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={e => {this.setState({name: e.target.value})}}
                      placeholder="John Doe"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="8">
                    <span>Address:</span>
                    <Input
                      required
                      type="text"
                      name="address"
                      id="address"
                      placeholder=""
                    />
                  </Col>
                  <Col md="4" >
                    <span>Postal Code:</span>
                    <Input
                      required
                      type="text"
                      name="postalcode"
                      id="postalcode"
                      placeholder="14523"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4" >
                    <span>City:</span>
                    <Input
                      required
                      type="text"
                      name="city"
                      id="city"
                      placeholder=""
                    />
                  </Col>
                  <Col md="4" >
                    <span>Phone:</span>
                    <Input
                      required
                      type="number"
                      inputMode="numeric"
                      name="phone"
                      id="phone"
                      placeholder=""
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="8" >
                    <span>Areas to be treated:</span>
                    <Select
                      className="React"
                      classNamePrefix="select"
                      isMulti
                      name="bodyarea"
                      options={this.props.response.bodyarea}
                      onChange={e => {this.setState({bodyarea: e})}}
                      >
                      </Select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="5" >
                    <span>Date of birth:</span>
                    <Flatpickr
                      required
                      name="birthdate"
                      className="form-control"
                      value={birthdate}
                      onChange={date => {
                        this.setState({ birthdate : date });
                      }}
                      />
                  </Col>
                  <Col md="5" >
                    <span>Email:</span>
                    <Input
                      required
                      type="email"
                      name="email"
                      id="Email"
                      placeholder="Email"
                      value={email}
                      onChange={e => {this.setState({email: e.target.value})}}
                    />
                  </Col>
                </FormGroup>
              </div>
          <Row>
            {
              this.props.response.basicquestions?
                this.props.response.basicquestions.map((Item, i)=>{
                  if(Item.category === 'Check'){
                      if(i % 2 === 0)
                        return (
                              <Col md='6' key={i} className="question-center">
                                    <div className="d-inline-block mr-1 col-md-3">{Item.question}</div>
                                    <div className="d-inline-block mr-1">
                                      <Radio label="Yes" defaultChecked={false} name={Item._id} />
                                    </div>
                                    <div className="d-inline-block mr-1">
                                      <Radio label="No" defaultChecked={false} name={Item._id} />
                                    </div>
                                </Col>
                            )
                      else{
                        return (
                          <Col md='6' key={i} className="question-center">
                            <div className="d-inline-block mr-1 col-md-3">{Item.question}</div>
                                <div className="d-inline-block mr-1">
                                  <Radio label="Yes" defaultChecked={false} name={Item._id} />
                                </div>
                                <div className="d-inline-block mr-1">
                                  <Radio label="No" defaultChecked={false} name={Item._id} />
                                </div>
                            </Col>
                        )
                      }
                    }
                    else{
                      if(i % 2 === 0){
                        return (<Col  md='6'  key={i} className="question-center">
                                  <div className="d-inline-block mr-1 col-md-3">{Item.question}</div>
                                    <Input type="text" name={Item.question} id={Item._id} />
                                </Col>)
                      }
                      else{
                        return (<Col  md='6'  key={i} className="question-center">
                                  <div className="d-inline-block mr-1 col-md-3">{Item.question}</div>
                                    <Input type="text" name={Item.question} id={Item._id} />
                                </Col>)
                      }
                    }
                  }
                ):null
            }
          </Row>
            <h3 className="text-center mt-2" >Medical History</h3>
            {/* Mdical History */}
            <Row>
            {
              this.props.response.mediahistory?
                this.props.response.mediahistory.map((Item, i)=>{
                      if(i % 2 === 0)
                        return (
                              <Col md='6' key={i} className="question-center">
                                <div className="d-inline-block mr-1 col-md-3">{Item.question}</div>
                                    <div className="d-inline-block mr-1">
                                      <Radio label="Yes" defaultChecked={false} name={Item._id} />
                                    </div>
                                    <div className="d-inline-block mr-1">
                                      <Radio label="No" defaultChecked={false} name={Item._id} />
                                    </div>
                                </Col>
                            )
                      else{
                        return (
                          <Col md='6' key={i} className="question-center">
                            <div className="d-inline-block mr-1 col-md-3">{Item.question}</div>
                                <div className="d-inline-block mr-1">
                                  <Radio label="Yes" defaultChecked={false} name={Item._id} />
                                </div>
                                <div className="d-inline-block mr-1">
                                  <Radio label="No" defaultChecked={false} name={Item._id} />
                                </div>
                            </Col>
                        )
                      }
                  }
                ):null
            }
          </Row>
          <FormGroup row className="mt-3">
              <Col md="10" >
                  <span>Comment:</span>
                  <Input
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder=""
                  />
                </Col>
            </FormGroup>
            </div>
            <div id="page2" className="pl-3 pr-3">
            <h2 className="text-center mt-3 mb-3">{this.state.consent.title}</h2>
            <div className="container" style={{margin:"0 auto"}}>
              <p style={{ whiteSpace: 'pre-line' }}>{this.state.consent.consent1}</p>
              <br />
              <b>
              {this.state.consent.consent2}
              </b>
            </div>
            <FormGroup row className="mt-3">
                <Col md={{ size: 1, offset: 2 }} >
                  <span>Name:</span>
                </Col>
                <Col md="6">
                  <Input
                    type="text"
                    name="sign_name"
                    id="sign_name"
                    placeholder="John Doe"
                    value={name}
                    readOnly
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Col md={{ size: 1, offset: 2 }} >
                  <span>Date:</span>
                </Col>
                <Col md="2" sm="4">
                  <Input
                      type="text"
                      name="signdate"
                      id="sign_name"
                      value={topDate}
                      readOnly
                    />
                </Col>
                <Col md={{size:6, offset:1}} className='row'>
                  <Col md='4'>
                    <Button.Ripple
                      color="primary"
                      type="button"
                      className="mr-1 mb-1"
                      onClick={this.toggleModal}
                    >
                    Signature
                  </Button.Ripple>
                  </Col>
                  <Col md='8'>
                    {signUrl !== '' ? <img src={signUrl} alt='Sign' width='150' height='50'/> : ''}

                  </Col>
                </Col>
              </FormGroup>
            </div>

              <SignModal {...this.state} handler={(v,t,url)=>this.handler(v,t,url)}/>

            <FormGroup row>
              <Col md={{ size: 12 }} className="text-center">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                  // onClick={()=>this.handleSubmit(this.printDocument)}
                >
                  Submit
                </Button.Ripple>

                <Button.Ripple
                  outline
                  color="warning"
                  type="reset"
                  className="mb-1"
                >
                  Reset Form
                </Button.Ripple>
                <Button.Ripple
                  outline
                  color="success"
                  type="submit"
                  className="ml-1 mb-1"
                  type="submit"
                  onClick={(e)=>this.handleDownload(e)}
                >
                  Download PDF
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
          <SweetAlert title="Are you sure?"
            warning
            show={this.state.defaultAlert}
            showCancel
            reverseButtons
            cancelBtnBsStyle="danger"
            confirmBtnText="Yes, Submit!"
            cancelBtnText="Cancel"
            onConfirm={() => {
              this.handleAlert("basicAlert", false)
              this.handleAlert("defaultAlert", false)
              // this.handleAlert("confirmAlert", true)
              this.submit()
            }}
            onCancel={() => {
              this.handleAlert("basicAlert", false)
              this.handleAlert("defaultAlert", false)
            }}
          >
            You won't be able to revert this!
        </SweetAlert>

        <SweetAlert success title="Please wait"
          confirmBtnBsStyle="success"
          showConfirm={false}
          showCancel={false}
          show={this.state.saveAlert}
        >
            <p className="sweet-alert-text">Please wait, we are saving your consent form and sending via email.</p>
        </SweetAlert>
        <SweetAlert success title="Success"
          confirmBtnBsStyle="success"
          show={this.state.successAlert}
          onConfirm={() => {
            this.handleAlert("saveAlert", false)
            this.handleAlert("successAlert", false)
          }}
        >
            <p className="sweet-alert-text">Your record has been successfully saved.<br/>You will receive your signed form via email shortly.</p>
        </SweetAlert>

        <SweetAlert success title="Deleted!"
          confirmBtnBsStyle="success"
          show={this.state.confirmAlert}
          onConfirm={() => {
            this.handleAlert("defaultAlert", false)
            this.handleAlert("confirmAlert", false)
          }}
        >
            <p className="sweet-alert-text">Your file has been deleted.</p>
        </SweetAlert>

        <SweetAlert error title="Cancelled"
          confirmBtnBsStyle="success"
          show={this.state.cancelAlert}
          onConfirm={() =>{
            this.handleAlert("defaultAlert", false)
            this.handleAlert("cancelAlert", false)
          }}
        >
            <p className="sweet-alert-text">
              Your imaginary file is safe :)
            </p>
        </SweetAlert>


        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state) => (
{
  response : state.client,
  mainSettings: state.mainSettings
})
export default connect(mapStateToProps, { getForm, submitConsentForm, getInitialData })(Consentform)
