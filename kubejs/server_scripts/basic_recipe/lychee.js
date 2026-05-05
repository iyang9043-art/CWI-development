ServerEvents.recipes(event => {

  event.custom({
    "type":"lychee:item_inside",
    "item_in":{"item":"kubejs:dark_ash_dust"},
    "block_in":{"blocks":["water"],"state":{"level":0}},
    "post":[
      {"type":"delay","s":5},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.3}}
    ]
  })

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"item":"minecraft:brush"},
    "block_in": "kubejs:crystalized_phyllite",
    "post": [
      {"type":"drop_item","item":"kubejs:crystallum_coccus"},
      {"type":"drop_item","item":"kubejs:crystallum_coccus","contextual":{"type":"chance","chance":0.75}},
      {"type": "place","block": "darkerdepths:mossy_grimestone"},
      {"type": "damage_item"}
    ]
  })

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag":"minecraft:axes"},
    "block_in": "kubejs:stripped_burnt_log",
    "post": [
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":8},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":6,"contextual":{"type":"chance","chance":0.75}},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","count":3,"contextual":{"type":"chance","chance":0.7}},
      {"type": "place","block": "air"},
      {"type": "damage_item"}
    ]})
  
  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag": "minecraft:axes"},
    "block_in": "kubejs:stripped_ash_log",
    "post": [
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":9},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":7,"contextual":{"type":"chance","chance":0.85}},
      {"type":"drop_item","item":"kubejs:ash_dust","count":2,"contextual":{"type":"chance","chance":0.7}},
      {"type": "place","block": "air"},
      {"type": "damage_item"}
    ]})

  event.custom({
    "type": "lychee:dripstone_dripping",
    "source_block": "water",
    "target_block": "sponge",
    "post": [{"type": "place","block": "wet_sponge"}]
  })

  event.custom({
    "type": "lychee:dripstone_dripping",
    "source_block": "water",
    "target_block": "kubejs:depleted_dirt",
    "post": [{"type": "place","block": "kubejs:soaked_depleted_dirt"}]
  })

  event.custom({
    "type": "lychee:item_burning",
    "item_in": {"item": "kubejs:ash_dust"},
    "post": {"type": "drop_item","item": "kubejs:dark_ash_dust"}
  })

})