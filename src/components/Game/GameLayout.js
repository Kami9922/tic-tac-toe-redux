import React from "react";
import PropTypes from "prop-types";
import Information from "../Information/Information";
import Field from "../Field/Field";
import styles from "./../../css/game.module.css";

const GameLayout = ({
	isDrawValue,
	field,
	currentPlayer,
	setCurrentPlayer,
	setField,
	WIN_PATTERNS,
	setIsGameEnded,
	isGameEnded,
	setIsDraw,
}) => {
	return (
		<div>
			<Information isDrawValue={isDrawValue} />
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				WIN_PATTERNS={WIN_PATTERNS}
				setIsGameEnded={setIsGameEnded}
				isGameEnded={isGameEnded}
				setIsDraw={setIsDraw}
			/>
			<div
				className={styles["reset-button"]}
				onClick={() => {
					setCurrentPlayer("X");
					setField(["", "", "", "", "", "", "", "", ""]);
					setIsDraw(false);
					setIsGameEnded(false);
				}}
			>
				Начать заново
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDrawValue: PropTypes.string,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};

export default GameLayout;
