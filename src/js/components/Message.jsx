import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { message: state.message };
};
const MessageDiv = ({ message }) => (
    <div>{message}</div>
);
const Message = connect(mapStateToProps)(MessageDiv);

export default Message;