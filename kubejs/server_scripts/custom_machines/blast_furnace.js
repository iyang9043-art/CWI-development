MBDMachineEvents.onTick("machine:id", event => {
    var machine = event.getEvent().getMachine();
    var dir = machine.getPos().offset(multiplyVector(machine.getFrontFacing().get().getNormal(), 0,0,-1)).offset(0,-1,0/*<<<<< offset here*/);
    if(machine.level.getBlock(dir).id != "create:blaze_burner") console.error("Expected blaze burner, got " + machine.level.getBlock(dir).id); // this line is for debugging, if it works, remove for performance
    var heat = machine.getLevel().getBlockEntity(dir).saveWithId().get("fuelLevel");
    machine.getCustomData().putBoolean("heated", heat > 0);
    machine.getCustomData().putBoolean("superHeated", heat > 1);
    
});

function multiplyVector(vec, x, y, z) {
    return new Vec3i(vec.getX() * x, vec.getY() * y, vec.getZ() * z);
}