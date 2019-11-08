class ApplicationController < ActionController::Base
  helper_method :current_user
  before_action :login_required, :current_user, :mytask_get

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def login_required
    redirect_to login_path unless current_user

  end

  def mytask_get
    @mytasks =  current_user.tasks
    @todayMyTasks = @mytasks.active
    @pastMyTasks = @mytasks.past

  end

end
