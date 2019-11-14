class Task < ApplicationRecord
    has_many :comments, dependent: :destroy
    belongs_to :user
    validates :name, presence: true, length: { maximum: 30 }
    scope :active, -> { where(limit_time: Date.today) }
    scope :past, -> {where("limit_time < ?", 1.day.ago)}
    has_many :notifications, dependent: :destroy

    def create_notification_comment!(current_user, comment_id)
        # 自分以外にコメントしている人をすべて取得し、全員に通知を送る

        # まだ誰もコメントしていない場合は、投稿者に通知を送る
        save_notification_comment!(current_user, comment_id, user_id)
      end

      def save_notification_comment!(current_user, comment_id, visited_id)
        # コメントは複数回することが考えられるため、１つの投稿に複数回通知する
        notification = current_user.active_notifications.new(
          task_id: id,
          comment_id: comment_id,
          visited_id: visited_id,
          action: 'comment'
        )
        # 自分の投稿に対するコメントの場合は、通知済みとする
        if notification.visitor_id == notification.visited_id
          notification.checked = true
        end
        notification.save if notification.valid?
      end


end
