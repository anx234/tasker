import React from "react"
import PropTypes from "prop-types"
import FollowModal from './FollowModal'
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
      this.setState({follows: followData.follows});
        //this.setState({isFollow: true});
        console.log(followData);
        console.log(followers);
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
        this.setState({follows: followData.follows});
      //  this.setState({isFollow: data});
        console.log(followData);
        console.log(followers);
    }.bind(this))

  }

  render () {

    const listItems = this.state.followers.map((follower) =>


<div className='follow-list'>

      <a href ={'/users/'+follower.id}>{follower.name}</a>


      {follower.greeting}

      </div>


    );
    let modal;
       if (this.state.isFollowerModalOpen) {
         modal = (
           <div>
           <div className='mod'>
                   <div className='modal-inner'>

                   <h2>フォロワー一覧</h2>

                   <hr/>
           {listItems}

         <button
         className='modal-close-btn'
         onClick={() => this.closeFollowerModal()}
         >
         とじる
         </button>
         </div>
       </div>
         </div>
         );
       }

       const listItems2 = this.state.follows.map((follow) =>
       <div>
         <div className='follow-list'>
         <a href ={'/users/'+follow.id}>{follow.name}</a>
        
         {follow.greeting}
         </div>
         </div>
       );

       let modal2;
          if (this.state.isFollowModalOpen) {
            modal2 = (
              <div>
              <div className='mod'>
                      <div className='modal-inner'>
                      <h2>フォロー一覧</h2>
              {listItems2}

            <button
            className='modal-close-btn'
            onClick={() => this.closeFollowModal()}
            >
            とじる
            </button>
            </div>
          </div>
            </div>
            );
          }


    const isFollowing = this.state.isFollow
    //const followers = this.state.followers



    return (

      <div>
      {this.props.viewfollowButton ?       <button className='modal-close-btn' onClick={isFollowing ? () => this.unfollow() : () => this.follow()}>
              {isFollowing ? '解除' : 'フォロー'}
            </button> : ''}
<div className='follow'>

<div　className='follow'>
フォロー
<div className='follow-count' onClick={() => {this.openFollowerModal()}}>
{this.state.followers.length}
</div>
フォロワー
<div className='follow-count' onClick={() => {this.openFollowModal()}}>
{this.state.follows.length}
</div>
</div>
</div>

{modal}
{modal2}
</div>

    );
  }
}

export default FollowButton
