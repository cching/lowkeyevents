class Section < ActiveRecord::Base
	validates :name, :presence => true

	def color index
		index.odd? ? "gray" : "white"
	end
end
