import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { connect } from 'react-redux';
import { clearAlert } from '../../../redux/actions/alertAction';


class AlertBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    if(this.props.alertDetails.isAlert) {
      return(
        <Alert severity={this.props.alertDetails.type} onClose={this.props.clearAlert}>
           <AlertTitle>{this.props.alertDetails.title}</AlertTitle>
        {this.props.alertDetails.message}
        </Alert>)
    }
    else {

      return(<div></div>)
    }
  }
}

const mapStatetoProps = state => ({
  alertDetails : state.alertDetails
})

export default connect(mapStatetoProps,{
  clearAlert
})(AlertBox);