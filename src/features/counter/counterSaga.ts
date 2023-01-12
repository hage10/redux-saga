import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from "redux-saga/effects";

export function log(acction: PayloadAction) {
    console.log("log", acction);

}
export default function* counterSaga() {
    console.log("counterSaga");
    yield takeEvery('*', log);
    yield takeEvery('*', log);
}