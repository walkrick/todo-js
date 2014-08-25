require 'rails_helper'

describe "viewing the homepage" do
  it "shows rails and js rendered text" do
    visit root_path

    expect(page).to have_content("Hello, I'm a normal rails view")
    expect(page).to have_content("hello world, I'm from only javascript!")
  end
end
