class SessionsController < ApplicationController
  skip_before_action :login_required,:mytask_get

  def new
    @user = User.new
  end

  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])

      if user.activated?
      session[:user_id] = user.id
      redirect_to tasks_path, notice: 'ログインしました。'
      else
        message  = "Account not activated. "
        message += "Check your email for the activation link."
        flash[:warning] = message
        redirect_to root_url
      end
    else
     # Failure
     flash.now[:danger] = 'Invalid email/password combination'
     render 'new'
    end
  end

  def destroy
    reset_session
    redirect_to login_path, notice: 'ログアウトしました。'
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
