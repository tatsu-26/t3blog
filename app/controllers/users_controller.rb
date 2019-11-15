class UsersController < ApplicationController
  def mypage
    @user = User.find(current_user.id)
    @posts = @user.posts
  end

  def todo
    
  end
end
