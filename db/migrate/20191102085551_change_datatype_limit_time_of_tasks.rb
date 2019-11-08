class ChangeDatatypeLimitTimeOfTasks < ActiveRecord::Migration[5.2]
  def change
     change_column :tasks, :limit_time, :date
  end
end
