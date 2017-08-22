class CreateAuctions < ActiveRecord::Migration[5.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :body
      t.float :rprice
      t.timestamps
    end
  end
end
