Rails.application.routes.draw do

  root :to => "home#show"

  get '/api', :to => "api#show"
  post '/api', :to => "api#create"

end
