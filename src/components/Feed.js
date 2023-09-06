import React from "react";
import Post from "./Post";

const feedList = [
    {
        pic: '/favicon.ico',
        userName: 'Joshua',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'Pier',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'More',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'Test',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'Examples',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'It',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'Goes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'On',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'And',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'On',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'And',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    },
    {
        pic: '/favicon.ico',
        userName: 'On',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue id molestie iaculis. Nam at dolor erat. Suspendisse bibendum ex sed dolor dapibus interdum.'
    }
];

function Feed() {
    return (
        <React.Fragment>
            <div class="feed">
                <div class="happening-container">
                    <img src="/favicon.ico" alt="it's an thing"></img>
                    <input id="happening-input" type="text" placeholder="Whats happening" />
                    <button class="happening-bar-button">&#128269;</button>
                </div>
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