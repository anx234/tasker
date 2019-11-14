class HomeController < ApplicationController
  skip_before_action :login_required,:mytask_get

  def index

  end

  def new
    redirect_to login_path
  end

end
