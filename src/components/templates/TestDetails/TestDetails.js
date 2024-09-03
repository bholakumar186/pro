import React from "react";
import { withStyles } from "@mui/styles";
import { connect } from "react-redux";
import { getAllTestAction } from "../../../redux/actions/teacherTestAction";
import TestTable from "../../molecues/TestTable/TestTable";
import { Button } from "@mui/material";
import { goBackToAllTest } from "../../../redux/actions/teacherTestAction";
import ViewTest from "../CreateTestForm/ViewTest";

const useStyles = (theme)=> ({
  testDetails : {
    margin:'20px',
    display: 'inline-block',
    textAlign : 'center',
  },
  testTitle : {
    fontSize : '1.7em',
    textAlign : 'center',
    margin : '20px'
  }
})

class TestDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    if(this.props.testDetails.searched === true) {
      return(<div>
        <ViewTest/>
        <Button onClick={()=>(this.props.goBackToAllTest())}>Back</Button>
      </div>)
    }
    if(this.props.testDetails.retrived === false) {
      this.props.getAllTestAction();
      return (<div></div>)
    } else {
      return(<div>
        <div className={this.props.classes.testTitle} color="primary">All Tests</div>
        <TestTable></TestTable>
        </div>)
    }
  }
}

const mapStatetoProps = state => ({
  user : state.user,
  testDetails : state.testDetails
})

export default withStyles(useStyles)(connect(mapStatetoProps,{
  getAllTestAction,
  goBackToAllTest
})(TestDetails));