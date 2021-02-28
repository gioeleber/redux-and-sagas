import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAsync } from "./actions";

export default function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	const onFetchButtonClick = (userId) => {
		console.log("SAGA");
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>Learn Redux</h1>
				<button
					onClick={() => {
						dispatch(increment(2));
					}}
				>
					+
				</button>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					-
				</button>
				<br />
				<button
					onClick={() => {
						dispatch(incrementAsync());
					}}
				>
					Increment after 1 second
				</button>
				<br />
				<button onClick={onFetchButtonClick}>Saga!</button>

				<p>Counter: {counter}</p>
				{isLogged && <p>Sensible stuff</p>}
			</header>
		</div>
	);
}
