class CitySerializer < ActiveModel::Serializer
  attributes :id, :city, :country

  belongs_to :trip
  has_many :accommodations
  has_many :activities
  has_many :transportations
  has_many :users, through: :trips
end