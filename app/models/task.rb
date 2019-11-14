class Task < ApplicationRecord
    has_many :comments, dependent: :destroy
    belongs_to :user
    validates :name, presence: true, length: { maximum: 30 }
    scope :active, -> { where(limit_time: Date.today) }
    scope :past, -> {where("limit_time < ?", 1.day.ago)}



end
