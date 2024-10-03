import React from "react";
import PropTypes from "prop-types";
import styles from "./../../css/field.module.css";

const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	WIN_PATTERNS,
	setIsGameEnded,
	isGameEnded,
	setIsDraw,
}) => {
	const checkForDraw = (arrayToCheck) => {
		if (!arrayToCheck.includes("")) {
			setIsGameEnded(true);
			setIsDraw(true);
		}
	};

	return (
		<div className={styles.field}>
			{field.map((item, index) => {
				return (
					<div
						key={index}
						className={styles["game-sector"]}
						onClick={() => {
							if (!isGameEnded && field[index] === "") {
								const newField = [...field];
								newField[index] = currentPlayer;
								setField(newField);
								if (
									WIN_PATTERNS.some((pattern) =>
										pattern.every((index) => newField[index] === currentPlayer),
									)
								) {
									setIsGameEnded(true);
								} else {
									setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
									checkForDraw(newField);
								}
							}
						}}
					>
						{item}
					</div>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};

export default FieldLayout;
