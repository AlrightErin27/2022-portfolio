class ScoresController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :hidden
  rescue_from ActiveRecord::RecordInvalid, with: :unworthy

  #GET /scores
  def index
    render json: Score.all, status: :ok
  end

  #GET /scores/:id
  def show
    sc = Score.find(params[:id])
    render json: sc, status: :ok
  end

  #POST /scores
  def create
    sc = Score.create!(score_params)
    render json: sc, status: :created
  end

  private

  #----------------------   PARAMS   ----------------------#
  def score_params
    params.permit(:user_id, :game_id, :result)
  end

  #----------------------   ERRORS   ----------------------#
  def hidden
    render json: { error: 'Score not found!' }, status: :not_found
  end

  def unworthy(exc)
    render json: {
             errors: exc.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
