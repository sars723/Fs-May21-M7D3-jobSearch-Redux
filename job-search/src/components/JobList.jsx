import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavoriteCompanyAction } from "../actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavoriteCompanies: (companyToAdd) =>
    dispatch(addToFavoriteCompanyAction(companyToAdd)),
});

const JobList = (props) => {
  return (
    <div>
      <p /* onClick={() => props.history.push("/jobDetails", props.job)} */>
        {props.job.company_name}
        <Badge
          style={{ cursor: "pointer" }}
          onClick={() => props.addToFavoriteCompanies(props.job.company_name)}
          className="ml-3"
          variant="info"
        >
          {" "}
          add to favorite
        </Badge>
      </p>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobList));
