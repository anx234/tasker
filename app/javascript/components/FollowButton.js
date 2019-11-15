import React from "react"
import FollowFollower from './FollowFollower';
import PropTypes from "prop-types"

class FollowButton extends React.Component {

  constructor(props) {
  super(props);
  this.state = {isFollow: this.props.isFollow, followers: this.props.followers2, follows: this.props.follows2,isFollowerModalOpen: false, isFollowModalOpen: false};
  }


    openFollowerModal() {
      this.setState({isFollowerModalOpen: true});
      console.log(this.state);
    }

    closeFollowerModal() {
      this.setState({isFollowerModalOpen: false});
    }

    openFollowModal() {
      this.setState({isFollowModalOpen: true});
      console.log(this.state);
    }

    closeFollowModal() {
      this.setState({isFollowModalOpen: false});
    }

  follow(){
    $.ajax({
      type: 'POST', // HTTPのメソッド
      url: '/users/follow/',// リクエスト先のURL
      dataType: 'json', // リクエストの種類
      contentType: 'application/json', // レスポンスの種類
      data: JSON.stringify({
        user_id: this.props.user.id
      }) // 実際に送信するデータ
    }).done(function(followData){
      this.setState({isFollow: followData.isFollow});
      this.setState({followers: followData.followers});
      this.setState({follows: followData.follows});
    }.bind(this))
  }

  unfollow(){
    $.ajax({
      type: 'POST', // HTTPのメソッド
      url: '/users/unfollow/',// リクエスト先のURL
      dataType: 'json', // リクエストの種類
      contentType: 'application/json', // レスポンスの種類
      data: JSON.stringify({
        user_id: this.props.user.id
      }) // 実際に送信するデータ
    }).done(function(followData){
          this.setState({isFollow: followData.isFollow});
          this.setState({followers: followData.followers});
          this.setState({follows: followData.follows});
      }.bind(this))
  }

  render () {

    const followerUser = this.state.followers.map((follower) =>
    <FollowFollower name={follower.name} id={follower.id} greeting={follower.greeting} key={follower.id}/>
  );

  let modal;
  if (this.state.isFollowerModalOpen) {
    modal = (
      <div className='mod'>
        <div className='modal-inner'>
          <h3>フォロワー一覧</h3>
          <hr/>
          {followerUser}

          <button
          className='modal-close-btn'
          onClick={() => this.closeFollowerModal()}
          >
          とじる
          </button>
        </div>
      </div>
    );
  }

  const followUser = this.state.follows.map((follow) =>

  <FollowFollower name={follow.name} id={follow.id} greeting={follow.greeting} key={follow.id}/>
);

  let modal2;
  if (this.state.isFollowModalOpen) {
    modal2 = (

      <div className='mod'>
        <div className='modal-inner'>
          <h3>フォロー一覧</h3>
          <hr/>
          {followUser}

          <button
          className='modal-close-btn'
          onClick={() => this.closeFollowModal()}
          >
          とじる
          </button>
        </div>
      </div>

    );
  }

  const isFollowing = this.state.isFollow
  //const followers = this.state.followers
  return (

    <div className="follow">
      {this.props.viewfollowButton ?  <button className="follow-button" onClick={isFollowing ? () => this.unfollow() : () => this.follow()}>
      {isFollowing ? '解除' : 'フォロー'}
      </button> : ''}


      <div　className='follow-count-list'>
        フォロワー
        <div className='follow-count' onClick={() => {this.openFollowerModal()}}>
          {this.state.followers.length}
        </div>
        フォロー
        <div className='follow-count' onClick={() => {this.openFollowModal()}}>
          {this.state.follows.length}
        </div>

      </div>
      {modal}
      {modal2}
    </div>

  );
    }
  }

export default FollowButton
