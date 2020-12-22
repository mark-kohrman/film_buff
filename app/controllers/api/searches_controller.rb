class Api::SearchesController < ApplicationController
  def index
    @searches = Search.all
    render 'index.json.jb'
  end

  def show
    imbd_id = params[:id]
    
    response = HTTP.get("http://www.omdbapi.com/?apikey=#{Rails.application.credentials.movie_api[:api_key]}&i=#{imbd_id}")
    response.parse
    @search = response.parse
    saved_movie = Movie.find_by(id: params[:id])
    p saved_movie
    if saved_movie
      @movie = saved_movie
    else
      added_movie = Movie.create(
        title: @search["Title"],
        director: @search["Director"],
        release_year: @search["Year"],
        runtime: @search["Runtime"],
        description: @search["Plot"],
        img_url: @search["Poster"],
        thumbs_up: 0,
        thumbs_down: 0
      )
    end
    p "*" * 44 + "NEW"

    p added_movie

    render 'show.json.jb'
  end
end
