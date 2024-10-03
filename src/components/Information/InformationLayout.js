import React from "react";
import PropTypes from "prop-types";
import styles from "./../../css/information.module.css";

const InformationLayout = ({ isDrawValue }) => {
	return (
		<div
			className={`${styles.information} ${isDrawValue.includes(`Победа`) ? styles["information-win"] : ""}`}
		>
			{isDrawValue}
		</div>
	);
};

InformationLayout.propTypes = {
	isDrawValue: PropTypes.string,
};

export default InformationLayout;
