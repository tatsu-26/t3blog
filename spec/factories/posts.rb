FactoryBot.define do
  factory :post do
    text  {"こんにちは"}
    title {"挨拶"}
    created_at { Faker::Time.between(from: DateTime.now - 2, to: DateTime.now) }
    user
  end
end