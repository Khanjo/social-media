import React from "react";

const friendsList = [
    {
        pic: '/favicon.ico',
        friendsName: 'Friend1',
    },
    {
        pic: '/favicon.ico',
        friendsName: 'Friend2',
    },
    {
        pic: '/favicon.ico',
        friendsName: 'Friend3',
    },
];

function Friends() {
    return (
        <React.Fragment>
            <div class="friends">
                {friendsList.map((friend, index) => (
                    <div key={index} class="friend">
                        <img class="friendsPic" src={friend.pic} alt={`friend-${index}`} />
                        <p>{friend.friendsName}</p>
                        <button class="add-button">Add Friend</button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default Friends;