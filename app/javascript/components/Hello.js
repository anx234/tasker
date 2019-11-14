import React from "react"
import PropTypes from "prop-types"
import Lesson from './Lesson'
class Hello extends React.Component {

  render () {
    const lessonList = [
          {
            name: 'タスク管理',
            image: '/images/card1.jpg',
            introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
          },
          {
            name: 'タスク共有',
            image: '/images/card2.jpg',
            introduction: 'SassはCSSをより便利に効率的にするための言語です。',
          },

        ];

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

          {lessonList.map((lessonItem) => {
            return (
              <Lesson
              name={lessonItem.name}
              image={lessonItem.image}
              introduction={lessonItem.introduction}
              />
            );
          })}
          <section className="intro-main">
            <div className="explanation">
              <h3>課題解決に特化したSNS</h3>
              <p>日課や学校の宿題,会社の仕事のことなど、Task Shareで公開しましょう。他のユーザーはコメントで課題に協力できます。
              協力しフォローしてもらい、自分の課題にも協力してもらいましょう</p>
            </div>
            <div className="intro-box">
              <h3>宿題や課題などを公開しましょう</h3>
              <div className="intro-box__inner">
              公開し他の利用者と協力して解決しましょう！
              課題には期限が設定できます。期限内に解決できるよう頑張りましょう。
              </div>
            </div>

            <div className="intro-box">
              <h3>自分以外の課題に参加しましょう</h3>
              <div className="intro-box__inner">
              コメントで他の利用者の課題解決に協力しましょう。
              フォロワーを増やして、多くの人に協力してもらいましょう
              </div>
            </div>
          </section>
          <div className="login-link">
            <a href ="/users/new">新規登録はこちら</a>
          </div>
        </main>
      </div>

    );
  }
}

export default Hello
