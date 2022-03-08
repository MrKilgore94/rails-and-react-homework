class CreateGuns < ActiveRecord::Migration[7.0]
  def change
    create_table :guns do |t|
      t.string :name
      t.string :caliber
      t.string :fireRate
      t.string :county

      t.timestamps
    end
  end
end
