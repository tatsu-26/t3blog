class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :tag
      t.text :text
      t.text :image
      t.timestamps
    end
  end
end
