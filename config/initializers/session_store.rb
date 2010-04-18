# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_agile-tool_session',
  :secret      => 'b144a0cdc4ea1402c35ba7a5bc6c39858b0f783c13b5a07ab11925ac992ec9510d8f88e9202725cd8b3a61b0a6737f09a58a26d60537841e13c1fd345e0505ac'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
