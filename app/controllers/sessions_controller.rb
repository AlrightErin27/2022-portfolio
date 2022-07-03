class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create

  # GET /sessions
  def create
    user = User.find_by(name: params[:name], email: params[:email])

    if (user&.authenticate(params[:password]))
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {
               error: {
                 login: 'Invalid name or password',
               },
             },
             status: :unauthorized
    end
  end

  # SHOW /me
  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end
end
