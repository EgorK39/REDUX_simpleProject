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

const items = document.querySelector(".testUl");
const testButton = document.querySelector(".testButton");
const inputValue = document.querySelector(".testInput");


store.subscribe(() => {
    console.log(store.getState());
    items.innerHTML = "";
    inputValue.value = "";
    store.getState().map(item => {
        const li = document.createElement("li");
        li.textContent = item;
        items.appendChild(li);
    });

});

testButton.addEventListener("click", () => {
    console.log("inputValue", inputValue);
    store.dispatch({type: "WRITE", payload: inputValue.value});

});


reactDOM.render(<App/>, document.getElementById("root"));