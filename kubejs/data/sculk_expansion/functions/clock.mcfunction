schedule function sculk_expansion:clock 2s replace

function sculk_expansion:compass/main

execute as @e[type=warden, tag=!sculk_expansion.blacklist] at @s run function sculk_expansion:warden/main
