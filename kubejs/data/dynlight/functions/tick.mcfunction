tag @e[type=minecraft:marker,tag=dynlight.mark] add dynlight.expired

execute as @a[tag=dynlight.t1] at @s positioned ~ ~1 ~ run function dynlight:place15
execute as @a[tag=dynlight.t2] at @s positioned ~ ~1 ~ run function dynlight:place14
execute as @a[tag=dynlight.t3] at @s positioned ~ ~1 ~ run function dynlight:place10
execute as @a[tag=dynlight.t4] at @s positioned ~ ~1 ~ run function dynlight:place7

execute as @e[type=item,tag=dynlight.t1] at @s run function dynlight:place15
execute as @e[type=item,tag=dynlight.t2] at @s run function dynlight:place14
execute as @e[type=item,tag=dynlight.t3] at @s run function dynlight:place10
execute as @e[type=item,tag=dynlight.t4] at @s run function dynlight:place7

execute as @e[type=minecraft:blaze] at @s run function dynlight:place15
execute as @e[type=minecraft:magma_cube] at @s run function dynlight:place10
execute as @e[type=minecraft:glow_squid] at @s run function dynlight:place10

execute as @e[type=minecraft:marker,tag=dynlight.expired] at @s run function dynlight:remove

execute as @a run function dynlight:detect_player
execute as @e[type=item] run function dynlight:detect_item
