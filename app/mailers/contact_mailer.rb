class ContactMailer < ActionMailer::Base
  helper :application
  
  def send_email args
    @contact = args

    mail :to => 'lowkey2017@frontier.com', :from => ENV['LK_EMAIL'], :subject => 'lowkey.events contact mailer'
  end

end