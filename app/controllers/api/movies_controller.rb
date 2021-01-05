class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.where("(thumbs_up) > 0").or(Movie.where("(thumbs_down) > 0"))
    render 'index.json.jb'
  end

  def create
    
  end

  def destroy
    @movie = Movie.find_by(id: params[:id])
    @movie.destroy

    render json: {message: "Your movie has been successfully destroyed!"}
  end
end
