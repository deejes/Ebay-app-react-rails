class AuctionsController < ApplicationController
  before_action :find_auction, only: [:show, :update, :destroy]
  before_action :authenticate_user!


  def show
      # render json: current_user
      render json: @auction
    end

    def index
      # Before careful when using associations, rails will make a query for
      # every association called. This can blow in a loop reducing the performance
      # to O(n**2). Use the `.includes` method on an ActiveRecord to eager load
      # an association. In this case, we eager load users that own a question
      # to display their full names in the json response.

      @auctions = Auction.order(created_at: :desc)
      # When using jBuilder to server JSON, make sure that you do
      # not render with `render json: @question`. This would instead serialize
      # @question (transforming into json) and send that as a response.
      # Instead use render as you to send a template.
      # (e.g. `render :index`, `render`, no render at all)
      render json: @auctions
    end

    def create
      # byebug
      auction = Auction.new(auction_params)
      auction.user = current_user

      if auction.save
        render json: { id: auction.id }
      else
        render json: { error: auction.errors.full_messages }
      end
    end

    def destroy

      if @auction.destroy
        head :ok
      else
        head :bad_request
      end
    end

    def update
      if @auction.update auction_params
        render json: @auction
      else
        head :bad_request
      end
    end



    private
    def auction_params
      params.require(:auction).permit(:title, :body, :rprice)
    end

    def find_auction
      # 👇 Nested eager loading. Pre-queries for associated answers and users
      # of answers.
      # @question = Question.includes(answers: [:user]).find(params[:id])
      @auction = Auction.find(params[:id])
    end
  end
