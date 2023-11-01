class SessionsController < ApplicationController


  def new

  end
  def create
    user = User.find_by(username: params[:session][:username])
    if user
      if user.authenticate(params[:session][:password])
        session[:user_id] = user.id
        flash[:success] = "Congrats, you have logged in"
        redirect_to root_path
      else
        flash[:error] = "Invalid password"
        redirect_to login_path
      end
    else
      flash[:error] = "User not found"
      redirect_to login_path
    end
  end


  def destroy
    session[:user_id]=nil

    flash[:success]="You have logged out"
    redirect_to login_path

  end

end
