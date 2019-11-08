class RenameStarttimeColumnToTasks < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :start_time, :limit_time
  end
end
