class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :hidden
  rescue_from ActiveRecord::RecordInvalid, with: :unworthy

  #GET /users
  def index
    render json: User.all, status: :ok
  end

  #GET /users/:id
  def show
    u = User.find(params[:id])
    render json: u, status: :ok
  end

  #POST /users
  def create
    u = User.create!(user_params)
    render json: u, status: :created
  end

  private

  #----------------------   PARAMS   ----------------------#
  def user_params
    params.permit(:name, :email, :password)
  end

  #----------------------   ERRORS   ----------------------#
  def hidden
    render json: { error: 'User not found!' }, status: :not_found
  end

  def unworthy(exc)
    render json: {
             errors: exc.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
