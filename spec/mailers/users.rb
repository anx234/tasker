FactoryBot.define do
  factory :user do
    name { 'テストユーザー' }
    email { 'test1@example.com' }
    password { 'password' }
    activated {true}
    image { Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/avatar.jpg')) }
  end
end
