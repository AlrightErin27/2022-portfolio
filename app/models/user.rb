class User < ApplicationRecord
  has_many :scores
  has_many :games, through: :scores

  validates :name, length: { minimum: 2 }, uniqueness: true
  validates :email, :email => true
  validates :password, length: { minimum: 4 }
end
