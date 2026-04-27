ServerEvents.recipes(event => {

//custom recipe function define

  function hammering(input,output){
    event.custom({
      "type": "createdieselgenerators:hammering",
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "item": output
        }
      ]
    })
  }

  function rolling(input,output){
    event.custom({
      "type":"createaddition:rolling",
      "input": {
        "item": input
      },
      "result": {
        "item": output,
        "count": 2
      }
    })
  }

  function liquidBurning(input,amount,burnTime,superheated){
    event.custom({
	    "type":"createaddition:liquid_burning",
	    "input": {
      	"fluid": input,
      	"amount": amount
	    },
	    "burnTime": burnTime,
	    "superheated": superheated
    })
  }

  function charging(input,output,energy,chargeRate){
    event.custom({
	    "type":"createaddition:charging",
	    "input": {
      	"item": input,
		    "count": 1
	    },
	    "result": {
		    "item": output,
		    "count": 1
	    },
	    "energy": energy,
	    "maxChargeRate": chargeRate
    })
  }

  function turning(input,output,count){
    event.custom({
	    "type":"vintageimprovements:turning",
	    "ingredients": [
	    	{
	    		"item": input
	    	}
	    ],
	    "results": [
        {
            "item": output,
            "count": count
        }
      ]
    })
  }

  function demolding(input,output){
    event.custom({
      "type": "ratatouille:demolding",
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "item": output
        }
      ]
    })
  }

  function curving(head,input,output){
    event.custom({
      "type": "vintageimprovements:curving",
      "itemAsHead": head,
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "item": output
        }
      ]
    })
  }

  event.custom({"type": "create:cutting","ingredients": [{"item": "createdeco:industrial_iron_sheet"}],"results": [{"item": "createdieselgenerators:mold","nbt": {"Mold": "createdieselgenerators:bar"}}]})
  event.custom({"type": "create:cutting","ingredients": [{"item": "createdeco:industrial_iron_sheet"}],"results": [{"item": "createdieselgenerators:mold","nbt": {"Mold": "createdieselgenerators:chain"}}]})
  event.custom({"type": "create:cutting","ingredients": [{"item": "createdeco:industrial_iron_sheet"}],"results": [{"item": "createdieselgenerators:mold","nbt": {"Mold": "createdieselgenerators:lines"}}]})
  event.custom({"type": "create:cutting","ingredients": [{"item": "createdeco:industrial_iron_sheet"}],"results": [{"item": "createdieselgenerators:mold","nbt": {"Mold": "createdieselgenerators:bowl"}}]})

//curving

  curving('minecraft:iron_ingot','kubejs:clay_disk','kubejs:clay_ingot_mold')
  curving('minecraft:iron_nugget','kubejs:clay_disk','kubejs:clay_nugget_mold')
  curving('create:iron_sheet','kubejs:clay_disk','kubejs:clay_sheet_mold')
  curving('createaddition:iron_rod','kubejs:clay_disk','kubejs:clay_rod_mold')

//turning

  turning('create:industrial_iron_block', 'vintageimprovements:w_shaped_curving_head', 1)
  turning('create:industrial_iron_block', 'vintageimprovements:v_shaped_curving_head', 1)
  turning('create:industrial_iron_block', 'vintageimprovements:concave_curving_head', 1)
  turning('create:industrial_iron_block', 'vintageimprovements:convex_curving_head', 1)
  turning('createdeco:industrial_iron_ingot', 'createdieselgenerators:engine_piston', 1)
  turning('createdeco:industrial_iron_ingot', 'kubejs:industrial_iron_blade', 1)
  turning('createdeco:industrial_iron_ingot', 'kubejs:industrial_iron_drill_head', 1)
  turning('create:sturdy_sheet', 'createmetallurgy:sturdy_whisk', 1)
  turning('minecraft:iron_ingot', 'create:whisk', 1)
  turning('minecraft:iron_ingot', 'create:propeller', 1)
  turning('create:andesite_alloy', 'kubejs:andesite_bearing', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_ingot_mold', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_nugget_mold', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_sheet_mold', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_rod_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_ingot_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_nugget_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_sheet_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_rod_mold', 1)

//rolling

  rolling('kubejs:silver_ingot','kubejs:silver_rod')
  rolling('kubejs:bronze_ingot','kubejs:bronze_rod')
  rolling('kubejs:tin_ingot','kubejs:tin_rod')
  rolling('kubejs:cobalt_ingot','kubejs:cobalt_rod')
  rolling('tfmg:cast_iron_ingot','vintageimprovements:cast_iron_rod')

  rolling('tfmg:aluminum_sheet','tfmg:aluminum_wire')
  rolling('tfmg:cast_iron_sheet','vintageimprovements:cast_iron_wire')
  rolling('tfmg:lead_sheet','vintageimprovements:lead_wire')
  rolling('tfmg:nickel_sheet','vintageimprovements:nickel_wire')
  rolling('vintageimprovements:constantan_sheet','tfmg:constantan_wire')
  rolling('kubejs:silver_sheet','kubejs:silver_wire')
  rolling('kubejs:bronze_sheet','kubejs:bronze_wire')
  rolling('kubejs:tin_sheet','kubejs:tin_wire')
  rolling('kubejs:cobalt_sheet','kubejs:cobalt_wire')
  rolling('kubejs:magnet_sheet','kubejs:magnet_wire')
  rolling('kubejs:magnetic_alloy_sheet','kubejs:magnetic_alloy_wire')

//hammering

  hammering('create:andesite_alloy','vintageimprovements:andesite_sheet')
  hammering('tfmg:lead_ingot','tfmg:lead_sheet')
  hammering('tfmg:nickel_ingot','tfmg:nickel_sheet')
  hammering('tfmg:aluminum_ingot','tfmg:aluminum_sheet')
  hammering('kubejs:silver_ingot','kubejs:silver_sheet')

//pressing

  event.recipes.create.pressing('kubejs:magnesium_sheet', 'kubejs:magnesium_ingot')
  event.recipes.create.pressing('kubejs:silver_sheet', 'kubejs:silver_ingot')
  event.recipes.create.pressing('kubejs:bronze_sheet', 'kubejs:bronze_ingot')
  event.recipes.create.pressing('kubejs:tin_sheet', 'kubejs:tin_ingot')
  event.recipes.create.pressing('kubejs:cobalt_sheet', 'kubejs:cobalt_ingot')

//liquid_burning

  liquidBurning('tfmg:gasoline', 1000, 48000, true)
  liquidBurning('tfmg:diesel', 1000, 32000, true)

  liquidBurning('tfmg:kerosene', 1000, 32000, false)
  liquidBurning('kubejs:methane', 1000, 8000, false)
  liquidBurning('createdieselgenerators:plant_oil', 1000, 4000, false)

//conversion

  event.shapeless(Item.of('kubejs:rubber_block'),['9x #modpack:rubber'])
  event.shapeless(Item.of('9x kubejs:rubber'),['kubejs:rubber_block'])

  event.shapeless(Item.of('kubejs:polyvinyl_chloride_plastic_block'),['9x kubejs:polyvinyl_chloride_plastic_sheet'])
  event.shapeless(Item.of('9x kubejs:polyvinyl_chloride_plastic_sheet'),['kubejs:polyvinyl_chloride_plastic_block'])

  event.shapeless(Item.of('kubejs:sturdy_sheet_block'),['9x create:sturdy_sheet'])
  event.shapeless(Item.of('9x create:sturdy_sheet'),['kubejs:sturdy_sheet_block'])

  event.shapeless(Item.of('kubejs:magnesium_block'),['9x kubejs:magnesium_ingot'])
  event.shapeless(Item.of('9x kubejs:magnesium_ingot'),['kubejs:magnesium_block'])

  event.shapeless(Item.of('kubejs:magnesium_ingot'),['9x kubejs:magnesium_nugget'])
  event.shapeless(Item.of('9x kubejs:magnesium_nugget'),['kubejs:magnesium_ingot'])

  event.shapeless(Item.of('kubejs:bronze_block'),['9x kubejs:bronze_ingot'])
  event.shapeless(Item.of('9x kubejs:bronze_ingot'),['kubejs:bronze_block'])

  event.shapeless(Item.of('kubejs:bronze_ingot'),['9x kubejs:bronze_nugget'])
  event.shapeless(Item.of('9x kubejs:bronze_nugget'),['kubejs:bronze_ingot'])

  event.shapeless(Item.of('kubejs:raw_tin_block'),['9x kubejs:raw_tin'])
  event.shapeless(Item.of('9x kubejs:raw_tin'),['kubejs:raw_tin_block'])

  event.shapeless(Item.of('kubejs:tin_block'),['9x kubejs:tin_ingot'])
  event.shapeless(Item.of('9x kubejs:tin_ingot'),['kubejs:tin_block'])

  event.shapeless(Item.of('kubejs:tin_ingot'),['9x kubejs:tin_nugget'])
  event.shapeless(Item.of('9x kubejs:tin_nugget'),['kubejs:tin_ingot'])

  event.shapeless(Item.of('kubejs:raw_silver_block'),['9x kubejs:raw_silver'])
  event.shapeless(Item.of('9x kubejs:raw_silver'),['kubejs:raw_silver_block'])

  event.shapeless(Item.of('kubejs:silver_block'),['9x kubejs:silver_ingot'])
  event.shapeless(Item.of('9x kubejs:silver_ingot'),['kubejs:silver_block'])

  event.shapeless(Item.of('kubejs:silver_ingot'),['9x kubejs:silver_nugget'])
  event.shapeless(Item.of('9x kubejs:silver_nugget'),['kubejs:silver_ingot'])

  event.shapeless(Item.of('kubejs:raw_cobalt_block'),['9x kubejs:raw_cobalt'])
  event.shapeless(Item.of('9x kubejs:raw_cobalt'),['kubejs:raw_cobalt_block'])

  event.shapeless(Item.of('kubejs:cobalt_block'),['9x kubejs:cobalt_ingot'])
  event.shapeless(Item.of('9x kubejs:cobalt_ingot'),['kubejs:cobalt_block'])

  event.shapeless(Item.of('kubejs:cobalt_ingot'),['9x kubejs:cobalt_nugget'])
  event.shapeless(Item.of('9x kubejs:cobalt_nugget'),['kubejs:cobalt_ingot'])

  event.shapeless(Item.of('createmetallurgy:refractory_mortar'),['4x createmetallurgy:refractory_mortar_ball'])
  event.shapeless(Item.of('4x createmetallurgy:refractory_mortar_ball'),['createmetallurgy:refractory_mortar'])

  event.shapeless(Item.of('darkerdepths:amber_block'),['4x darkerdepths:amber'])
  event.shapeless(Item.of('4x darkerdepths:amber'),['darkerdepths:amber_block'])

})

ServerEvents.tags('item', event => {
    event.add('kubejs:no_gravity_items', 'clanginghowl:extraterrestrial_energy_crystal');
});

EntityEvents.spawned('item', event => {
  let entity = event.entity;
  if (entity.item.hasTag('kubejs:no_gravity_items')) {
    entity.setNoGravity(true);
    startFloating(entity);
  }
});

function startFloating(entity) {
  if (!entity.isAlive()) return;
  entity.server.scheduleInTicks(10, function(callback) {
    if (!entity.isAlive()) return;
    entity.age = 0;
    let floatY = Math.sin(entity.tickCount * 0.1) * 0.015;
    entity.setDeltaMovement(0, floatY, 0);
    if (entity.isAlive()) {
      startFloating(entity);
    }
  });
}