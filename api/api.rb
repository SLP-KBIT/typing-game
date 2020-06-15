require 'sinatra'
require 'json'

set :bind, '0.0.0.0'

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/words' do
  content_type 'application/json'
  get_words
end

def get_words
  ary = [{name: "apple"}, {name: "banana"}]
  return ary.to_json
end
