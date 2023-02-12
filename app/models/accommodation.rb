class Accommodation < ApplicationRecord
  belongs_to :city
  has_many :trips, through: :cities
end