class AccommodationSerializer < ActiveModel::Serializer
  attributes :id, :city_id, :information, :start_datetime, :end_datetime, :cost, :notes

  belongs_to :city
end