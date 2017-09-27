class PagesController < ApplicationController
  def home
  	@sections = Section.all.order(:created_at)
  	@contact = Contact.new
  end
end
