FactoryBot.define do
  factory :user do
    nickname              {"abc"}
    password              {"0000000"}
    password_confirmation {"0000000"}
    sequence(:email) {Faker::Internet.email}
  end
end