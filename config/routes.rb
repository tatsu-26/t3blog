Rails.application.routes.draw do
  devise_for :users
  root to: "posts#index"
  resources :posts 
  resources :users do
    collection do
      get "mypage"
    end
  end
end