class User < ApplicationRecord
      include Gravtastic
      gravtastic
      has_secure_password
      has_many :tasks, dependent: :destroy
      has_many :comments, dependent: :destroy
      validates :name, presence: true
      validates :email, presence: true#, uniqueness: true
      attr_accessor :activation_token
      before_create :create_activation_digest
      has_one_attached :image

      acts_as_followable # フォロワー機能
      acts_as_follower   # フォロー機能

      validate :image_presence
      has_many :active_notifications, class_name: 'Notification', foreign_key: 'visitor_id', dependent: :destroy
      has_many :passive_notifications, class_name: 'Notification', foreign_key: 'visited_id', dependent: :destroy

    def image_presence
      if image.attached?
        if !image.content_type.in?(%('image/jpeg image/png'))
          errors.add(:image, 'にはjpegまたはpngファイルを添付してください')
        end
      else
        errors.add(:image, 'ファイルを添付してください')
      end
    end



      def User.new_token
        SecureRandom.urlsafe_base64
      end

      def User.digest(string)
       cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
       BCrypt::Engine.cost
       BCrypt::Password.create(string, cost: cost)
      end

      def create_activation_digest
          self.activation_token  = User.new_token
          self.activation_digest = User.digest(activation_token)
      end

      def authenticated?(attribute, token)
        digest = send("#{attribute}_digest")
        return false if digest.nil?
        BCrypt::Password.new(digest).is_password?(token)
      end

      def activate
      update_attribute(:activated,    true)
      update_attribute(:activated_at, Time.zone.now)
      end

      # 引数のハッシュ値を返す



end
