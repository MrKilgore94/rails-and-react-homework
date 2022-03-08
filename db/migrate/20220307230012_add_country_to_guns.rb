class AddCountryToGuns < ActiveRecord::Migration[7.0]
  def change
    add_column :guns, :country, :string
  end
end
