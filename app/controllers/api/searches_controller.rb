class Api::SearchesController < ApplicationController
  def index
    @searches = Search.all
    render 'index.json.jb'
  end
end
