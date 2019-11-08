FactoryBot.define do
  factory :comment do
    content { 'テストを書く' }
    task
    user
  end
end
