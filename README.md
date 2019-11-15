
## 概要

TaskShareは日々のタスクを管理、共有できるSNSです。
## このアプリは新規登録にメール認証を用いています。面倒な場合は以下ユーザーでログインしてください。
メールアドレス：test1@example.com
パスワード：　password

## 何ができるのか？（機能）

TaskShare(https://task-share-ak.herokuapp.com)は、以下のことができます。
- タスクを追加/編集/削除
- タスクの検索
- 自身のタスク数/期限が迫ったタスク数/期限が切れたタスク数を表示
- タスクにコメントする
- タスクにコメントがあった場合アプリ内で通知
- ユーザーのフォロー/アンフォロー機能


## どうやってできているのか？（技術）

TaskShare(https://task-share-ak.herokuapp.com)は、以下のことができます。

- Rails
- Heroku
- React
- AWS S3（プロフィール画像置き場）

テストRspec

## 特徴・工夫

ReactによるSPA
- フォロー/解除にajaxを使用
- フォロワー・フォロー一覧をモーダルで表示
