import React from "react"
import PropTypes from "prop-types"
import Follower from './Follower'
class FollowButton extends React.Component {

  constructor(props) {
  super(props);
  this.state = {isFollow: this.props.isFollow, followers: this.props.follower_count};
  }

  follow(){
  //this.setState({isFollow: true});
  //console.log(this.state);

  $.ajax({
    type: 'POST', // HTTPのメソッド
    url: '/users/follow/',// リクエスト先のURL
    dataType: 'json', // リクエストの種類
    contentType: 'application/json', // レスポンスの種類
    data: JSON.stringify({
      user_id: this.props.user.id
    }) // 実際に送信するデータ
  }).done(function(followData){
        //this.setState(isFollow: data);
      //
      this.setState({isFollow: followData.isFollow});
      this.setState({followers: followData.followers});
        //this.setState({isFollow: true});
        console.log(followData);
    }.bind(this))


  }

  unfollow(){
  //this.setState({isFollow: false});
  //console.log(this.state);

  $.ajax({
    type: 'POST', // HTTPのメソッド
    url: '/users/unfollow/',// リクエスト先のURL
    dataType: 'json', // リクエストの種類
    contentType: 'application/json', // レスポンスの種類
    data: JSON.stringify({
      user_id: this.props.user.id
    }) // 実際に送信するデータ
  }).done(function(followData){
        //this.setState(isFollow: data);
        //this.setState({isFollow: false});
        this.setState({isFollow: followData.isFollow});
        this.setState({followers: followData.followers});
      //  this.setState({isFollow: data});
        console.log(followData);
    }.bind(this))

  }

  render () {
    const isFollowing = this.state.isFollow
    const followers = this.state.followers
    var commentNodes = this.props.followers2.map(function (comment) {
  return (

    <Follower name={comment.name}/>



  );
});
    return (
      <div>
      <button className='modal-close-btn' onClick={isFollowing ? () => this.unfollow() : () => this.follow()}>
        {isFollowing ? '解除' : 'フォロー'}
      </button>

<p>{this.props.follow_count}</p>
<p>{followers}</p>

</div>

    );
  }
}

export default FollowButton
