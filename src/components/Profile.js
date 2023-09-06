import React from "react";

function Profile() {
    return (
        <React.Fragment>
            <div class="profile">
                <img class="profilepic" src='/favicon.ico' alt='profile pic'></img>
                <p class='profilename'>John Doe</p>
                <div class="profile-links">
                    <a href='something'>tweets</a>&nbsp;&nbsp;&nbsp;<a href='stuff'>following</a>&nbsp;&nbsp;&nbsp;<a href='whatever'>followers</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;