import React from 'react'
import './index.css'

const Avatar = (() => {
    return (
    <img
        src="https://www.gravatar.com/avatar/nothing"
        className="avatar"
        alt="avatar" />
    );
})
const Message =((props) => {
    return (
        <div className="message">
        {props.input}
        </div>
    );
})
const NameWithHandle = ((props) => {
    return (
        <span className="name-with-handle">
        <span className="name">{props.name}</span>
        <span className="handle">@{props.handle}</span>
        </span>
    );
})

const Time = (props) => (<span className="time">{props.jam}h ago</span>);
const ReplyButton = () => (<i className="fa fa-reply reply-button"/>);
const RetweetButton = () => (<i className="fa fa-retweet retweet-button"/>);
const LikeButton = () => (<i className="fa fa-heart like-button"/>);
const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"/>);

const Tweet = ((props)=>{
    return (
        <>
            <div className="tweet">
            <Avatar/>
            <div className="content">
                <NameWithHandle name={props.name} handle={props.handle}/><Time jam={props.jam}/>
                <Message input={props.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>  
        </div>
        </>
    );
})
export default Tweet;