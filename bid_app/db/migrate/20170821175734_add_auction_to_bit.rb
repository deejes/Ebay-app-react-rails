class AddAuctionToBit < ActiveRecord::Migration[5.1]
  def change
    add_reference :bids, :auction, foreign_key: true, index: true
  end
end
