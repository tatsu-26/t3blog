class Api::PostsController < ApplicationController

  def index
    @posts = Post.order
  end

  def create
    @post = Post.new(post_params)
  end
  
  def update
    @post = Post.find(params[:id])
  end

  def show
    @post = Post.find(params[:id])
  end

  private
  def post_params
    params.
  end
end
