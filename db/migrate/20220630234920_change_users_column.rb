class ChangeUsersColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :password, :password_digest
  end
end
