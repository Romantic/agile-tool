class HomeController < ApplicationController

  # Requires user to be logged in to all actions.
  before_filter :authenticate_user!

  # Renders root page.
  def index
  end

end

