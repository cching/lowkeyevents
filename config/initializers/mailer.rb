ActionMailer::Base.delivery_method = :smtp

ActionMailer::Base.smtp_settings = {
  :enable_starttls_auto => true,
  :address => 'smtp.gmail.com',
  :port => 587,
  :domain => 'lowkey.events',
  :authentication => 'plain',
  :user_name => ENV['LK_EMAIL'],
  :password => ENV['LK_PASSWORD']
} 
 