class RemoveCountyFromGuns < ActiveRecord::Migration[7.0]
  def change
    remove_column :guns, :county, :string
  end
end
