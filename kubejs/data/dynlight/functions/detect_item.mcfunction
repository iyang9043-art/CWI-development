tag @s remove dynlight.t1
tag @s remove dynlight.t2
tag @s remove dynlight.t3
tag @s remove dynlight.t4

execute if predicate dynlight:item_tier1 run tag @s add dynlight.t1
execute unless entity @s[tag=dynlight.t1] if predicate dynlight:item_tier2 run tag @s add dynlight.t2
execute unless entity @s[tag=dynlight.t1] unless entity @s[tag=dynlight.t2] if predicate dynlight:item_tier3 run tag @s add dynlight.t3
execute unless entity @s[tag=dynlight.t1] unless entity @s[tag=dynlight.t2] unless entity @s[tag=dynlight.t3] if predicate dynlight:item_tier4 run tag @s add dynlight.t4
