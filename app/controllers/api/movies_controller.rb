class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render 'index.json.jb'
  end

  def show
    response = HTTP.get("http://www.omdbapi.com/?t=Step?Brothers&apikey=#{Rails.application.credentials.movie_api[:api_key]}")
    response.parse
    @movie = response.parse
    
    render 'show.json.jb'
  end
end
