class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :email
  has_many :scores
  has_many :games, through: :scores
end
