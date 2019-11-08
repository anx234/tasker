class UsersController < ApplicationController
skip_before_action :login_required,:mytask_get, only: [:new, :create]
def index
  @users=User.all.page(params[:page])

end

  def new
    @user = User.new
  end

def show
  @user = User.find(params[:id])
  @tasks=@user.tasks
  puts @tasks.count
end

  def edit
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
  if @user.save # => Validation
    # Sucess
    flash[:success] = "Welcome to the Sample App!"
    redirect_to  login_path,notice:'redirectに成功しました'

    # GET "/users/#{@user.id}" => show
  else
    # Failure
    render 'new'
  end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end


end
