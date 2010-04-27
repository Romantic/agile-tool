module HtmlHelper
  def form_errors(resource)
    content_tag(:div, :class => "errors") do
      resource.errors.to_a.each.sum do |message|
        content_tag(:div, message, :class => "error")
      end
    end
  end

  def field_error(attribute)
    errors = resource.errors[attribute]
    unless errors.blank?
      content_tag(:span, :class => "tooltip") do
        image_tag("icons/tooltip.png", :alt => errors.first)
      end
    end
  end
end

