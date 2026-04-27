ItemEvents.modification(event => {

  event.modify('minecraft:wheat_seeds', item => {
    item.foodProperties = food => {
        food.hunger(2)
        food.saturation(0.5)
        food.fastToEat()
    }
  })

  event.modify('minecraft:melon_seeds', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(0.5)
        food.fastToEat()
    }
  })

  event.modify('minecraft:pumpkin_seeds', item => {
    item.foodProperties = food => {
        food.hunger(3)
        food.saturation(0.5)
        food.fastToEat()
    }
  })

  event.modify('minecraft:beetroot_seeds', item => {
    item.foodProperties = food => {
        food.hunger(3)
        food.saturation(0.5)
        food.fastToEat()
    }
  })

  event.modify('farmersdelight:cabbage_seeds', item => {
    item.foodProperties = food => {
        food.hunger(2)
        food.saturation(0.5)
        food.fastToEat()
    }
  })

  event.modify('farmersdelight:tomato_seeds', item => {
    item.foodProperties = food => {
        food.hunger(2)
        food.saturation(0.5)
        food.fastToEat()
    }
  })

  event.modify('ratatouille:compost_mass', item => {
    item.foodProperties = food => {
        food.hunger(4)
        food.saturation(0.5)
        food.effect('minecraft:nausea',100,1,0.3)
    }
  })

  event.modify('minecraft:sugar_cane', item => {
    item.foodProperties = food => {
        food.hunger(4)
        food.saturation(0.3)
    }
  })

  event.modify('minecraft:bamboo', item => {
    item.foodProperties = food => {
        food.hunger(2)
        food.saturation(0.3)
    }
  })

  event.modify('ratatouille:compost_residue', item => {
    item.foodProperties = food => {
        food.hunger(6)
        food.saturation(0.5)
        food.effect('minecraft:nausea',100,1,0.8)
        food.effect('minecraft:hunger',100,1,0.3)
    }
  })

  event.modify('minecraft:iron_sword', item => {
    item.maxDamage = 983
  })

  event.modify('minecraft:iron_axe', item => {
    item.maxDamage = 983
  })

  event.modify('minecraft:iron_pickaxe', item => {
    item.maxDamage = 983
  })

  event.modify('minecraft:iron_shovel', item => {
    item.maxDamage = 983
  })

  event.modify('minecraft:iron_hoe', item => {
    item.maxDamage = 983
  })

})