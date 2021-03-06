export const increment = (nr) => {
	return { type: "INCREMENT", payload: nr };
};

export const decrement = () => {
	return { type: "DECREMENT" };
};

export const incrementAsync = () => {
	return { type: "INCREMENT_ASYNC" };
};

export const incrementSeialAsync = () => {
	return { type: "INCREMENT_SERIAL_ASYNC" };
};
