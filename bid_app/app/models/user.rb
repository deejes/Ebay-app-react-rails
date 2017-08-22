class User < ApplicationRecord

  has_secure_password
  has_many :bids
  has_many :auctions


  before_create :generate_api_key

  private
# We can use the `.send` method to dynamically call a method. We can also
# use this to get around the fact that a method is `private`.
# Use `u.send(:generate_api_key)` to call it even though its private.
def generate_api_key
  # SecureRandom.hex(32) will generate a string of length 32 containing
  # random hex characters.
  loop do
    self.api_key = SecureRandom.hex(32)
    # In the eventuality that we accidently create an API key
    # that already exists in our db, we're going to loop and regenerate it
    # until that is no longer the case.
    break unless User.exists?(api_key: api_key)
  end
end

end
