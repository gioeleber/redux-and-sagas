import { put, take, takeLatest, all, select } from "redux-saga/effects";

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
	yield all([connectSaga(), watchIncrementAsync(), watchAndLog()]);
}
