Rails.application.routes.draw do
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/home' , to: 'home#index'
  put 'users/follow/:user_id',to: 'users#follow'
put 'users/unfollow/:user_id',to: 'users#unfollow'
get 'users/follow_list/:user_id',to: 'users#follow_list'
get 'users/follower_list/:user_id',to:'users#follower_list'
  root to: 'home#index'
  resources :home
  resources :users
  resources :account_activations, only: [:edit]
  resources :users do
    post :follow, on: :collection
    post :unfollow, on: :collection
    get :follow_list, on: :member
    get :unfollow_list, on: :member
  end
  resources :tasks do
    resources :comments
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
