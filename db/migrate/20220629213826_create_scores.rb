class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :user_id
      t.integer :game_id
      t.integer :result

      t.timestamps
    end
  end
end
