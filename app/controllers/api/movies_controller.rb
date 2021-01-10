class Api::MoviesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @movies = Movie.where("(thumbs_up) > 0").or(Movie.where("(thumbs_down) > 0"))
    render 'index.json.jb'
  end
  def show
    imbd_id = params[:id]

    response = HTTP.get("http://www.omdbapi.com/?apikey=#{Rails.application.credentials.movie_api[:api_key]}&i=#{imbd_id}")
    response.parse
    @movie = response.parse
    saved_movie = Movie.find_by(id: params[:id])
    p saved_movie
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

    render 'show.json.jb'
  end

  def create
    if !Movie.find_by(id: params[:id])
      response = HTTP.get("http://www.omdbapi.com/?apikey=#{Rails.application.credentials.movie_api[:api_key]}&i=#{params[:imbd_id]}")
      new_movie = response.parse

      @movie = Movie.create(
        title: new_movie["Title"],
        director: new_movie["Director"],
        release_year: new_movie["Year"],
        runtime: new_movie["Runtime"],
        description: new_movie["Plot"],
        img_url: new_movie["Poster"],
        thumbs_up: 0,
        thumbs_down: 0
      )
      if @movie.save!
        render "show.json.jb"
      else
        render json: { error: @movie.errors }
      end
    end

  end

  def update
  
    if params[:thumb] == "1"
      @movie = Movie.find_by(id: params[:id])
      @movie = Movie.update(
        thumbs_up: params[:new],
      )
    elsif params[:thumb] == "0"
      @movie = Movie.find_by(id: params[:id])
      @movie = Movie.update(
        thumbs_down: params[:new],
      )
    end


    render 'show.json.jb'

  end

  def destroy
    @movie = Movie.find_by(id: params[:id])
    @movie.destroy

    render json: {message: "Your movie has been successfully destroyed!"}
  end
end
