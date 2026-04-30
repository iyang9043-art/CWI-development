StartupEvents.registry("block", (event) => {

    event.create("infected_budding_amethyst")
    .soundType("amethyst")
    .randomTick((tick) => global.infectedBuddingAmethyst(tick))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool");

    event.create("infected_budding_quartz")
    .soundType("amethyst")
    .randomTick((tick) => global.infectedBuddingQuartz(tick))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool");

});

global.infectedBuddingAmethyst = tick => {

    const { block, level } = tick;
    const pos = block.getPos();
    const Direction = Java.loadClass('net.minecraft.core.Direction');
  
    const growAmethystBuds = () => {
      Direction.values().forEach(face => {
        const offsetPos = pos.relative(face);
        const adjacentBlockId = level.getBlock(offsetPos).id;
        const chanceOfGrowth = 0.2;
        const randomValue = Math.random();
  
        const blockTypes = {
          'minecraft:air': 'minecraft:small_amethyst_bud',
          'minecraft:small_amethyst_bud': 'minecraft:medium_amethyst_bud',
          'minecraft:medium_amethyst_bud': 'minecraft:large_amethyst_bud',
          'minecraft:large_amethyst_bud': 'minecraft:amethyst_cluster',
        };
  
        const blockType = blockTypes[adjacentBlockId];
        if (blockType && randomValue < chanceOfGrowth) {
          const command = `setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} ${blockType}[facing=${face}]`;
          tick.server.runCommandSilent(command);
        }
      });
    };
  
    growAmethystBuds();

};

global.infectedBuddingQuartz = tick => {

    const { block, level } = tick;
    const pos = block.getPos();
    const Direction = Java.loadClass('net.minecraft.core.Direction');
  
    const growQuartzBuds = () => {
      Direction.values().forEach(face => {
        const offsetPos = pos.relative(face);
        const adjacentBlockId = level.getBlock(offsetPos).id;
        const chanceOfGrowth = 0.2;
        const randomValue = Math.random();
  
        const blockTypes = {
          'minecraft:air': 'geode_plus:small_nether_quartz_bud',
          'geode_plus:small_nether_quartz_bud': 'geode_plus:medium_nether_quartz_bud',
          'geode_plus:medium_nether_quartz_bud': 'geode_plus:large_nether_quartz_bud',
          'geode_plus:large_nether_quartz_bud': 'geode_plus:nether_quartz_crystal',
        };
  
        const blockType = blockTypes[adjacentBlockId];
        if (blockType && randomValue < chanceOfGrowth) {
          const command = `setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} ${blockType}[facing=${face}]`;
          tick.server.runCommandSilent(command);
        }
      });
    };
  
    growQuartzBuds();

};