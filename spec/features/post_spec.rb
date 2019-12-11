require "rails_helper"

feature "post", type: :feature do
  let(:user) { create(:user) }

  scenario "post post" do
    visit root_path
    
    visit new_user_session_path
    fill_in "user_email", with: user.email
    fill_in "user_password", with: user.password
    find('input[name="commit"]').click
    expect(current_path).to eq root_path
    expect(page).to have_content("アウトプット")

    expect {
      click_link("アウトプット")
      expect(current_path).to eq new_post_path
      fill_in "markdown", with: "タイトル"
      fill_in "post_title", with: "テキスト"
      find('input[type="submit"]').click
    }.to change(Post, :count).by(1)
  end

  # scenario "post post" do
  #   visit root_path
    
  #   visit new_user_session_path
  #   fill_in "user_email", with: user.email
  #   fill_in "user_password", with: user.password
  #   find('input[name="commit"]').click
  #   expect(current_path).to eq root_path
  #   expect(page).to have_content("アウトプット")

  #   expect {
  #     click_link("アウトプット")
  #     expect(current_path).to eq new_post_path
  #     fill_in "markdown", with: "タイトル"
  #     fill_in "post_title", with: "テキスト"
  #     find('input[type="submit"]').click
  #   }.to change(Post, :count).by(1)

  #   visit root_path

  #   visit edit_post_path
  #   fill_in "user_email"
  # end
end