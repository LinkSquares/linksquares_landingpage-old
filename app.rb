require 'sinatra'
require 'sinatra/activerecord'

require_relative 'environment'

require 'sinatra/flash'
require 'sinatra/redirect_with_flash'

# Rename 'AppName' to name of choice.
# => Update 'AppName' : config.ru // spec_helper.rb
module AppName
  class App < Sinatra::Application
    register Sinatra::ActiveRecordExtension

    configure do
      set :root, File.dirname(__FILE__)
      set :public_folder, 'public'
    end

    set :javascripts, [:jquery]

    get '/' do
      js  'index'
      erb :index
    end

    helpers do
      include Rack::Utils

      alias_method :h, :escape_html

      def partial(file_name)
        erb file_name, :layout => false
      end
    end
  end
end
