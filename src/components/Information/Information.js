import React from "react";
import PropTypes from "prop-types";
import InformationLayout from "./InformationLayout";

const Information = ({ isDrawValue }) => {
	return <InformationLayout isDrawValue={isDrawValue} />;
};

Information.propTypes = {
	isDrawValue: PropTypes.string,
};

export default Information;
