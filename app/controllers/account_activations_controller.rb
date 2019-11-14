class AccountActivationsController < ApplicationController
  skip_before_action :login_required,:mytask_get
  
  def edit
     puts "登録"
     user = User.find_by(email: params[:email])
     if user && !user.activated? && user.authenticated?(:activation,params[:id])
       puts "登録"
       user.update_attribute(:activated, true)
       user.update_attribute(:activated_at, Time.zone.now)
       flash[:success] = "Account activated!"
       #redirect_to login_path
       redirect_to root_url
     else
        puts "失敗"
       flash[:danger] = "Invalid activation link"
       redirect_to new_user_path
     end
   end

end
