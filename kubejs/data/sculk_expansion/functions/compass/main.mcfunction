# Made by badooga, modified from: https://www.reddit.com/r/MinecraftCommands/comments/em4e7f/compass_points_to_player/fdn0a9u/

execute as @a[predicate=sculk_expansion:holding_recovery_compass] at @s if entity @e[distance=1..32,type=!#sculk_expansion:not_mob,predicate=!sculk_expansion:in_spectator] run function sculk_expansion:compass/track


#execute as @a[predicate=sculk_expansion:holding_recovery_compass] at @s as @e[distance=1..32,type=!#sculk_expansion:not_mob,limit=1,sort=nearest] facing entity @s eyes positioned ~ ~1 ~ run function sculk_expansion:compass/effects

#execute as @a[nbt={SelectedItem:{id:"minecraft:recovery_compass"}}] at @s if entity @e[distance=1..32,type=!#sculk_expansion:not_mob] facing entity @e[distance=1..32,type=!#sculk_expansion:not_mob,limit=1,sort=nearest] eyes positioned ~ ~1 ~ positioned ^ ^-0.5 ^1 run function sculk_expansion:compass/track

#execute as @a[nbt={SelectedItem:{id:"minecraft:recovery_compass"}}] at @s if entity @e[distance=1..32,type=!#sculk_expansion:not_mob] facing entity @e[distance=1..32,type=!#sculk_expansion:not_mob,limit=1,sort=nearest] eyes positioned ~ ~1 ~ positioned ^ ^-0.5 ^1 run particle minecraft:sculk_soul ~ ~ ~

#execute as @a[nbt={SelectedItem:{id:"minecraft:recovery_compass"}}] at @s if entity @e[distance=1..32,type=!#sculk_expansion:not_mob] facing entity @e[distance=1..32,type=!#sculk_expansion:not_mob,limit=1,sort=nearest] eyes positioned ~ ~1 ~ positioned ^ ^-0.5 ^2 run particle minecraft:sculk_soul ~ ~ ~

#execute as @a[nbt={SelectedItem:{id:"minecraft:recovery_compass"}}] at @s if entity @e[distance=1..32,type=!#sculk_expansion:not_mob] facing entity @e[distance=1..32,type=!#sculk_expansion:not_mob,limit=1,sort=nearest] eyes positioned ~ ~1 ~ positioned ^ ^-0.5 ^3 run particle minecraft:sculk_soul ~ ~ ~

#execute as @a[nbt={SelectedItem:{id:"minecraft:recovery_compass"}}] at @s if entity @e[distance=1..32,type=!#sculk_expansion:not_mob] at @s run playsound minecraft:particle.soul_escape player @a[distance=..32]
