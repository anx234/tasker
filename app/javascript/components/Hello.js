import React from "react"
import PropTypes from "prop-types"
import Lesson from './Lesson'

class Hello extends React.Component {

  render () {


    return (

      <div className='home'>
        <header className='home-header'>
          <h1>Task Share</h1>
        </header>

        <main className="main-content">
          <section className="intro-section">
            <h1>Task Shareとは</h1>
            <p>タスクを共有できるサービスです。</p>
          </section>

          <div className="explanation">
            <h3>課題解決に特化したSNS</h3>
            <p>日課や学校の宿題など様々なタスクを、Task Shareで公開しましょう。他のユーザーはコメントで課題に協力できます。
            多くのユーザーと繋がり、多くのタスクを完了していきましょう。</p>
          </div>
          <div className="task-list">
    <div className="task-list__content">
    <h3>タスク管理</h3>
    <hr/>
    <p>タスクを登録しましょう。タスクには期限やカテゴリーなど設定できます。</p>
    </div>
    <div className="task-list__content">
    <h3>タスク共有</h3>
    <hr/>
    <p>登録したタスクは他のユーザーに公開されます。他のユーザーと協力してタスクを完了させましょう</p>
    </div>
    <div className="task-list__content">
    <h3>フォロー機能</h3>
    <hr/>
    <p>他のユーザーのタスクに参加し、フォロワーを増やしていきましょう。多くのフォロワーに協力してもらえれば早くタスクを解決できます。</p>
    </div>
    <div className="task-list__content">
    <h3>コメント通知機能</h3>
    <hr/>
    <p>他のユーザーがあなたのタスクにコメントすると、通知を受け取れます。</p>
    </div>

  </div>



<section className="second-section">
        <h2 className="second-title">こんなシーンで役に立ちます。</h2>
        　<div className="second-colum">
        　<div className="second-colum__content">
        　<i className="fas fa-chalkboard-teacher fa-3x"></i>
        	<h4>学校や仕事</h4>


        　</div>
        　<div className="second-colum__content">
        　<i className="far fa-clock fa-3x"></i>
        	<h4>日常生活</h4>


        　 </div>
        <div className="second-colum__content">
        　<i className="far fa-clock fa-3x"></i>
        	<h4>遊び</h4>


        　 </div>
        </div>
</section>

        <div className="third-colum">
  <i className="far fa-envelope fa-5x"></i>

     <div className="login-link">
       <a href ="/users/new">新規登録はこちら</a>
     </div>

</div>


        </main>
      </div>

    );
  }
}

export default Hello
