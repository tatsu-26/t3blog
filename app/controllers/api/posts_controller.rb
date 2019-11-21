class Api::PostsController < ApplicationController

  def index
    @posts = Post.order("updated_at DESC")
  end
  
  def show
    @post = Post.find(params[:id])
  end
end
