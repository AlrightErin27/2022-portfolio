class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :past_games

  def past_games
    object.scores
  end
end
