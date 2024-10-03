import React, { useState } from "react";

import GameLayout from "./GameLayout";

const Game = (props) => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	let isDrawValue;
	if (isDraw) {
		isDrawValue = `Ничья`;
	}
	if (!isDraw && isGameEnded) {
		isDrawValue = `Победа: ${currentPlayer}`;
	}
	if (!isDraw && !isGameEnded) {
		isDrawValue = `Ходит: ${currentPlayer}`;
	}

	return (
		<GameLayout
			field={field}
			setField={setField}
			isDrawValue={isDrawValue}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			WIN_PATTERNS={WIN_PATTERNS}
			setIsGameEnded={setIsGameEnded}
			isGameEnded={isGameEnded}
			setIsDraw={setIsDraw}
		/>
	);
};

export default Game;
