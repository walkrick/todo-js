class HomeController < ApplicationController
  def show

  end

  def api
    @todos = Todo.all

    respond_to do |format|
      format.json
      format.json { render :json => @todos }

    end
  end
end
