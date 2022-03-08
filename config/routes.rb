Rails.application.routes.draw do


namespace :api do

get 'guns', to:'guns#index'
get 'guns/:id', to:'guns#show'


post 'guns', to:'guns#create'

put 'guns/:id', to:'guns#update'

delete 'guns/:id', to: 'guns#destroy'





end
end
