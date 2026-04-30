execute align xyz positioned ~0.5 ~ ~0.5 run summon minecraft:marker ~ ~ ~ {Tags:["dynlight.new","dynlight.mark"]}
execute as @e[type=minecraft:marker,tag=dynlight.new] at @s run function dynlight:search7
