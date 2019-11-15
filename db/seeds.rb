# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.create(name: "生活")
Category.create(name: "学校")
Category.create(name: "仕事")
Category.create(name: "勉強")
Category.create(name: "スポーツ")
Category.create(name: "その他")

testuser=User.create!(name:  "Example User",
             email: "ex@example.com",
             password:              "password",
             password_confirmation: "password",
             activated: true,
             activated_at: Time.zone.now,
             image: Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/avatar.jpg')))

30.times do |i|
  user=User.create(name: "user#{i}", email: "test#{i}@example.com", password: "password", password_confirmation: "password", activated: true, activated_at: Time.zone.now, image: Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/avatar.jpg')))
  task=Task.create(name: "test", description: "説明", user_id: user.id,limit_time: Time.current, category_id: rand(1..6))
  comment=Comment.create(content: "こんにちは", :user_id: user.id, task_id: task.id)
end
users=User.all
followuser=User.create!(name:  "Example User",
             email: "ex@example.com",
             password:              "password",
             password_confirmation: "password",
             activated: true,
             activated_at: Time.zone.now,
             image: Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/avatar.jpg')))

users.each do |user|
followuser.follow(user)
followuser
end
