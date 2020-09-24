import profileReducer, {addPost, deletePost} from "./profile_reducer";
import React from 'react';

let state = {
    posts: [
        {
            id: 1,
            message: 'Hello!',
            likesCount: 1005,
            dislikesCount: 105,
            url: 'https://pixy.org/src/480/thumbs190/4800648.jpg'
        },
        {
            id: 2,
            message: 'How"re you?',
            likesCount: 100500,
            dislikesCount: 1050,
            url: 'https://cache.desktopnexus.com/thumbseg/1753/1753481-bigthumbnail.jpg'
        },
        {
            id: 3,
            message: 'How"s your life?',
            likesCount: 1050,
            dislikesCount: 150,
            url: 'https://hdwallsbox.com/wallpapers/m/12/nature-flowers-macro-m11645.jpg'
        },
        {
            id: 4,
            message: 'How"s your day?',
            likesCount: 150,
            dislikesCount: 15,
            url: 'https://avatars.mds.yandex.net/get-pdb/1590269/e908d30d-87d8-47e8-9c56-c5d92fd9ff79/s375'
        },
    ],
    likesCountDefault: 10,
    dislikesCountDefault: 1,
    urlDefault: 'https://www.akibanation.com/wp-content/uploads/2016/07/Kon.BLEACH.full_.170410-150x150.jpg',
    // urlDefault: antPortrait,
    profile: null,
    status: 'default status',
};

test('length post should be incremented', () => {
    // 1. test data
    let action = addPost('My first TDD')
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPost('My first TDD');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].message).toBe('My first TDD');
});

test('after deleting length should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('after deleting length should not be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(10000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
