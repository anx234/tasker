class UsersController < ApplicationController
  skip_before_action :login_required, :mytask_get, only: [:new, :create]

  def index
    @users=User.all.page(params[:page])
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    @tasks=@user.tasks
    @isFollow = current_user.following? @user
    @isMe=false
    @isMe = @user.id==current_user.id

    puts @user.followers.count
    puts @user.all_following.count
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to @user, notice: "タスク「#{@user.name}」を更新しました。"
    else
      render :edit
    end
  end

  def create
    @user = User.new(user_params)
    @user.image.attach(io: File.open("public/images/avatar.jpg"), filename: "avatar.jpg", content_type: "image/jpg")
    if @user.save # => Validation
      # Sucess
      flash[:success] = "Welcome to the Sample App!"
      UserMailer.account_activation(@user).deliver_now
      flash[:info] = "Please check your email to activate your account."
      redirect_to root_url
      # redirect_to  login_path,notice:'redirectに成功しました'
      # GET "/users/#{@user.id}" => show
    else
      # Failure
      render 'new'
    end
  end

  def follow
    @user = User.find(params[:user_id])
    current_user.follow(@user)
    @isFollow = current_user.following? @user
    # render json: @isFollow
    followData = {isFollow: @isFollow, followers: @user.followers, follows: @user.all_following}
    render :json => followData
    # redirect_to user_path(@user)
  end

  def unfollow
    @user = User.find(params[:user_id])
    current_user.stop_following(@user)
    @isFollow = current_user.following? @user
    followData = {isFollow: @isFollow, followers: @user.followers, follows: @user.all_following}
    render :json => followData
  end




  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :image, :greeting)
  end


end
