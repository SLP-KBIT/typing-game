require 'sinatra'
require 'json'
require 'mysql2'

set :bind, '0.0.0.0'

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/words' do
  content_type 'application/json'
  get_words
end

def get_words
  client = Mysql2::Client.new(
  database: ENV['MYSQL_DATABASE'],
  host: ENV['HOST'],
  username: ENV['MYSQL_USER'],
  password: ENV['MYSQL_PASSWORD']
  )

  sql = "select name from words order by rand() limit 10"
 
  ary = Array.new
  client.query(sql).each {|row| ary << row}
  return ary.to_json
end
