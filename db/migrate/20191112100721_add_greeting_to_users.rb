class AddGreetingToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :greeting, :string, default: 'よろしくお願いします!'
  end
end
