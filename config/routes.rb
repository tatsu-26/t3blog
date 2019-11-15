Rails.application.routes.draw do
  namespace :api do
    resources :posts, only: %i(show)
  end
  devise_for :users
  root to: "posts#index"
  resources :posts 
  resources :users do
    collection do
      get "mypage"
      get "todo"
    end
  end
end