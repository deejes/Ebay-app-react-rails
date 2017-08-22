Rails.application.routes.draw do
  resources :auctions do
    resources :bids , only: [:create,:destroy  ]
    end


    resource :tokens, only: [:create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
