import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class ReduxApp extends React.Component {
    addLibrary() {
        console.log("addLibrary", this.inputValue.value);
        this.props.addElement(this.inputValue.value);
        this.inputValue.value = "";
    }

    render() {
        console.log("ReduxApp this.props", this.props);
        return (
            <div className="font-cormorant">
                <input type="text" ref={(input) => {
                    this.inputValue = input;
                }
                }/>
                <button onClick={this.addLibrary.bind(this)}>Click</button>
                <ul>
                    {this.props.testStore.map(item =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        );
    }
}

ReduxApp.propTypes = {
    testStore: PropTypes.array,
    addElement: PropTypes.func,
};

export default connect(
    // mapStateToProps
    state => ({
        testStore: state
    }),
    // mapDispatchToProps
    dispatch => ({
        addElement: (elem) => {
            console.log("elem", elem);
            dispatch({type: "WRITE", payload: elem});
        }
    })
)(ReduxApp);