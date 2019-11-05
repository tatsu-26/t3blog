class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    binding.pry
    @post = Post.new(post_params)
    @post.save
    redirect_to action: :index
  end
  
  private
  def post_params
    params.require(:post).permit(:title, :text)
  end
end
