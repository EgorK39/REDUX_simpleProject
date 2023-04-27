import React from "react";
import reactDOM from "react-dom";
import App from "./components/App";
import "./fonts/Cormorant/Cormorant-SemiBoldItalic.ttf";
import "./index.css";
import {legacy_createStore as createStore} from "redux";

const store = createStore(changeStore);

function changeStore(state = [], action) {
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
store.subscribe(() => {
    console.log(store.getState());
    const items = document.querySelector(".testUl");
    items.innerHTML = "";
    document.querySelector(".testInput").value = "";
    store.getState().map(item => {
        const li = document.createElement("li");
        li.textContent = item;
        items.appendChild(li);
    });

});

const testButton = document.querySelector(".testButton");
testButton.addEventListener("click", () => {
    const inputValue = document.querySelector(".testInput").value;
    console.log("inputValue", inputValue);
    store.dispatch({type: "WRITE", payload: inputValue});

});


reactDOM.render(<App/>, document.getElementById("root"));