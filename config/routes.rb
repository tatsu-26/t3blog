Rails.application.routes.draw do
  namespace :api, format: "json" do
    resources :posts, only: [:index, :create, :update]
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
