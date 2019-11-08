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

<div className='footer-logo'>


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
</main>
          </div>

    );
  }
}

export default Hello
