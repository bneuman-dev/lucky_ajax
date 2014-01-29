get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls/' do
  # If the user passes-in a "value", let's use it.
  # Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.

  # If the user passes a value for the roll, use that as value
  # value = params[:value] ? params[:value].to_i : nil
  # # If there is not a value passed for the roll by the user, then do it randomly via .create
  # @roll = value ? Roll.create({ value: value }) : Roll.create

  #erb :index  # HINT: what does this do? what should we do instead?
  roll = Roll.create
  roll.value.to_s
end
