class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render 'index.json.jb'
  end

  def show
    imbd_id = params[:id]

    response = HTTP.get("http://www.omdbapi.com/?apikey=#{Rails.application.credentials.movie_api[:api_key]}&i=#{imbd_id}")
    response.parse
    @movie = response.parse
    
    render 'show.json.jb'
  end
end
