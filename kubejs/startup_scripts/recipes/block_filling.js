CreateEvents.spoutHandler((event) => {

    function blockFilling(id, blockID, fluidInput, outputList) {
        event.add(id, blockID, (block, fluid, simulate) => {
            if (fluid.id == fluidInput.id && fluid.amount >= fluidInput.amount) {
                if (!simulate) {
                    var i = Math.floor(Math.random() * outputList.length);
                    block.level.server.runCommandSilent(`/playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`);
                    block.level.server.runCommandSilent(`/particle minecraft:block ${outputList[i]} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`);
                    block.set(outputList[i]);
                }
                return fluidInput.amount;
            }
            return 0;
        });
    }

    blockFilling(
        "modpack:mud",
        ['minecraft:dirt'],
        { id: "minecraft:water", amount: 1000 },
        ['minecraft:mud']
    );
    
    blockFilling(
        "modpack:mud",
        ['minecraft:dirt'],
        { id: "kubejs:distilled_water", amount: 1000 },
        ['minecraft:mud']
    );

    blockFilling(
        "modpack:brown_mushroom",
        "minecraft:brown_mushroom",
        { id: "kubejs:nitrogen_fertilizer", amount: 10 },
        ['minecraft:brown_mushroom_block', 'minecraft:mushroom_stem']
    );

    blockFilling(
        "modpack:red_mushroom",
        "minecraft:red_mushroom",
        { id: "kubejs:nitrogen_fertilizer", amount: 10 },
        ['minecraft:red_mushroom_block', 'minecraft:mushroom_stem']
    );

    blockFilling(
        "modpack:obsidian",
        ['minecraft:magma_block'],
        { id: "minecraft:water", amount: 1000 },
        ['minecraft:obsidian']
    );

    blockFilling(
        "modpack:budding_amethyst",
        ['minecraft:amethyst_block'],
        { id: "kubejs:redstone_acid", amount: 1000 },
        ['minecraft:budding_amethyst', 'minecraft:amethyst_block', 'minecraft:amethyst_block']
    );

    blockFilling(
        "modpack:budding_amethyst",
        ['geode_plus:nether_quartz_crystal_block'],
        { id: "kubejs:redstone_acid", amount: 1000 },
        ['geode_plus:budding_nether_quartz', 'geode_plus:nether_quartz_crystal_block', 'geode_plus:nether_quartz_crystal_block']
    );

});