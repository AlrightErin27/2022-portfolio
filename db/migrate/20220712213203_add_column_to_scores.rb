class AddColumnToScores < ActiveRecord::Migration[6.1]
  def change
    add_column :scores, :score_text, :string
  end
end
