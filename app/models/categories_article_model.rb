class CategoriesArticleModel < ApplicationRecord
  belongs_to :category
  belongs_to :tasks
end
