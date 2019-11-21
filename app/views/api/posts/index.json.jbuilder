json.set! :posts do
  json.array! @posts do |post|
    json.extract! post, :id, :title, :text
  end
end