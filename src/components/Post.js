import React from "react";
import PropTypes from "prop-types";

function Post(props) {
    return (
        <React.Fragment>
            <img class="feedpics" src={props.pic} alt="profile pic"></img>
            <h3>{props.userName}</h3>
            <p>{props.text}</p>
            <hr />
        </React.Fragment>
    );
}

Post.propTypes = {
    pic: PropTypes.node,
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Post;