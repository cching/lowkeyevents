class ContactMailer < ActionMailer::Base
  helper :application
  
  def send_email args
    @contact = args

    mail :to => 'cfching95@gmail.com', :from => ENV['LK_EMAIL'], :subject => 'lowkey.events contact mailer'
  end

end