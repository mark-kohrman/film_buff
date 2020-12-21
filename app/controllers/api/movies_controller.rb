class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render 'index.json.jb'
  end

  def show
    response = HTTP.get("http://www.omdbapi.com/?apikey=#{Rails.application.credentials.movie_api[:api_key]}&t=social&network")
    response.parse
    @movie = response.parse
    
    render 'show.json.jb'
  end
end
