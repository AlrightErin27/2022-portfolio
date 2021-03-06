Rails.application.routes.draw do
  resources :users, only: %i[create show index]
  resources :games, only: %i[show index]
  resources :scores, only: %i[index show create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  get '/me', to: 'sessions#show'
  delete 'logout', to: 'sessions#destroy'
end
