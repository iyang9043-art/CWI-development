advancement grant @s only sculk_expansion:compass_track

execute facing entity @e[type=!#sculk_expansion:not_mob,predicate=!sculk_expansion:in_spectator,distance=1..32,sort=nearest,limit=1] eyes positioned ~ ~1 ~ run function sculk_expansion:compass/effects
