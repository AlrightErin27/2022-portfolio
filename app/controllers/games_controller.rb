class GamesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :hidden

  #GET /games
  def index
    render json: Game.all, status: :ok
  end

  #GET /games/:id
  def show
    g = Game.find(params[:id])
    render json: g, status: :ok
  end

  private

  #----------------------   ERRORS   ----------------------#
  def hidden
    render json: { error: 'Game not found!' }, status: :not_found
  end
end
