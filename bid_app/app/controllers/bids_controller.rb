class BidsController < ApplicationController
    # before_action :find_auction, only: [:show, :update, :destroy]

      def create
        # byebug
        # byebug
        if Auction.find(params['auction_id']).user == current_user
          render json:{error: "you cant bid on your own auction"}
        else
          bid = Bid.new
          bid.auction_id = params["auction_id"]
          bid.value = params["value"]
          bid.user = current_user

          if bid.save
            render json: bid
          else
            render json: { error: bid.errors.full_messages }
          end
        end
      end

      def destroy
        # byebug
        @bid = Bid.find(params['id'])
        if @bid.destroy
          head :ok
        else
          head :bad_request
        end
      end

      #
      #
      private
      def bid_params
        params.require(:bid).permit(:value)
        params.permit(:auction_id)
      end
      #
      # def find_auction
      #   # 👇 Nested eager loading. Pre-queries for associated answers and users
      #   # of answers.
      #   # @question = Question.includes(answers: [:user]).find(params[:id])
      #   @auction = Auction.find(params[:id])
      # end
    end
