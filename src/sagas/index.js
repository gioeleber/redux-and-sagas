import {
	put,
	take,
	takeLatest,
	all,
	actionChannel,
	fork,
} from "redux-saga/effects";
import { buffers } from "redux-saga";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* connectSaga() {
	console.log("Saga is connected");
}

function* incrementAsync() {
	yield delay(1000);
	yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
	yield takeLatest("INCREMENT_ASYNC", incrementAsync);
}

function* watchIncrementSerialAsync() {
	const incrementSeialAsync = yield actionChannel(
		"INCREMENT_SERIAL_ASYNC",
		buffers.dropping(2)
	);
	while (true) {
		yield take(incrementSeialAsync);
		yield delay(1000);
		yield put({ type: "INCREMENT" });
	}
}

function* watchAndLog() {
	while (true) {
		yield take("INCREMENT");
		console.log("INCREMENT");
		yield take("DECREMENT");
		console.log("DECREMENT");
	}
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield fork(connectSaga());
	yield fork(watchIncrementAsync());
	yield fork(watchIncrementSerialAsync());
	yield fork(watchAndLog());
}
