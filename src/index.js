import React from "react";
import reactDOM from "react-dom";
import App from "./components/App";
import "./fonts/Cormorant/Cormorant-SemiBoldItalic.ttf";
import "./index.css";
import {legacy_createStore as createStore} from "redux";
import ReduxApp from "./redux/ReduxApp";
import {Provider} from "react-redux";

const initialState = ["redux", "react"];
const store = createStore(changeStore);

function changeStore(state = initialState, action) {
    console.log("changeStore", state, "action", action);
    switch (action.type) {
        case "WRITE":
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

console.log("store", store);
console.log("store.getState()", store.getState());


reactDOM.render(
    <>
        <Provider store={store}>
            <ReduxApp/>
        </Provider>
        <App/>
    </>,
    document.getElementById("root"));