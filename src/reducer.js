export const initialState = {};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "": {
			return payload;
		}
		default:
			return state;
	}
};
