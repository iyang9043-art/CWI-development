function sculk_expansion:warden/spread_sculk

execute if entity @s[tag=!sculk_expansion.boosted] run function sculk_expansion:warden/boost
