class Api::V1::BrewsController < ApplicationController
  before_action :set_brew, only: [:show, :update, :destroy]
  respond_to :json

  # GET /brews
  def index
    respond_with Brew.all
  end

  # GET /brews/1
  def show
    respond_with @brew
  end

  # POST /brews
  def create
    @brew = Brew.new(brew_params)

    if @brew.save
      respond_with @brew, status: :created, location: [:api, :v1, @brew]
    else
      render json: { errors: @brew.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /brews/1
  def update
    if @brew.update(brew_params)
      respond_with @brew, status: :ok, location: [:api, :v1, @brew]
    else
      render json: { errors: @brew.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /brews/1
  def destroy
    @brew.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_brew
    @brew = Brew.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def brew_params
    params.require(:brew).permit(:name)
  end
end
