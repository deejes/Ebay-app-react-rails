class AuctionSerializer < ActiveModel::Serializer


    attributes :id, :title, :body,:rprice, :user
    has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :value, :created_at
    belongs_to :auction
  end


end
