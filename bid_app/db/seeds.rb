# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PASSWORD = 'supersecret'

Auction.destroy_all
Bid.destroy_all
User.destroy_all

# User.create first_name: 'Jon', last_name: 'Snow', email: 'js@winterfell.gov', password: PASSWORD


  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
x = 0

10.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: "#{first_name.downcase}#{x}-#{last_name.downcase}@example.com",
    password: PASSWORD
  )
  x += 1
end


users = User.all



20.times do
  Auction.create(
    title: Faker::ChuckNorris.fact,
    body: Faker::Hacker.say_something_smart,
    rprice: rand(1000),
    user: users.sample,
  )
end

auctions = Auction.all

auctions.each do |a|
  rand(1..5).times do
    Bid.create(
      value: rand(50),
      auction: a,
      user: users.sample
    )
  end
end

# puts Cowsay.say("Created #{users.count} users", :tux)
# puts Cowsay.say("Created #{auctions.count} tags", :stimpy)
# # puts Cowsay.say('Created 100 questions', :cow)
# # puts Cowsay.say("Created #{Like.count} likes", :cheese)
# puts Cowsay.say("Created #{answers.count} answers", :ghostbusters)
