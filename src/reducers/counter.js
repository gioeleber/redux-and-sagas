export default function counter(state = 0, action) {
	switch (action.type) {
		case "INCREMENT":
			return state + (action.payload || 1);
		case "DECREMENT":
			return state - (action.payload || 1);
		default:
			return state;
	}
}
