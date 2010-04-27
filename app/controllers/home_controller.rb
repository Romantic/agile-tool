class HomeController < ApplicationController

  # Requires user to be logged in to all actions.
  before_filter :authenticate_user!

  def index
  end

end

