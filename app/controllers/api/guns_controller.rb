class Api::GunsController < ApplicationController
  before_action :set_gun, only: [:show, :update, :destroy]
  #get 'api/guns'
  def index
      render json: Gun.all

  end

  #get 'api/guns/:id'
  def show
    render json: @gun
  
  end

  #delete 'api/guns/:id'
  def destroy
    render json: @gun.destroy
  
  end


  def create
   gun = Gun.new(gun_params)
   if(gun.save)
    render json: gun
   else
    render json: {errors: gun.errors.full_messages}, status: 422

   end

  end

  def update
    if(@gun.update(gun_params))
     render json: @gun
    else
     render json: {errors: @gun.errors.full_messages}, status: 422
 
    end
 
   end



  private
  def gun_params
    params.require(:gun).permit(:name, :caliber, :fireRate, :country)

  end

  
  def set_gun
    @gun = Gun.find(params[:id])

  end











end
