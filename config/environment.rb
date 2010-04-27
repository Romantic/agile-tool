# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
AgileTool::Application.initialize!

ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  error_class = "field-error"
  if html_tag =~ /<(input|textarea|select)[^>]+class=/
    class_attribute = html_tag =~ /class=['"]/
    html_tag.insert(class_attribute + 7, "#{error_class} ")
  elsif html_tag =~ /<(input|textarea|select)/
    first_whitespace = html_tag =~ /\s/
    html_tag[first_whitespace] = " class='#{error_class}' "
  end
  html_tag
end

=begin
ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|

  if instance.error_message.kind_of?(Array)
    message = instance.error_message.first
  else
    message = instance.error_message.first
  end

  @template.render :partial => "shared/field_with_error", :locals => { :field => html_tag, :message => message }
end
=end

