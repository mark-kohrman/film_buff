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
    saved_movie = Movie.find_by(id: params[:id])
    p saved_movie
    p "SAVED*********"
    if saved_movie
      @movie = saved_movie
    else
      added_movie = Movie.create(
        title: @movie["Title"],
        director: @movie["Director"],
        release_year: @movie["Year"],
        runtime: @movie["Runtime"],
        description: @movie["Plot"],
        img_url: @movie["Poster"],
        thumbs_up: 0,
        thumbs_down: 0
      )
    end

    p added_movie

    render 'show.json.jb'
  end
end
