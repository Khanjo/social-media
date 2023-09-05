import React from "react";
import Post from "./Post";

const feedList = [
    {
        pic: '',
        userName: 'Joshua',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '',
        userName: 'Pier',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '',
        userName: 'More',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '',
        userName: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '',
        userName: 'Examples',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    }
];

function Feed() {
    return (
        <React.Fragment>
            <div class="feed">
                <div class="posts">
                    {feedList.map((post, index) =>
                        <Post pic={post.pic}
                            userName={post.userName}
                            text={post.text}
                            key={index} />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Feed;