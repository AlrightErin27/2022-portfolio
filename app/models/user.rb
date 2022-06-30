class User < ApplicationRecord
  has_many :scores
  has_many :games, through: :scores
  has_secure_password

  validates :name, length: { minimum: 4, too_short: "User's name must be at least 4 characters." }, uniqueness: true
  validates :email, :email => true
  validates :password, length: { minimum: 4, too_short: "Password must be at least 4 characters." }
end
