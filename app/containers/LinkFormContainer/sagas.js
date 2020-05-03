import { call, put } from "redux-saga/effects";
import { ADD_LINK, ADD_LINK_CANCEL } from "./constants";
import { addLinkSuccess, addLinkError } from "./actions";
import { takeLatest } from "redux-saga";
import { createLink } from "../../api";
import { goBack } from "react-router-redux";
// Individual exports for testing

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addLinkError(action.link, e.message));
  }
}

export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

export function* addLinkCancelSaga() {
  yield* takeLatest(ADD_LINK_CANCEL, () => put(goBack()));
}
// All sagas to be loaded
export default [addLinkSaga, addLinkCancelSaga];
