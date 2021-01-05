Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  namespace :api do
    get "/movies" => "movies#index"
    get "/movies/:id" => "movies#show"
    delete "/movies/:id" => "movies#destroy"

    
    post "/searches" => "searches#index"
    get "/searches/:id" => "searches#show"



  end
end
