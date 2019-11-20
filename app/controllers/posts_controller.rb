class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    
    @post = Post.new(post_params)
    @post.save
    redirect_to action: :index
  end
  
  def destroy
    post = Post.find(params[:id])
    post.destroy #if tweet.user_id == current_user.id
    redirect_to action: :index
  end

  def edit
    @post = Post.find(params[:id])

  end

  def update
    post = Post.find(params[:id])
    post.update(post_params) #if post.user_id == current_user.id
    redirect_to action: :index
  end

  def show 
    @post = Post.find(params[:id])
  end
  
  private
  def post_params
    params.require(:post).permit(:title, :text).merge(user_id: current_user.id)
  end
end
