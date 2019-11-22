Rails.application.routes.draw do
  root to: "posts#index"
  namespace :api, format: "json" do
    resources :posts, only: [:index, :show]
  end
  devise_for :users
  resources :posts 
  resources :users do
    collection do
      get "mypage"
      get "todo"
    end
  end
end
