# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Gun.destroy_all

#seeds.rb
Gun.create(name: "Colt AR-15", caliber:'.223 remington or 5.56x45mm NATO', fireRate:'Semi-Auto, Burst and Full-Auto for military', country:"United States")
Gun.create(name: "SIG MPX", caliber:'9x19mm Parabellum', fireRate:'Semi-Auto, Full-Auto for military', country:"United States, Germany")
Gun.create(name: "AK-47", caliber:'7.62x39mm', fireRate:'Semi-Auto, Burst and Full-Auto for military', country:"Soviet Union")
Gun.create(name: "Ruger Precision Rifle", caliber:'.300 Lapua Magnum', fireRate:'Bolt-action', country:"United States")
Gun.create(name: "14.9 SOP Rifle", caliber:'14.9mm', fireRate:'Bolt-action', country:"United States")
puts "seeded Guns size: #{Gun.all.size}"


# //in terminal
# rails db:seed
# # seeded Guns size: 5