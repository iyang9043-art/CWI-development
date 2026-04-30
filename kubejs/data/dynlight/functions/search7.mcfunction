execute at @s unless block ~ ~ ~ #dynlight:air unless block ~ ~ ~ water[level=0] if block ~ ~1 ~ #dynlight:air run tp @s ~ ~1 ~
execute at @s unless block ~ ~ ~ #dynlight:air unless block ~ ~ ~ water[level=0] if block ~1 ~ ~ #dynlight:air run tp @s ~1 ~ ~
execute at @s unless block ~ ~ ~ #dynlight:air unless block ~ ~ ~ water[level=0] if block ~ ~ ~1 #dynlight:air run tp @s ~ ~ ~1
execute at @s unless block ~ ~ ~ #dynlight:air unless block ~ ~ ~ water[level=0] if block ~-1 ~ ~ #dynlight:air run tp @s ~-1 ~ ~
execute at @s unless block ~ ~ ~ #dynlight:air unless block ~ ~ ~ water[level=0] run tp @s ~ ~ ~-1

execute at @s unless block ~ ~ ~ #dynlight:air run kill @s
execute as @s at @s if entity @e[type=marker,tag=dynlight.mark,tag=!dynlight.new,distance=..0.5] run execute as @e[type=marker,tag=dynlight.mark,tag=!dynlight.new,distance=..0.5] run kill @s

execute as @s at @s if block ~ ~ ~ water[level=0] run fill ~ ~ ~ ~ ~ ~ light[waterlogged=true,level=7] replace water
execute as @s at @s unless block ~ ~ ~ water unless block ~ ~ ~ light run fill ~ ~ ~ ~ ~ ~ light[waterlogged=false,level=7] replace #dynlight:air

tag @s remove dynlight.new
tag @s remove dynlight.expired
