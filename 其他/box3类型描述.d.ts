interface Box3SoundEffectConfig {
  sample: string;
  radius: number;
  gain: number;
  gainRange: number;
  pitch: number;
  pitchRange: number;
}

/**
 * A single sound effect table
 */
declare class Box3SoundEffect implements Box3SoundEffectConfig {
  /**
   * Sample weight
   */
  radius: number;
  /**
   * Volume gain, makes sound louder
   */
  gain: number;
  /**
   * Variability in volume gain
   */
  gainRange: number;
  /**
   * Pitch adjustment multiplier.
   * * 1 : normal
   * * < 1 : slower playback
   * * > 1 : faster playback
   */
  pitch: number;
  /**
   * Variability in pitch
   */
  pitchRange: number;
  /**
   * Path to sample
   */
  sample: string;
}

/**
 * Triggers can be used to detect when an object enters some zone or leaves.
 */
declare class Box3Zone {
  /**
   * List all entities
   */
  entities: () => Box3Entity[];
  /**
   * Triggered when an entity enters the zone
   */
  onEnter: Box3EventChannel<Box3TriggerEvent>;
  nextEnter: Box3EventFuture<Box3TriggerEvent>;
  /**
   * Triggers when an entity leaves the zone
   */
  onLeave: Box3EventChannel<Box3TriggerEvent>;
  nextLeave: Box3EventFuture<Box3TriggerEvent>;
  /**
   * Destroys the zone
   */
  remove: () => void;
  /**
   * Bounds of the zone
   */
  bounds: Box3Bounds3;
  /**
   * Selector filter
   */
  selector: Box3SelectorString;
  /**
   * Controls how much the object's mass applies to the force
   * 0 = behaves like gravity
   * 1 = behaves like wind
   */
  massScale: number;
  /**
   * The amount of force to apply to the object
   */
  force: Box3Vector3;
  fogEnabled: boolean;
  fogColor: Box3RGBColor;
  fogStartDistance: number;
  fogHeightOffset: number;
  fogHeightFalloff: number;
  fogDensity: number;
  fogMax: number;
  snowEnabled: boolean;
  snowDensity: number;
  snowSizeLo: number;
  snowSizeHi: number;
  snowFallSpeed: number;
  snowSpinSpeed: number;
  snowColor: Box3RGBAColor;
  snowTexture: string;
  rainEnabled: boolean;
  rainDensity: number;
  rainDirection: Box3Vector3;
  rainSpeed: number;
  rainSizeLo: number;
  rainSizeHi: number;
  rainInterference: number;
  rainColor: Box3RGBAColor;
  skyEnabled: boolean;
  skyMode: 'natural' | 'manual';
  skySunPhase: number;
  skySunFrequency: number;
  skyLunarPhase: number;
  skySunDirection: Box3Vector3;
  skySunLight: Box3RGBColor;
  skyLeftLight: Box3RGBColor;
  skyRightLight: Box3RGBColor;
  skyBottomLight: Box3RGBColor;
  skyTopLight: Box3RGBColor;
  skyFrontLight: Box3RGBColor;
  skyBackLight: Box3RGBColor;

  /**
   * @ignore
   */
  constructor(
    /**
     * List all entities
     */
    entities: () => Box3Entity[],
    /**
     * Triggered when an entity enters the zone
     */
    onEnter: Box3EventChannel<Box3TriggerEvent>, nextEnter: Box3EventFuture<Box3TriggerEvent>,
    /**
     * Triggers when an entity leaves the zone
     */
    onLeave: Box3EventChannel<Box3TriggerEvent>, nextLeave: Box3EventFuture<Box3TriggerEvent>,
    /**
     * Destroys the zone
     */
    remove: () => void);
}

/**
 * Trigger constructor parameters
 */
declare type Box3ZoneConfig = {
  bounds: Box3Bounds3;
  selector: Box3SelectorString;
  massScale: number;
  force: Box3Vector3;
  fogEnabled: boolean;
  fogColor: Box3RGBColor;
  fogStartDistance: number;
  fogHeightOffset: number;
  fogHeightFalloff: number;
  fogDensity: number;
  fogMax: number;
  snowEnabled: boolean;
  snowDensity: number;
  snowSizeLo: number;
  snowSizeHi: number;
  snowFallSpeed: number;
  snowSpinSpeed: number;
  snowColor: Box3RGBAColor;
  snowTexture: string;
  rainEnabled: boolean;
  rainDensity: number;
  rainDirection: Box3Vector3;
  rainSpeed: number;
  rainSizeLo: number;
  rainSizeHi: number;
  rainInterference: number;
  rainColor: Box3RGBAColor;
  skyEnabled: boolean;
  skyMode: 'natural' | 'manual';
  skySunPhase: number;
  skySunFrequency: number;
  skyLunarPhase: number;
  skySunDirection: Box3Vector3;
  skySunLight: Box3RGBColor;
  skyLeftLight: Box3RGBColor;
  skyRightLight: Box3RGBColor;
  skyBottomLight: Box3RGBColor;
  skyTopLight: Box3RGBColor;
  skyFrontLight: Box3RGBColor;
  skyBackLight: Box3RGBColor;
};

/**
 * {@link Box3.Box3World} is the main entry point to the engine API.  Using this object you can control
 * global scene properties like the weather, timeOfDay, etc. and perform searches on the set of all {@link Box3.Box3Entity}
 * which exist in the world.
 */
declare class Box3World {
  /**
   * Public URL of the currently running world
   */
  url: URL;
  /**
   * Returns the remaining number of entities the script is allowed to create
   * @category entities
   */
  entityQuota: () => number;
  /**
   * @category health
   */
  onRespawn: Box3EventChannel<Box3RespawnEvent>;
  nextRespawn: Box3EventFuture<Box3RespawnEvent>;
  /**
   * Creates a new {@link Box3.Box3Entity} or makes a copy of an existing entity.
   * If entity quota is exceeded, then returns null.
   * @param config A set of initial values for the entity or a new entity which we want to copy
   * @returns A newly created entity with the given parameters
   * @category entity
   */
  createEntity: (config: Partial<Box3EntityConfig>) => Box3Entity | null;
  /**
   * The entities in box3 can be searched using a jQuery selector-like syntax.
   * For more examples see {@link Box3.Box3SelectorString}
   *
   * @param selector a selector search pattern
   * @returns the first entity which matches the selector/
   * @category entity
   */
  querySelector: (selector: Box3SelectorString) => Box3Entity | null;
  /**
   * The entities in box3 can be searched using a jQuery selector-like syntax
   * For more examples see {@link Box3.Box3SelectorString}
   *
   * @param selector a selector search pattern
   * @returns All entities which match the selector
   * @category entity
   */
  querySelectorAll: (selector: Box3SelectorString) => Box3Entity[];
  /**
   * Test a selector on an entity
   *
   * @param selector the selector pattern to test
   * @param entity The entity to test
   * @category entity
   */
  testSelector: (selector: Box3SelectorString, entity: Box3Entity) => boolean;
  /**
   * Disables collisions between the set of all entities matching aSelector and bSelector
   *
   * @param aSelector the selector for the first set of entities
   * @param bSelector the selector for the second set of entities
   * @category physics
   */
  addCollisionFilter: (aSelector: Box3SelectorString, bSelector: Box3SelectorString) => void;
  /**
   * Removes collision filter between aSelector and bSelector
   *
   * @param aSelector the selector for the first set of entities
   * @param bSelector the selector for the second set of entities
   * @category physics
   */
  removeCollisionFilter: (aSelector: Box3SelectorString, bSelector: Box3SelectorString) => void;
  /**
   * Clears all collision filters
   *
   * @category physics
   */
  clearCollisionFilters: () => void;
  /**
   * Returns a list of all currently active collision filters
   *
   * @returns All currently active collision filters
   * @category physics
   */
  collisionFilters: () => string[][];
  /**
   * Shoots a ray through the world from `origin` in `direction`
   * @param origin the start point of the ray
   * @param direction the direction of the ray
   * @param options An option configuration parameter
   * @returns Information about the resulting raycast
   * @category search
   */
  raycast: (origin: Box3Vector3, direction: Box3Vector3, options?: Partial<Box3RaycastOptions>) => Box3RaycastResult;
  /**
   * Search for all entities contained in a bounding box
   * @param bounds the bounding box to search
   * @returns All entities contained in ``bounds``
   */
  searchBox: (bounds: Box3Bounds3) => Box3Entity[];
  /**
   * An event handler called each tick
   * @category tick
   */
  onTick: Box3EventChannel<Box3TickEvent>;
  nextTick: Box3EventFuture<Box3TickEvent>;
  /**
   * Called when an entity takes damage
   * @category health
   */
  onTakeDamage: Box3EventChannel<Box3DamageEvent>;
  nextTakeDamage: Box3EventFuture<Box3DamageEvent>;
  /**
   * Called when an entity dies
   * @category health
   */
  onDie: Box3EventChannel<Box3DieEvent>;
  nextDie: Box3EventFuture<Box3DieEvent>;
  /**
   * Called whenever a player joins the game
   * @category player
   */
  onPlayerJoin: Box3EventChannel<Box3PlayerEntityEvent>;
  nextPlayerJoin: Box3EventFuture<Box3PlayerEntityEvent>;
  /**
   * Called whenever a player leaves the game
   * @category player
   */
  onPlayerLeave: Box3EventChannel<Box3PlayerEntityEvent>;
  nextPlayerLeave: Box3EventFuture<Box3PlayerEntityEvent>;
  /**
   * Called whenever an entity is created
   * @category entity
   */
  onEntityCreate: Box3EventChannel<Box3EntityEvent>;
  nextEntityCreate: Box3EventFuture<Box3EntityEvent>;
  /**
   * Called whenever an entity is destroyed
   * @category chat
   */
  onEntityDestroy: Box3EventChannel<Box3EntityEvent>;
  nextEntityDestroy: Box3EventFuture<Box3EntityEvent>;
  /**
   * Broadcast a global message to all players
   * @param message is some text we want to broadcast
   * @category player
   */
  say: (message: string) => void;
  /**
   * Called whenever a player says something
   * @category player
   */
  onChat: Box3EventChannel<Box3ChatEvent>;
  nextChat: Box3EventFuture<Box3ChatEvent>;
  /**
   * Called whenever a player clicks on an object
   * @category player
   */
  onClick: Box3EventChannel<Box3ClickEvent>;
  nextClick: Box3EventFuture<Box3ClickEvent>;
  /**
   * Called whenever a player pushes a button
   * @category player
   */
  onPress: Box3EventChannel<Box3InputEvent>;
  nextPress: Box3EventFuture<Box3InputEvent>;
  /**
   * Called whenever a player releases a button
   * @category player
   */
  onRelease: Box3EventChannel<Box3InputEvent>;
  nextRelease: Box3EventFuture<Box3InputEvent>;
  /**
   * Called whenever two entities collide
   * @category entity
   */
  onEntityContact: Box3EventChannel<Box3EntityContactEvent>;
  nextEntityContact: Box3EventFuture<Box3EntityContactEvent>;
  /**
   * Called whenever two entities stop colliding
   * @category entity
   */
  onEntitySeparate: Box3EventChannel<Box3EntityContactEvent>;
  nextEntitySeparate: Box3EventFuture<Box3EntityContactEvent>;
  /**
   * Called whenever an entity touches a voxel
   * @category entity
   */
  onVoxelContact: Box3EventChannel<Box3VoxelContactEvent>;
  nextVoxelContact: Box3EventFuture<Box3VoxelContactEvent>;
  /**
   * Called whenever an entity stops touching a voxel
   * @category entity
   */
  onVoxelSeparate: Box3EventChannel<Box3VoxelContactEvent>;
  nextVoxelSeparate: Box3EventFuture<Box3VoxelContactEvent>;
  /**
   * Called when an entity enters a fluid
   * @category entity
   */
  onFluidEnter: Box3EventChannel<Box3FluidContactEvent>;
  nextFluidEnter: Box3EventFuture<Box3FluidContactEvent>;
  /**
   * Called when an entity leaves a fluid
   * @category entity
   */
  onFluidLeave: Box3EventChannel<Box3FluidContactEvent>;
  nextFluidLeave: Box3EventFuture<Box3FluidContactEvent>;
  /**
   * Zones
   * @category zone
   */
  zones: () => Box3Zone[];
  addZone: (config: Partial<Box3ZoneConfig>) => Box3Zone;
  removeZone: (trigger: Box3Zone) => void;
  /**
   * @category interactive
   */
  onInteract: Box3EventChannel<Box3InteractEvent>;
  nextInteract: Box3EventFuture<Box3InteractEvent>;
  /**
   * Plays a sound at a given location
   */
  sound: (spec: {
    sample: string;
    position?: Box3Vector3;
    radius?: number;
    gain?: number;
    pitch?: number;
  } | string) => void;
  /**
   * The name of the project (read only)
   */
  projectName: string;
  currentTick: number;
  /**
   * Type of lighting to use for the sky and ambient light
   */
  lightMode: 'natural' | 'manual';
  /**
   * The initial phase of the sun's motion through the sky.  The time of day is calculated using the formula:
   * `timeOfDay = (sunPhase + sunFrequency * tick) % 1`
   * @category weather
   */
  sunPhase: number;
  /**
   * The frequency at which the sun moves through the sky.  Higher values = faster sun movement.
   * @category weather
   */
  sunFrequency: number;
  /**
   * The phase of the moon.  Must be between 0 and 1
   * @category weather
   */
  lunarPhase: number;
  /**
   * Direction of sun (only used if ambientLightMode === 'manual)
   * @category weather
   */
  sunDirection: Box3Vector3;
  /**
   * Light level of the sun (only used if ambientLightMode === 'manual')
   * @category weather
   */
  sunLight: Box3RGBColor;
  /**
   * -x direction ambient light value (only used if ambientLightMode === 'manual')
   * @category weather
   */
  skyLeftLight: Box3RGBColor;
  /**
   * +x direction ambient light value (only used if ambientLightMode === 'manual')
   * @category weather
   */
  skyRightLight: Box3RGBColor;
  /**
   * -y direction ambient light value (only used if ambientLightMode === 'manual')
   * @category weather
   */
  skyBottomLight: Box3RGBColor;
  /**
   * +y direction ambient light value (only used if ambientLightMode === 'manual')
   * @category weather
   */
  skyTopLight: Box3RGBColor;
  /**
   * -z direction ambient light value (only used if ambientLightMode === 'manual')
   * @category weather
   */
  skyFrontLight: Box3RGBColor;
  /**
   * +z direction ambient light value (only used if ambientLightMode === 'manual')
   * @category weather
   */
  skyBackLight: Box3RGBColor;
  /**
   * Fog color
   * @category weather
   */
  fogColor: Box3RGBColor;
  /**
   * Distance when fog starts
   * @category weather
   */
  fogStartDistance: number;
  /**
   * Height that fog starts at
   * @category weather
   */
  fogHeightOffset: number;
  /**
   * Rate that height fog decays
   * @category weather
   */
  fogHeightFalloff: number;
  /**
   * Amount of uniform fog (if > 0, cannot see skybox)
   * @category weather
   */
  fogUniformDensity: number;
  /**
   * Maximum amount of fog
   * @category weather
   */
  maxFog: number;
  /**
   * @category weather
   */
  snowDensity: number;
  /**
   * @category weather
   */
  snowSizeLo: number;
  /**
   * @category weather
   */
  snowSizeHi: number;
  /**
   * @category weather
   */
  snowFallSpeed: number;
  /**
   * @category weather
   */
  snowSpinSpeed: number;
  /**
   * @category weather
   */
  snowColor: Box3RGBAColor;
  /**
   * @category weather
   */
  snowTexture: string;
  /**
   * @category weather
   */
  rainDensity: number;
  /**
   * @category weather
   */
  rainDirection: Box3Vector3;
  /**
   * @category weather
   */
  rainSpeed: number;
  /**
   * @category weather
   */
  rainSizeLo: number;
  /**
   * @category weather
   */
  rainSizeHi: number;
  /**
   * @category weather
   */
  rainInterference: number;
  /**
   * @category weather
   */
  rainColor: Box3RGBAColor;
  /**
   * Amount and direction of gravitational field
   * @category physics
   */
  gravity: number;
  /**
   * Amount of air friction
   * @category physics
   */
  airFriction: number;
  /**
   * Plays when a voxel breaks
   * @category sound
   */
  breakVoxelSound: Box3SoundEffect;
  /**
   * Plays when a voxel is placed
   * @category sound
   */
  placeVoxelSound: Box3SoundEffect;
  /**
   * Plays when a player joins
   * @category sound
   */
  playerJoinSound: Box3SoundEffect;
  /**
   * Plays when a player leaves
   * @category sound
   */
  playerLeaveSound: Box3SoundEffect;
  /**
   * Ambient sound, plays in background globally
   * @category sound
   */
  ambientSound: Box3SoundEffect;

  /**
   * @ignore
   */
  constructor(
    /**
     * Public URL of the currently running world
     */
    url: URL,
    /**
     * Returns the remaining number of entities the script is allowed to create
     * @category entities
     */
    entityQuota: () => number,
    /**
     * @category health
     */
    onRespawn: Box3EventChannel<Box3RespawnEvent>, nextRespawn: Box3EventFuture<Box3RespawnEvent>,
    /**
     * Creates a new {@link Box3.Box3Entity} or makes a copy of an existing entity.
     * If entity quota is exceeded, then returns null.
     * @param config A set of initial values for the entity or a new entity which we want to copy
     * @returns A newly created entity with the given parameters
     * @category entity
     */
    createEntity: (config: Partial<Box3EntityConfig>) => Box3Entity | null,
    /**
     * The entities in box3 can be searched using a jQuery selector-like syntax.
     * For more examples see {@link Box3.Box3SelectorString}
     *
     * @param selector a selector search pattern
     * @returns the first entity which matches the selector/
     * @category entity
     */
    querySelector: (selector: Box3SelectorString) => Box3Entity | null,
    /**
     * The entities in box3 can be searched using a jQuery selector-like syntax
     * For more examples see {@link Box3.Box3SelectorString}
     *
     * @param selector a selector search pattern
     * @returns All entities which match the selector
     * @category entity
     */
    querySelectorAll: (selector: Box3SelectorString) => Box3Entity[],
    /**
     * Test a selector on an entity
     *
     * @param selector the selector pattern to test
     * @param entity The entity to test
     * @category entity
     */
    testSelector: (selector: Box3SelectorString, entity: Box3Entity) => boolean,
    /**
     * Disables collisions between the set of all entities matching aSelector and bSelector
     *
     * @param aSelector the selector for the first set of entities
     * @param bSelector the selector for the second set of entities
     * @category physics
     */
    addCollisionFilter: (aSelector: Box3SelectorString, bSelector: Box3SelectorString) => void,
    /**
     * Removes collision filter between aSelector and bSelector
     *
     * @param aSelector the selector for the first set of entities
     * @param bSelector the selector for the second set of entities
     * @category physics
     */
    removeCollisionFilter: (aSelector: Box3SelectorString, bSelector: Box3SelectorString) => void,
    /**
     * Clears all collision filters
     *
     * @category physics
     */
    clearCollisionFilters: () => void,
    /**
     * Returns a list of all currently active collision filters
     *
     * @returns All currently active collision filters
     * @category physics
     */
    collisionFilters: () => string[][],
    /**
     * Shoots a ray through the world from `origin` in `direction`
     * @param origin the start point of the ray
     * @param direction the direction of the ray
     * @param options An option configuration parameter
     * @returns Information about the resulting raycast
     * @category search
     */
    raycast: (origin: Box3Vector3, direction: Box3Vector3, options?: Partial<Box3RaycastOptions>) => Box3RaycastResult,
    /**
     * Search for all entities contained in a bounding box
     * @param bounds the bounding box to search
     * @returns All entities contained in ``bounds``
     */
    searchBox: (bounds: Box3Bounds3) => Box3Entity[],
    /**
     * An event handler called each tick
     * @category tick
     */
    onTick: Box3EventChannel<Box3TickEvent>, nextTick: Box3EventFuture<Box3TickEvent>,
    /**
     * Called when an entity takes damage
     * @category health
     */
    onTakeDamage: Box3EventChannel<Box3DamageEvent>, nextTakeDamage: Box3EventFuture<Box3DamageEvent>,
    /**
     * Called when an entity dies
     * @category health
     */
    onDie: Box3EventChannel<Box3DieEvent>, nextDie: Box3EventFuture<Box3DieEvent>,
    /**
     * Called whenever a player joins the game
     * @category player
     */
    onPlayerJoin: Box3EventChannel<Box3PlayerEntityEvent>, nextPlayerJoin: Box3EventFuture<Box3PlayerEntityEvent>,
    /**
     * Called whenever a player leaves the game
     * @category player
     */
    onPlayerLeave: Box3EventChannel<Box3PlayerEntityEvent>, nextPlayerLeave: Box3EventFuture<Box3PlayerEntityEvent>,
    /**
     * Called whenever an entity is created
     * @category entity
     */
    onEntityCreate: Box3EventChannel<Box3EntityEvent>, nextEntityCreate: Box3EventFuture<Box3EntityEvent>,
    /**
     * Called whenever an entity is destroyed
     * @category chat
     */
    onEntityDestroy: Box3EventChannel<Box3EntityEvent>, nextEntityDestroy: Box3EventFuture<Box3EntityEvent>,
    /**
     * Broadcast a global message to all players
     * @param message is some text we want to broadcast
     * @category player
     */
    say: (message: string) => void,
    /**
     * Called whenever a player says something
     * @category player
     */
    onChat: Box3EventChannel<Box3ChatEvent>, nextChat: Box3EventFuture<Box3ChatEvent>,
    /**
     * Called whenever a player clicks on an object
     * @category player
     */
    onClick: Box3EventChannel<Box3ClickEvent>, nextClick: Box3EventFuture<Box3ClickEvent>,
    /**
     * Called whenever a player pushes a button
     * @category player
     */
    onPress: Box3EventChannel<Box3InputEvent>, nextPress: Box3EventFuture<Box3InputEvent>,
    /**
     * Called whenever a player releases a button
     * @category player
     */
    onRelease: Box3EventChannel<Box3InputEvent>, nextRelease: Box3EventFuture<Box3InputEvent>,
    /**
     * Called whenever two entities collide
     * @category entity
     */
    onEntityContact: Box3EventChannel<Box3EntityContactEvent>, nextEntityContact: Box3EventFuture<Box3EntityContactEvent>,
    /**
     * Called whenever two entities stop colliding
     * @category entity
     */
    onEntitySeparate: Box3EventChannel<Box3EntityContactEvent>, nextEntitySeparate: Box3EventFuture<Box3EntityContactEvent>,
    /**
     * Called whenever an entity touches a voxel
     * @category entity
     */
    onVoxelContact: Box3EventChannel<Box3VoxelContactEvent>, nextVoxelContact: Box3EventFuture<Box3VoxelContactEvent>,
    /**
     * Called whenever an entity stops touching a voxel
     * @category entity
     */
    onVoxelSeparate: Box3EventChannel<Box3VoxelContactEvent>, nextVoxelSeparate: Box3EventFuture<Box3VoxelContactEvent>,
    /**
     * Called when an entity enters a fluid
     * @category entity
     */
    onFluidEnter: Box3EventChannel<Box3FluidContactEvent>, nextFluidEnter: Box3EventFuture<Box3FluidContactEvent>,
    /**
     * Called when an entity leaves a fluid
     * @category entity
     */
    onFluidLeave: Box3EventChannel<Box3FluidContactEvent>, nextFluidLeave: Box3EventFuture<Box3FluidContactEvent>,
    /**
     * Zones
     * @category zone
     */
    zones: () => Box3Zone[], addZone: (config: Partial<Box3ZoneConfig>) => Box3Zone, removeZone: (trigger: Box3Zone) => void,
    /**
     * @category interactive
     */
    onInteract: Box3EventChannel<Box3InteractEvent>, nextInteract: Box3EventFuture<Box3InteractEvent>,
    /**
     * Plays a sound at a given location
     */
    sound: (spec: {
      sample: string;
      position?: Box3Vector3;
      radius?: number;
      gain?: number;
      pitch?: number;
    } | string) => void);
}

/**
 * {@link Box3.Box3Voxels} gives an interface for all the voxels in Box3.  You can use it to control the terrain
 */
declare class Box3Voxels {
  /**
   * Size of the voxel grid along the x/y/z dimensions
   */
  shape: Box3Vector3;
  /**
   * An array of all supported voxel types
   * @category names
   */
  VoxelTypes: string[];
  /**
   * @param name the human readable name for the voxel
   * @returns the voxel id number
   * @category names
   */
  id: (name: string) => number;
  /**
   * @param id the numerical id of a voxel
   * @returns the human readable voxel name
   * @category names
   */
  name: (id: number) => string;
  /**
   * Sets a voxel in the grid
   * @param voxel The name of the voxel or its voxel id
   * @param rotation The rotation code of the voxel
   * @returns the id of the updated voxel
   */
  setVoxel: (x: number, y: number, z: number, voxel: number | string, rotation?: number | string) => number;
  /**
   * Get the type of a voxel at some point
   * @returns the voxel type code at point x/y/z
   */
  getVoxel: (x: number, y: number, z: number) => number;
  /**
   * Get the rotation of a voxel at point x/y/z
   * @returns the voxel rotation code
   */
  getVoxelRotation: (x: number, y: number, z: number) => number;
  /**
   * Sets a voxel in the grid directly using its id code
   * @category advanced
   */
  setVoxelId: (x: number, y: number, z: number, voxel: number) => number;
  /**
   * Retrieves the voxel id in the grid
   * @category advanced
   */
  getVoxelId: (x: number, y: number, z: number) => number;

  /**
   * @ignore
   */
  constructor(
    /**
     * Size of the voxel grid along the x/y/z dimensions
     */
    shape: Box3Vector3,
    /**
     * An array of all supported voxel types
     * @category names
     */
    VoxelTypes: string[],
    /**
     * @param name the human readable name for the voxel
     * @returns the voxel id number
     * @category names
     */
    id: (name: string) => number,
    /**
     * @param id the numerical id of a voxel
     * @returns the human readable voxel name
     * @category names
     */
    name: (id: number) => string,
    /**
     * Sets a voxel in the grid
     * @param voxel The name of the voxel or its voxel id
     * @param rotation The rotation code of the voxel
     * @returns the id of the updated voxel
     */
    setVoxel: (x: number, y: number, z: number, voxel: number | string, rotation?: number | string) => number,
    /**
     * Get the type of a voxel at some point
     * @returns the voxel type code at point x/y/z
     */
    getVoxel: (x: number, y: number, z: number) => number,
    /**
     * Get the rotation of a voxel at point x/y/z
     * @returns the voxel rotation code
     */
    getVoxelRotation: (x: number, y: number, z: number) => number,
    /**
     * Sets a voxel in the grid directly using its id code
     * @category advanced
     */
    setVoxelId: (x: number, y: number, z: number, voxel: number) => number,
    /**
     * Retrieves the voxel id in the grid
     * @category advanced
     */
    getVoxelId: (x: number, y: number, z: number) => number);
}

declare type Box3PlayerEntity = Box3Entity & {
  player: Box3Player;
  isPlayer: true;
};
declare type Box3PlayerEntityEvent = Box3EntityEvent & {
  entity: Box3PlayerEntity;
};

/**
 * A set of parameters which can be used to specify an entity
 */
interface Box3EntityConfig {
  position: Box3Vector3;
  velocity: Box3Vector3;
  bounds: Box3Vector3;
  mass: number;
  friction: number;
  restitution: number;
  collides: boolean;
  fixed: boolean;
  gravity: boolean;
  mesh: string;
  meshColor: Box3RGBAColor;
  meshScale: Box3Vector3;
  meshOrientation: Box3Quaternion;
  meshMetalness: number;
  meshEmissive: number;
  meshShininess: number;
  particleRate: number;
  particleRateSpread: number;
  particleLimit: number;
  particleColor: Box3RGBColor[];
  particleSize: number[];
  particleSizeSpread: number;
  particleLifetime: number;
  particleLifetimeSpread: number;
  particleVelocity: Box3Vector3;
  particleVelocitySpread: Box3Vector3;
  particleDamping: number;
  particleAcceleration: Box3Vector3;
  particleNoise: number;
  particleNoiseFrequency: number;
  particleTarget: Box3Entity | null;
  particleTargetWeight: number;
  enableInteract: boolean;
  interactColor: Box3RGBColor;
  interactHint: string;
  interactRadius: number;
  hurtSound: Box3SoundEffectConfig;
  dieSound: Box3SoundEffectConfig;
  interactSound: Box3SoundEffectConfig;
  chatSound: Box3SoundEffectConfig;
  id: string;
  tags: (() => string[]) | string[];
}

interface Box3HurtOptions {
  attacker: Box3Entity;
  damageType: string;
}

/**
 * Entities are game objects in Box3.  They can be used to encode things like players, objects, etc.
 */
declare class Box3Entity implements Box3EntityConfig {
  /**
   * Set of all tags assigned to the entity in the editor
   * @category selectors
   */
  tags: () => string[];
  /**
   * Adds a new tag to the entity
   * @category selectors
   */
  addTag: (tag: string) => void;
  /**
   * Removes a tag from the entity
   * @category selectors
   */
  removeTag: (tag: string) => void;
  /**
   * Tests if an entity has a tag
   * @category selectors
   */
  hasTag: (tag: string) => boolean;
  /**
   * Destroys the entity
   * @category destroy
   */
  destroy: () => void;
  /**
   * Called when the entity is destroyed
   * @category destroy
   */
  onDestroy: Box3EventChannel<Box3EntityEvent>;
  nextDestroy: Box3EventFuture<Box3EntityEvent>;
  /**
   * Called when entity takes damage
   * @category health
   */
  onTakeDamage: Box3EventChannel<Box3DamageEvent>;
  nextTakeDamage: Box3EventFuture<Box3DamageEvent>;
  /**
   * Called when an entity dies
   * @category health
   */
  onDie: Box3EventChannel<Box3DieEvent>;
  nextDie: Box3EventFuture<Box3DieEvent>;
  /**
   * Deals damage to an entity
   * @category health
   */
  hurt: (amount: number, options?: Partial<Box3HurtOptions>) => void;
  /**
   * Makes the entity talk
   * @category chat
   */
  say: (message: string) => void;
  /**
   * Called whenever a player clicks on this entity
   */
  onClick: Box3EventChannel<Box3ClickEvent>;
  nextClick: Box3EventFuture<Box3ClickEvent>;
  /**
   * Called when the entity touches another entity
   * @category physics
   */
  onEntityContact: Box3EventChannel<Box3EntityContactEvent>;
  nextEntityContact: Box3EventFuture<Box3EntityContactEvent>;
  /**
   * Called when the entity stops touching another entity
   * @category physics
   */
  onEntitySeparate: Box3EventChannel<Box3EntityContactEvent>;
  nextEntitySeparate: Box3EventFuture<Box3EntityContactEvent>;
  /**
   * Called when the entity touches a voxel
   * @category physics
   */
  onVoxelContact: Box3EventChannel<Box3VoxelContactEvent>;
  nextVoxelContact: Box3EventFuture<Box3VoxelContactEvent>;
  /**
   * Called when the entity stops touching a voxel
   * @category physics
   */
  onVoxelSeparate: Box3EventChannel<Box3VoxelContactEvent>;
  nextVoxelSeparate: Box3EventFuture<Box3VoxelContactEvent>;
  /**
   * Called when the entity enters a fluid
   * @category physics
   */
  onFluidEnter: Box3EventChannel<Box3FluidContactEvent>;
  nextFluidEnter: Box3EventFuture<Box3FluidContactEvent>;
  /**
   * Called when the entity leaves a fluid
   * @category physics
   */
  onFluidLeave: Box3EventChannel<Box3FluidContactEvent>;
  nextFluidLeave: Box3EventFuture<Box3FluidContactEvent>;
  /**
   * Called when an entity interact with another entity
   * @category interactive
   */
  onInteract: Box3EventChannel<Box3InteractEvent>;
  nextInteract: Box3EventFuture<Box3InteractEvent>;
  /**
   * Play a sound effect at the location of this entity
   * @category sound
   */
  sound: (spec: {
    sample: string;
    radius?: number;
    pitch?: number;
    gain?: number;
  } | string) => void;
  /**
   * Name of entity seed in the editor
   * @category selectors
   */
  id: string;
  /**
   * If true, entity is destroyed.
   * @category destroy
   */
  destroyed: boolean;
  /**
   * @category physics
   */
  position: Box3Vector3;
  /**
   * @category physics
   */
  velocity: Box3Vector3;
  /**
   * Radius of the entity's bounding box along x/y/z
   * @category physics
   */
  bounds: Box3Vector3;
  /**
   * Mass of entity
   * @category physics
   */
  mass: number;
  /**
   * Controls object stickiness (0 = slippery, 1 = sticky)
   * @category physics
   */
  friction: number;
  /**
   * Controls bouncy (0 = soft, 1 = bouncy)
   * @category physics
   */
  restitution: number;
  /**
   * If false, object does not collide
   * @category physics
   */
  collides: boolean;
  /**
   * If false, object does not fall
   * @category physics
   */
  gravity: boolean;
  /**
   * If true, object does not move
   * @category physics
   */
  fixed: boolean;
  /**
   * Net contact force applied to this object
   * @category physics
   */
  contactForce: Box3Vector3;
  /**
   * Returns a list of all active body contacts
   * @category physics
   */
  entityContacts: Box3EntityContact[];
  /**
   * Returns a list of all active voxel contacts
   * @category physics
   */
  voxelContacts: Box3VoxelContact[];
  /**
   * Returns a list of all active fluid contacts
   * @category physics
   */
  fluidContacts: Box3FluidContact[];
  /**
   * Hash of entity mesh.  If set to empty string/'' then entity does not have a mesh.
   * Unless object is a player, if mesh is set then mesh is used to compute object bounds
   * @category mesh
   */
  mesh: string;
  /**
   * Makes the mesh invisible
   * @category mesh
   */
  meshInvisible: boolean;
  /**
   * @category mesh
   */
  meshScale: Box3Vector3;
  /**
   * @category mesh
   */
  meshOrientation: Box3Quaternion;
  /**
   * @category mesh
   */
  meshOffset: Box3Vector3;
  /**
   * @category mesh
   */
  meshColor: Box3RGBAColor;
  /**
   * @category mesh
   */
  meshMetalness: number;
  /**
   * @category mesh
   */
  meshEmissive: number;
  /**
   * @category mesh
   */
  meshShininess: number;
  /**
   * @category health
   */
  enableDamage: boolean;
  /**
   * @category health
   */
  showHealthBar: boolean;
  /**
   * @category health
   */
  hp: number;
  /**
   * @category health
   */
  maxHp: number;
  /**
   * If true, then the entity is a player
   * @category player
   */
  isPlayer: boolean;
  /**
   * Reference to all player specific state and methods
   * @category player
   */
  player?: Box3Player;
  /**
   * Particle emission in rate in particles / second
   * @category particle
   */
  particleRate: number;
  /**
   * Variability in particle emission.
   * @category particle
   */
  particleRateSpread: number;
  /**
   * Maxmimum number of particles this entity can emit
   * @category particle
   */
  particleLimit: number;
  /**
   * Particle color spline.  Maximum 5 entries, particles interpolate colors along these 5 points over their lifetime.
   * Colors are emissive values and can be any number between 0 and 256
   * @category particle
   */
  particleColor: Box3RGBColor[];
  /**
   * Particle size spline.  Maximum 5 entries, particles interpolate size along these 5 points over their lifetime.
   * @category particle
   */
  particleSize: number[];
  /**
   * Particle size distribution
   * @category particle
   */
  particleSizeSpread: number;
  /**
   * Controls how long each particle lives in seconds
   * @category particle
   */
  particleLifetime: number;
  /**
   * Variation in particle lifetime in seconds
   * @category particle
   */
  particleLifetimeSpread: number;
  /**
   * Particle velocity bias.  Units are voxels/tick
   * @category particle
   */
  particleVelocity: Box3Vector3;
  /**
   * Particle velocity randomization range.  Units are voxels/tick
   * @category particle
   */
  particleVelocitySpread: Box3Vector3;
  /**
   * Particle damping exponent.
   * 0 = no damping
   * positive values slow particles
   * negative values accelerate particles
   * @category particle
   */
  particleDamping: number;
  /**
   * Particle acceleration/gravity force vector
   * Units are voxels/(tick^2)
   * @category particle
   */
  particleAcceleration: Box3Vector3;
  /**
   * Particle noise amplitude.  Affects particle movement
   * @category particle
   */
  particleNoise: number;
  /**
   * Particle noise frequency.  Increase rate of movement from noise bias
   * @category particle
   */
  particleNoiseFrequency: number;
  /**
   * Particle target entity
   * @category particle
   */
  particleTarget: Box3Entity | null;
  /**
   * Particle target weight
   * @category particle
   */
  particleTargetWeight: number;
  /**
   * Enables interaction
   * @category interact
   */
  enableInteract: boolean;
  /**
   * Color of the interact hint text
   * @category interact
   */
  interactColor: Box3RGBColor;
  /**
   * Hint text of interactive entity
   * @category interact
   */
  interactHint: string;
  /**
   * Radius around entity for interactivity
   * @category interact
   */
  interactRadius: number;
  /**
   * Plays when an entity chat
   * @category sound
   */
  chatSound: Box3SoundEffect;
  /**
   * Plays when entity takes damage
   * @category sound
   */
  hurtSound: Box3SoundEffect;
  /**
   * Plays when entity dies
   * @category sound
   */
  dieSound: Box3SoundEffect;
  /**
   * Plays when entity is interacted with
   * @category sound
   */
  interactSound: Box3SoundEffect;

  /**
   * @ignore
   */
  constructor(
    /**
     * Set of all tags assigned to the entity in the editor
     * @category selectors
     */
    tags: () => string[],
    /**
     * Adds a new tag to the entity
     * @category selectors
     */
    addTag: (tag: string) => void,
    /**
     * Removes a tag from the entity
     * @category selectors
     */
    removeTag: (tag: string) => void,
    /**
     * Tests if an entity has a tag
     * @category selectors
     */
    hasTag: (tag: string) => boolean,
    /**
     * Destroys the entity
     * @category destroy
     */
    destroy: () => void,
    /**
     * Called when the entity is destroyed
     * @category destroy
     */
    onDestroy: Box3EventChannel<Box3EntityEvent>, nextDestroy: Box3EventFuture<Box3EntityEvent>,
    /**
     * Called when entity takes damage
     * @category health
     */
    onTakeDamage: Box3EventChannel<Box3DamageEvent>, nextTakeDamage: Box3EventFuture<Box3DamageEvent>,
    /**
     * Called when an entity dies
     * @category health
     */
    onDie: Box3EventChannel<Box3DieEvent>, nextDie: Box3EventFuture<Box3DieEvent>,
    /**
     * Deals damage to an entity
     * @category health
     */
    hurt: (amount: number, options?: Partial<Box3HurtOptions>) => void,
    /**
     * Makes the entity talk
     * @category chat
     */
    say: (message: string) => void,
    /**
     * Called whenever a player clicks on this entity
     */
    onClick: Box3EventChannel<Box3ClickEvent>, nextClick: Box3EventFuture<Box3ClickEvent>,
    /**
     * Called when the entity touches another entity
     * @category physics
     */
    onEntityContact: Box3EventChannel<Box3EntityContactEvent>, nextEntityContact: Box3EventFuture<Box3EntityContactEvent>,
    /**
     * Called when the entity stops touching another entity
     * @category physics
     */
    onEntitySeparate: Box3EventChannel<Box3EntityContactEvent>, nextEntitySeparate: Box3EventFuture<Box3EntityContactEvent>,
    /**
     * Called when the entity touches a voxel
     * @category physics
     */
    onVoxelContact: Box3EventChannel<Box3VoxelContactEvent>, nextVoxelContact: Box3EventFuture<Box3VoxelContactEvent>,
    /**
     * Called when the entity stops touching a voxel
     * @category physics
     */
    onVoxelSeparate: Box3EventChannel<Box3VoxelContactEvent>, nextVoxelSeparate: Box3EventFuture<Box3VoxelContactEvent>,
    /**
     * Called when the entity enters a fluid
     * @category physics
     */
    onFluidEnter: Box3EventChannel<Box3FluidContactEvent>, nextFluidEnter: Box3EventFuture<Box3FluidContactEvent>,
    /**
     * Called when the entity leaves a fluid
     * @category physics
     */
    onFluidLeave: Box3EventChannel<Box3FluidContactEvent>, nextFluidLeave: Box3EventFuture<Box3FluidContactEvent>,
    /**
     * Called when an entity interact with another entity
     * @category interactive
     */
    onInteract: Box3EventChannel<Box3InteractEvent>, nextInteract: Box3EventFuture<Box3InteractEvent>,
    /**
     * Play a sound effect at the location of this entity
     * @category sound
     */
    sound: (spec: {
      sample: string;
      radius?: number;
      pitch?: number;
      gain?: number;
    } | string) => void);
}

/**
 * An active entity pair contact
 */
declare class Box3EntityContact {
  other: Box3Entity;
  force: Box3Vector3;
  axis: Box3Vector3;

  constructor(other: Box3Entity, force: Box3Vector3, axis: Box3Vector3);
}

/**
 * An active voxel contact state
 */
declare class Box3VoxelContact {
  x: number;
  y: number;
  z: number;
  voxel: number;
  force: Box3Vector3;
  axis: Box3Vector3;

  constructor(x: number, y: number, z: number, voxel: number, force: Box3Vector3, axis: Box3Vector3);
}

/**
 * An active fluid contact
 */
declare class Box3FluidContact {
  voxel: number;
  volume: number;

  constructor(voxel: number, volume: number);
}

/**
 * Player movement state
 */
declare enum Box3PlayerMoveState {
  FLYING = "fly",
  GROUND = "ground",
  SWIM = "swim",
  FALL = "fall",
  JUMP = "jump",
  DOUBLE_JUMP = "jump2"
}

/**
 * Player walking state
 */
declare enum Box3PlayerWalkState {
  NONE = "",
  CROUCH = "crouch",
  WALK = "walk",
  RUN = "run"
}

declare enum Box3BodyPart {
  HIPS = "hips",
  TORSO = "torso",
  NECK = "neck",
  HEAD = "head",
  LEFT_SHOULDER = "leftShoulder",
  LEFT_UPPER_ARM = "leftUpperArm",
  LEFT_LOWER_ARM = "leftLowerArm",
  LEFT_HAND = "leftHand",
  LEFT_UPPER_LEG = "leftUpperLeg",
  LEFT_LOWER_LEG = "leftLowerLeg",
  LEFT_FOOT = "leftFoot",
  RIGHT_SHOULDER = "rightShoulder",
  RIGHT_UPPER_ARM = "rightUpperArm",
  RIGHT_LOWER_ARM = "rightLowerArm",
  RIGHT_HAND = "rightHand",
  RIGHT_UPPER_LEG = "rightUpperLeg",
  RIGHT_LOWER_LEG = "rightLowerLeg",
  RIGHT_FOOT = "rightFoot"
}

interface Box3WearableSpec {
  bodyPart: Box3BodyPart;
  mesh: string;
  color: Box3RGBColor;
  emissive: number;
  metalness: number;
  shininess: number;
  orientation: Box3Quaternion;
  scale: Box3Vector3;
  offset: Box3Vector3;
}

declare class Box3Wearable implements Box3WearableSpec {
  /**
   * The player this wearable is attached to
   */
  player: Box3Player | null;
  /**
   * Which body part this wearable is attached to
   */
  bodyPart: Box3BodyPart;
  /**
   * The mesh of this wearable
   */
  mesh: string;
  /**
   * Optional color tint of the wearable
   */
  color: Box3RGBColor;
  /**
   * Emissive modifier for wearable
   */
  emissive: number;
  /**
   * Metalness modifier for wearable
   */
  metalness: number;
  /**
   * Shininess modifier for wearable
   */
  shininess: number;
  /**
   * Orientation of wearable
   */
  orientation: Box3Quaternion;
  /**
   * Scale of wearable along x/y/z
   */
  scale: Box3Vector3;
  /**
   * Offset of wearable
   */
  offset: Box3Vector3;

  remove(): void;
}

/**
 * Dialog stuff
 */
declare enum Box3DialogType {
  TEXT = "text",
  SELECT = "select",
  INPUT = "input"
}

declare type Box3DialogSelectResponse = {
  index: number;
  value: string;
};
declare type Box3DialogResponse = Box3DialogSelectResponse | string | null;
/**
 * Parameters for dialog
 */
declare type Box3DialogParams = {
  /**
   * Type of dialog
   */
  type: Box3DialogType;
  /**
   * Title of dialog
   */
  title?: string;
  /**
   * Message of dialog
   */
  content: string;
  /**
   * Background color of dialog
   */
  titleBackgroundColor?: Box3RGBAColor;
  /**
   * Color of dialog text
   */
  titleTextColor?: Box3RGBAColor;
  /**
   * Color of dialog background
   */
  contentBackgroundColor?: Box3RGBAColor;
  /**
   * Color of text
   */
  contentTextColor?: Box3RGBAColor;
  /**
   * Show an arrow in text dialog
   */
  hasArrow?: boolean;
  /**
   * Options for select dialog
   */
  options?: string[];
  /**
   * Default input text
   */
  placeholder?: string;
  /**
   * Confirm text for input
   */
  confirmText?: string;
  /**
   * Target for object
   */
  lookTarget?: Box3Vector3 | Box3Entity;
  /**
   * If target entity is given, then offset from target entity
   */
  lookTargetOffset?: Box3Vector3;
  /**
   * Camera up vector
   */
  lookUp?: Box3Vector3;
  /**
   * Camera eye position
   */
  lookEye?: Box3Vector3 | Box3Entity;
  /**
   * If camera eye is entity, then offset from entity location
   */
  lookEyeOffset?: Box3Vector3;
};
declare type Box3TextDialogParams = {
  type: Box3DialogType.TEXT;
  /**
   * Title of dialog
   */
  title?: string;
  /**
   * Message of dialog
   */
  content: string;
  /**
   * Background color of dialog
   */
  titleBackgroundColor?: Box3RGBAColor;
  /**
   * Color of dialog text
   */
  titleTextColor?: Box3RGBAColor;
  /**
   * Color of dialog background
   */
  contentBackgroundColor?: Box3RGBAColor;
  /**
   * Color of text
   */
  contentTextColor?: Box3RGBAColor;
  /**
   * If set, draw an arrow
   */
  hasArrow?: boolean;
  /**
   * Target for object
   */
  lookTarget?: Box3Vector3 | Box3Entity;
  /**
   * If target entity is given, then offset from target entity
   */
  lookTargetOffset?: Box3Vector3;
  /**
   * Camera up vector
   */
  lookUp?: Box3Vector3;
  /**
   * Camera eye position
   */
  lookEye?: Box3Vector3 | Box3Entity;
  /**
   * If camera eye is entity, then offset from entity location
   */
  lookEyeOffset?: Box3Vector3;
};
declare type Box3SelectDialogParams = {
  type: Box3DialogType.SELECT;
  /**
   * Title of dialog
   */
  title?: string;
  /**
   * Message for dialog
   */
  content: string;
  /**
   * Background color of dialog
   */
  titleBackgroundColor?: Box3RGBAColor;
  /**
   * Color of dialog text
   */
  titleTextColor?: Box3RGBAColor;
  /**
   * Color of dialog background
   */
  contentBackgroundColor?: Box3RGBAColor;
  /**
   * Color of text
   */
  contentTextColor?: Box3RGBAColor;
  /**
   * Option list
   */
  options: string[];
  /**
   * Target for object
   */
  lookTarget?: Box3Vector3 | Box3Entity;
  /**
   * If target entity is given, then offset from target entity
   */
  lookTargetOffset?: Box3Vector3;
  /**
   * Camera up vector
   */
  lookUp?: Box3Vector3;
  /**
   * Camera eye position
   */
  lookEye?: Box3Vector3 | Box3Entity;
  /**
   * If camera eye is entity, then offset from entity location
   */
  lookEyeOffset?: Box3Vector3;
};
declare type Box3InputDialogParams = {
  type: Box3DialogType.INPUT;
  /**
   * Title of dialog
   */
  title?: string;
  /**
   * Dialog message
   */
  content: string;
  /**
   * Background color of dialog
   */
  titleBackgroundColor?: Box3RGBAColor;
  /**
   * Color of dialog text
   */
  titleTextColor?: Box3RGBAColor;
  /**
   * Color of dialog background
   */
  contentBackgroundColor?: Box3RGBAColor;
  /**
   * Color of text
   */
  contentTextColor?: Box3RGBAColor;
  /**
   * Default text for input
   */
  placeholder?: string;
  /**
   * Confirmation text
   */
  confirmText?: string;
  /**
   * Target for object
   */
  lookTarget?: Box3Vector3 | Box3Entity;
  /**
   * If target entity is given, then offset from target entity
   */
  lookTargetOffset?: Box3Vector3;
  /**
   * Camera up vector
   */
  lookUp?: Box3Vector3;
  /**
   * Camera eye position
   */
  lookEye?: Box3Vector3 | Box3Entity;
  /**
   * If camera eye is entity, then offset from entity location
   */
  lookEyeOffset?: Box3Vector3;
};
declare type Box3DialogCancelOption = {
  cancel: () => void;
};
/**
 * Dialog call signature
 */
declare type Box3DialogCall =
  ((params: Box3TextDialogParams) => (Promise<string | null> & Box3DialogCancelOption))
  | ((params: Box3SelectDialogParams) => (Promise<Box3DialogSelectResponse | null> & Box3DialogCancelOption))
  | ((params: Box3InputDialogParams) => (Promise<string | null> & Box3DialogCancelOption));

/**
 * Players correspond to users which are connected to the game
 */
declare class Box3Player {
  /**
   * Sends a private message directly to player
   * @category chat
   */
  directMessage: (message: string) => void;
  /**
   * Called whenever player initiates a chat event
   * @category chat
   */
  onChat: Box3EventChannel<Box3ChatEvent>;
  nextChat: Box3EventFuture<Box3ChatEvent>;
  /**
   * Called whenever player presses a button
   * @category input
   */
  onPress: Box3EventChannel<Box3InputEvent>;
  nextPress: Box3EventFuture<Box3InputEvent>;
  /**
   * Called whenever a player releases a buttin
   * @category input
   */
  onRelease: Box3EventChannel<Box3InputEvent>;
  nextRelease: Box3EventFuture<Box3InputEvent>;
  /**
   * @category health
   */
  onRespawn: Box3EventChannel<Box3RespawnEvent>;
  nextRespawn: Box3EventFuture<Box3RespawnEvent>;
  /**
   * @category health
   */
  forceRespawn: () => void;
  /**
   * Opens a dialog for this player
   * @category dialog
   */
  dialog: Box3DialogCall;
  /**
   * Cancels any open dialogs for this player
   * @category dialog
   */
  cancelDialogs: () => void;
  /**
   * Opens a hyperlink on the client
   * @category web
   */
  link: (href: string) => void;
  /**
   * List all wearable objects attached to the player
   * @param bodyPart is an optional filter to show only wearables attached to a specific body part
   * @category display
   */
  wearables: (bodyPart?: Box3BodyPart) => Box3Wearable[];
  /**
   * Attach a new wearable object to the player
   * @category display
   */
  addWearable: (spec: Partial<Box3Wearable>) => Box3Wearable;
  /**
   * Remove a wearable object from a player
   * @param wearable is the wearable to remove
   * @category display
   */
  removeWearable: (wearable: Box3Wearable) => void;
  /**
   * Play sound for player
   * @category sound
   */
  sound: (spec: {
    sample: string;
    gain?: number;
    pitch?: number;
  } | string) => void;
  /**
   * Name of the player.  Constant.
   */
  name: string;
  /**
   * Unique user key for this player.  Can be used to save their info into the database.
   */
  userKey: string;
  /**
   * User id of player if logged in.
   */
  boxId: string;
  /**
   * Player URL
   */
  url: URL;
  /**
   * Initial spawn point of player
   * @category spawn
   */
  spawnPoint: Box3Vector3;
  /**
   * Movement bounds
   * @category spawn
   */
  movementBounds: Box3Bounds3;
  /**
   * @category display
   */
  scale: number;
  /**
   * @category dipsplay
   */
  color: Box3RGBColor;
  /**
   * @category display
   */
  metalness: number;
  /**
   * @category display
   */
  emissive: number;
  /**
   * @category display
   */
  shininess: number;
  /**
   * @category display
   */
  invisible: boolean;
  /**
   * @category display
   */
  showName: boolean;
  /**
   * @category health
   */
  dead: boolean;
  /**
   * Color grading look up table, applied to player to tint game state
   */
  colorLUT: string;
  /**
   * Camera behavior mode.
   *  + `"FPS"` - First person camera
   *  + `"FOLLOW"` - Third person follow camera (default)
   *  + `"FIXED"` - Third person fixed camera
   * @category camera
   */
  cameraMode: 'FOLLOW' | 'FPS' | 'FIXED';
  /**
   * In FPS or FOLLOW mode, the entity which the player's camera follows
   * @category camera
   */
  cameraEntity: Box3Entity | null;
  /**
   * Target point for the camera in FIXED mode
   * @category camera
   */
  cameraTarget: Box3Vector3;
  /**
   * Up vector for camera in FIXED mode
   * @category camera
   */
  cameraUp: Box3Vector3;
  /**
   * Eye position of camera in FIXED mode
   * @category camera
   */
  cameraPosition: Box3Vector3;
  /**
   * If true, player is allowed to fly
   * @category movement
   */
  canFly: boolean;
  /**
   * If true, player is a ghost and can pass through walls
   * @category movement
   */
  spectator: boolean;
  /**
   * Maximum walking speed
   * @category movement
   */
  walkSpeed: number;
  /**
   * Walking acceleration
   * @category movement
   */
  walkAcceleration: number;
  /**
   * Maximum running speed
   * @category movement
   */
  runSpeed: number;
  /**
   * Running acceleration
   * @category movement
   */
  runAcceleration: number;
  /**
   * Crouching walk speed
   * @category movement
   */
  crouchSpeed: number;
  /**
   * Crouching walk acceleration
   * @category movement
   */
  crouchAcceleration: number;
  /**
   * Maximum swim speed
   * @category movement
   */
  swimSpeed: number;
  /**
   * Swim acceleration
   * @category movement
   */
  swimAcceleration: number;
  /**
   * Maximum flying speed
   * @category movement
   */
  flySpeed: number;
  /**
   * Flying acceleration
   * @category movement
   */
  flyAcceleration: number;
  /**
   * Jump speed
   * @category movement
   */
  jumpSpeedFactor: number;
  /**
   * Jump acceleration rate
   * @category movement
   */
  jumpAccelerationFactor: number;
  /**
   * Jump velocity impulse
   * @category movement
   */
  jumpPower: number;
  /**
   * Double jump velocity impulse
   * @category movement
   */
  doubleJumpPower: number;
  /**
   * @category state
   */
  moveState: Box3PlayerMoveState;
  /**
   * @category state
   */
  walkState: Box3PlayerWalkState;
  /**
   * @category input
   */
  walkButton: boolean;
  /**
   * @category input
   */
  crouchButton: boolean;
  /**
   * @category input
   */
  jumpButton: boolean;
  /**
   * If true, player input button action 0 is enabled
   * @category input
   */
  enableAction0: boolean;
  /**
   * If true, player input button action 1 is enabled
   * @category input
   */
  enableAction1: boolean;
  /**
   * @category input
   */
  action0Button: boolean;
  /**
   * @category input
   */
  action1Button: boolean;
  /**
   * @category input
   */
  enableJump: boolean;
  /**
   * @category input
   */
  enableDoubleJump: boolean;
  /**
   * @category input
   */
  enable3DCursor: boolean;
  /**
   * @category input
   */
  facingDirection: Box3Vector3;
  /**
   * Plays when player respawns
   * @category sound
   */
  spawnSound: Box3SoundEffect;
  /**
   * Plays when player jumps
   * @category sound
   */
  jumpSound: Box3SoundEffect;
  /**
   * Plays when player double jumps
   * @category sound
   */
  doubleJumpSound: Box3SoundEffect;
  /**
   * Plays when player lands
   * @category sound
   */
  landSound: Box3SoundEffect;
  /**
   * Plays when player crouches
   * @category sound
   */
  crouchSound: Box3SoundEffect;
  /**
   * Plays when player takes a step
   * @category sound
   */
  stepSound: Box3SoundEffect;
  /**
   * Plays when player takes a single swim stroke
   * @category sound
   */
  swimSound: Box3SoundEffect;
  /**
   * Plays when player presses action 0
   * @category sound
   */
  action0Sound: Box3SoundEffect;
  /**
   * Plays when player presses action 1
   * @category sound
   */
  action1Sound: Box3SoundEffect;
  /**
   * Plays when entity enters water
   * @category sound
   */
  enterWaterSound: Box3SoundEffect;
  /**
   * Plays when entity leaves water
   * @category sound
   */
  leaveWaterSound: Box3SoundEffect;
  /**
   * Sound for player start flying
   * @category sound
   */
  startFlySound: Box3SoundEffect;
  /**
   * Sound for player stop flying
   * @category sound
   */
  stopFlySound: Box3SoundEffect;
  /**
   * Background music for this player
   * @category sound
   */
  music: Box3SoundEffect;
  /**
   * If true, then player can't chat
   * @category chat
   */
  muted: boolean;

  /**
   * @ignore
   */
  constructor(
    /**
     * Sends a private message directly to player
     * @category chat
     */
    directMessage: (message: string) => void,
    /**
     * Called whenever player initiates a chat event
     * @category chat
     */
    onChat: Box3EventChannel<Box3ChatEvent>, nextChat: Box3EventFuture<Box3ChatEvent>,
    /**
     * Called whenever player presses a button
     * @category input
     */
    onPress: Box3EventChannel<Box3InputEvent>, nextPress: Box3EventFuture<Box3InputEvent>,
    /**
     * Called whenever a player releases a buttin
     * @category input
     */
    onRelease: Box3EventChannel<Box3InputEvent>, nextRelease: Box3EventFuture<Box3InputEvent>,
    /**
     * @category health
     */
    onRespawn: Box3EventChannel<Box3RespawnEvent>, nextRespawn: Box3EventFuture<Box3RespawnEvent>,
    /**
     * @category health
     */
    forceRespawn: () => void,
    /**
     * Opens a dialog for this player
     * @category dialog
     */
    dialog: Box3DialogCall,
    /**
     * Cancels any open dialogs for this player
     * @category dialog
     */
    cancelDialogs: () => void,
    /**
     * Opens a hyperlink on the client
     * @category web
     */
    link: (href: string) => void,
    /**
     * List all wearable objects attached to the player
     * @param bodyPart is an optional filter to show only wearables attached to a specific body part
     * @category display
     */
    wearables: (bodyPart?: Box3BodyPart) => Box3Wearable[],
    /**
     * Attach a new wearable object to the player
     * @category display
     */
    addWearable: (spec: Partial<Box3Wearable>) => Box3Wearable,
    /**
     * Remove a wearable object from a player
     * @param wearable is the wearable to remove
     * @category display
     */
    removeWearable: (wearable: Box3Wearable) => void,
    /**
     * Play sound for player
     * @category sound
     */
    sound: (spec: {
      sample: string;
      gain?: number;
      pitch?: number;
    } | string) => void);
}

/**
 * Result of performing a raycast.  Contains information about the raycast and what it hit.
 */
declare class Box3RaycastResult {
  /**
   * If true, raycast hit an object
   */
  hit: boolean;
  /**
   * The entity hit by the raycast
   */
  hitEntity: Box3Entity | null;
  /**
   * The voxel id hit by the raycast (0 if no voxel was hit)
   */
  hitVoxel: number;
  /**
   * Start point of the ray cast
   */
  origin: Box3Vector3;
  /**
   * Direction of the raycast
   */
  direction: Box3Vector3;
  /**
   * Distance traveled along the ray
   */
  distance: number;
  /**
   * Position of the ray intersection
   */
  hitPosition: Box3Vector3;
  /**
   * Normal vector on surface at point of intersection
   */
  normal: Box3Vector3;
  /**
   * If a voxel was hit, the grid coordinates of the hit voxel
   */
  voxelIndex: Box3Vector3;

  /**
   * @ignore
   */
  constructor(
    /**
     * If true, raycast hit an object
     */
    hit: boolean,
    /**
     * The entity hit by the raycast
     */
    hitEntity: Box3Entity | null,
    /**
     * The voxel id hit by the raycast (0 if no voxel was hit)
     */
    hitVoxel: number,
    /**
     * Start point of the ray cast
     */
    origin: Box3Vector3,
    /**
     * Direction of the raycast
     */
    direction: Box3Vector3,
    /**
     * Distance traveled along the ray
     */
    distance: number,
    /**
     * Position of the ray intersection
     */
    hitPosition: Box3Vector3,
    /**
     * Normal vector on surface at point of intersection
     */
    normal: Box3Vector3,
    /**
     * If a voxel was hit, the grid coordinates of the hit voxel
     */
    voxelIndex: Box3Vector3);
}

/**
 * Configuration parameters passed into a raycast method
 */
interface Box3RaycastOptions {
  /**
   * Maximum distance allowed for ray to travel
   */
  maxDistance: number;
  /**
   * If true, ignore fluid voxels
   */
  ignoreFluid: boolean;
  /**
   * If true, don't test intersection against voxels
   */
  ignoreVoxel: boolean;
  /**
   * If true, don't test intersection against entities
   */
  ignoreEntities: boolean;
}

/**
 * You can subscribe to events coming from some object using an EventChannel.
 *
 * Event channels take an event handler as input and return a token which can be used to cancel the handler.
 *
 * **Example:**
 * ```typescript
 * const token = world.onTick(() => console.log("tick !"));
 * setTimeout(() => {
 *      console.log('cancel tick handler');
 *      token.cancel();
 *      // no more tick events will be logged
 * }, 1000);
 * ```
 *
 * @param handler The handler callback which is invoked whenever the event is fired
 * @typeparam EventType The type of the event which is emitted by the channel
 * @returns An event handler token which can be used to cancel the event handler
 * @category events
 */
declare type Box3EventChannel<EventType> = (handler: (event: EventType) => void) => Box3EventHandlerToken;
/**
 * Promises give another way to work with events. You can use promises to organize long sequences of events
 * with structured programming.  In some cases this can lead to much simpler and cleaner code, but you must
 * use caution.  Asynchronous code can be interrupted when it is waiting, which means things in the world
 * can change outside your code.  Also errors generated in asynchronous code do not get stack traces,
 * which can complicate debugging.  Consider these things and use promises carefully
 *
 * **Example:**
 * ```typescript
 * // Wait for 2 players to enter the world
 * async function waitForPlayers (count) {
 *      while (world.querySelectorAll('player').length < 2) {
 *          const { entity } = await world.nextPlayerJoin();
 *          world.say(entity.player.name + ' joined');
 *      }
 * }
 *
 * waitForPlayers.then(() => world.say('game ready'));
 * ```
 *
 * @param filter An optional function which checks the type of event.  If the filter is not true, then the event is not dispatched.  If no filter is supplied, then the future will fire on the next event.
 * @typeparam EventType The type of the event which is emitted by the channel
 * @returns A promise which resolves once an event which matches the filter fires
 * @category events
 */
declare type Box3EventFuture<EventType> = (filter?: (event: EventType) => boolean) => Promise<EventType>;

/**
 * Returned by a {@link Box3.Box3EventChannel} whenever a handler is registered.  Can be used to cancel the handler.
 * @category events
 */
declare class Box3EventHandlerToken {
  /**
   * Cancels the event handler
   */
  cancel: () => void;
  /**
   * Resumes listening with the event handler
   */
  resume: () => void;
  /**
   * Checks if the handler is active
   */
  active: () => boolean;

  /**
   * @ignore
   */
  constructor(
    /**
     * Cancels the event handler
     */
    cancel: () => void,
    /**
     * Resumes listening with the event handler
     */
    resume: () => void,
    /**
     * Checks if the handler is active
     */
    active: () => boolean);
}

/**
 * An event which is fired each tick by {@link Box3.Box3World.onTick}.
 * @category events
 */
declare class Box3TickEvent {
  /**
   * Tick at which the event was fired
   */
  tick: number;
  /**
   * Last tick which was handled
   */
  prevTick: number;
  /**
   * If we had to skip any ticks due to the scripts lagging
   */
  skip: boolean;
  /**
   * Wall clock time between ticks
   */
  elapsedTimeMS: number;

  /**
   * @ignore
   */
  constructor(
    /**
     * Tick at which the event was fired
     */
    tick: number,
    /**
     * Last tick which was handled
     */
    prevTick: number,
    /**
     * If we had to skip any ticks due to the scripts lagging
     */
    skip: boolean,
    /**
     * Wall clock time between ticks
     */
    elapsedTimeMS: number);
}

/**
 * An event which is fired whenever some entity is created or destroyed.
 * Triggered by {@link Box3.Box3World.onPlayerJoin}, {@link Box3.Box3World.onPlayerLeave}, {@link Box3.Box3World.onEntityCreate}, {@link Box3.Box3World.onEntityDestroy} and {@link Box3.Box3Entity.onDestroy}
 * @category events
 */
declare class Box3EntityEvent {
  /**
   * The time the event occured
   */
  tick: number;
  /**
   * The entity that was created/destroyed
   */
  entity: Box3Entity;

  /**
   * @ignore
   */
  constructor(
    /**
     * The time the event occured
     */
    tick: number,
    /**
     * The entity that was created/destroyed
     */
    entity: Box3Entity);
}

/**
 * Fired whenever an entity activates or deactivates a trigger
 * @category events
 */
declare class Box3TriggerEvent {
  /**
   * Time event occured
   */
  tick: number;
  /**
   * Entity which triggered event
   */
  entity: Box3Entity;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time event occured
     */
    tick: number,
    /**
     * Entity which triggered event
     */
    entity: Box3Entity);
}

/**
 * Fired whenever an entity takes damage
 * Triggered by {@link Box3.Box3World.onTakeDamage} {@link Box3.Box3Entity.onTakeDamage}
 * @category events
 */
declare class Box3DamageEvent {
  /**
   * Time event occured
   */
  tick: number;
  /**
   * Entity which received damage
   */
  entity: Box3Entity;
  /**
   * Amount of damage
   */
  damage: number;
  /**
   * Entity attacker
   */
  attacker: Box3Entity | null;
  /**
   * Damage type
   */
  damageType: string;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time event occured
     */
    tick: number,
    /**
     * Entity which received damage
     */
    entity: Box3Entity,
    /**
     * Amount of damage
     */
    damage: number,
    /**
     * Entity attacker
     */
    attacker: Box3Entity | null,
    /**
     * Damage type
     */
    damageType: string);
}

/**
 * Fired whenever an entity takes dies.
 * Triggered by {@link Box3.Box3World.onTakeDamage} {@link Box3.Box3Entity.onTakeDamage}
 * @category events
 */
declare class Box3DieEvent {
  /**
   * Time event occured
   */
  tick: number;
  /**
   * Entity which received damage
   */
  entity: Box3Entity;
  /**
   * Entity attacker
   */
  attacker: Box3Entity | null;
  /**
   * Damage type
   */
  damageType: string;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time event occured
     */
    tick: number,
    /**
     * Entity which received damage
     */
    entity: Box3Entity,
    /**
     * Entity attacker
     */
    attacker: Box3Entity | null,
    /**
     * Damage type
     */
    damageType: string);
}

/**
 * Triggered whenever a player respawns
 * @category events
 */
declare class Box3RespawnEvent {
  /**
   * Time event occured
   */
  tick: number;
  /**
   * Entity which received damage
   */
  entity: Box3PlayerEntity;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time event occured
     */
    tick: number,
    /**
     * Entity which received damage
     */
    entity: Box3PlayerEntity);
}

/**
 * An event which is fired whenever two entities collide
 * Triggered by {@link Box3.Box3World.onEntityContact}, {@link Box3.Box3World.onEntitySeparate}, {@link Box3.Box3Entity.onEntityContact}, {@link Box3.Box3Entity.onEntitySeparate}
 * @category events
 */
declare class Box3EntityContactEvent {
  /**
   * Time at which the entities collided
   */
  tick: number;
  /**
   * The first entity in the pair
   */
  entity: Box3Entity;
  /**
   * The second entity in the pair
   */
  other: Box3Entity;
  /**
   * The separating axis of the collision
   */
  axis: Box3Vector3;
  /**
   * The amount of force imparted by the collision
   */
  force: Box3Vector3;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time at which the entities collided
     */
    tick: number,
    /**
     * The first entity in the pair
     */
    entity: Box3Entity,
    /**
     * The second entity in the pair
     */
    other: Box3Entity,
    /**
     * The separating axis of the collision
     */
    axis: Box3Vector3,
    /**
     * The amount of force imparted by the collision
     */
    force: Box3Vector3);
}

/**
 * An event which is fired whenever an entity comes into contact with terrain
 * Triggered by {@link Box3.Box3World.onVoxelContact}, {@link Box3.Box3World.onVoxelSeparate}, {@link Box3.Box3Entity.onVoxelContact}, {@link Box3.Box3Entity.onVoxelSeparate}
 * @category events
 */
declare class Box3VoxelContactEvent {
  /**
   * The time of the contact event
   */
  tick: number;
  /**
   * The entity which touched the terrain
   */
  entity: Box3Entity;
  /**
   * x coordinate of voxel which was touched
   */
  x: number;
  /**
   * y coordinate of voxel which was touched
   */
  y: number;
  /**
   * z coordinate of voxel which was touched
   */
  z: number;
  /**
   * id of voxel
   */
  voxel: number;
  /**
   * Separating axis
   */
  axis: Box3Vector3;
  /**
   * Collision force
   */
  force: Box3Vector3;

  /**
   * @ignore
   */
  constructor(
    /**
     * The time of the contact event
     */
    tick: number,
    /**
     * The entity which touched the terrain
     */
    entity: Box3Entity,
    /**
     * x coordinate of voxel which was touched
     */
    x: number,
    /**
     * y coordinate of voxel which was touched
     */
    y: number,
    /**
     * z coordinate of voxel which was touched
     */
    z: number,
    /**
     * id of voxel
     */
    voxel: number,
    /**
     * Separating axis
     */
    axis: Box3Vector3,
    /**
     * Collision force
     */
    force: Box3Vector3);
}

/**
 * An event which is fired whenever an entity enters or leaves a fluid
 * Triggered by {@link Box3.Box3World.onFluidEnter}, {@link Box3.Box3World.onFluidLeave}, {@link Box3.Box3Entity.onFluidEnter}, {@link Box3.Box3Entity.onFluidLeave}
 * @category events
 */
declare class Box3FluidContactEvent {
  /**
   * Time event occured
   */
  tick: number;
  /**
   * Entity which modified
   */
  entity: Box3Entity;
  /**
   * The id of the fluid voxel
   */
  voxel: number;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time event occured
     */
    tick: number,
    /**
     * Entity which modified
     */
    entity: Box3Entity,
    /**
     * The id of the fluid voxel
     */
    voxel: number);
}

/**
 * Triggered by {@link Box3.Box3World.onChat} and {@link Box3.Box3Entity.onChat}
 * @category events
 */
declare class Box3ChatEvent {
  /**
   * Time chat event occured
   */
  tick: number;
  /**
   * Entity which initiated chat event
   */
  entity: Box3Entity;
  /**
   * What the entity said in the chat event
   */
  message: string;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time chat event occured
     */
    tick: number,
    /**
     * Entity which initiated chat event
     */
    entity: Box3Entity,
    /**
     * What the entity said in the chat event
     */
    message: string);
}

/**
 * Triggered by {@link Box3.Box3World.onInteract} and {@link Box3.Box3Entity.onInteract}
 * @category events
 */
declare class Box3InteractEvent {
  /**
   * Time of event
   */
  tick: number;
  /**
   * Entity initiating interaction
   */
  entity: Box3PlayerEntity;
  /**
   * Entity which received interaction
   */
  targetEntity: Box3Entity;

  /**
   * @ignore
   */
  constructor(
    /**
     * Time of event
     */
    tick: number,
    /**
     * Entity initiating interaction
     */
    entity: Box3PlayerEntity,
    /**
     * Entity which received interaction
     */
    targetEntity: Box3Entity);
}

/**
 * Type of a button pressed by a player
 * @category events
 */
declare enum Box3ButtonType {
  WALK = "walk",
  RUN = "run",
  CROUCH = "crouch",
  JUMP = "jump",
  DOUBLE_JUMP = "jump2",
  FLY = "fly",
  ACTION0 = "action0",
  ACTION1 = "action1"
}

/**
 * Input events are generated whenever a player presses a button.
 * The tick of an event occurs at the exact instant the button was pressed by the player.
 * Triggered by {@link Box3.Box3World.onPress}, {@link Box3.Box3World.onRelease}, {@link Box3.Box3Player.onPress}, {@link Box3.Box3Player.onRelease}
 * @category events
 */
declare class Box3InputEvent {
  /**
   * The time the button was pressed
   */
  tick: number;
  /**
   * A reference to the player which pressed the button
   */
  entity: Box3PlayerEntity;
  /**
   * The position of the entity at the time the pressed the button
   */
  position: Box3Vector3;
  /**
   * The button which was input by the player
   */
  button: Box3ButtonType;
  /**
   * If true, then this is a press event.  Otherwise if false this is a release event
   */
  pressed: boolean;
  /**
   * The result of a raycast query initiated by the player at the exact instant they pressed the button from the perspective of their camera.
   */
  raycast: Box3RaycastResult;

  /**
   * @ignore
   */
  constructor(
    /**
     * The time the button was pressed
     */
    tick: number,
    /**
     * A reference to the player which pressed the button
     */
    entity: Box3PlayerEntity,
    /**
     * The position of the entity at the time the pressed the button
     */
    position: Box3Vector3,
    /**
     * The button which was input by the player
     */
    button: Box3ButtonType,
    /**
     * If true, then this is a press event.  Otherwise if false this is a release event
     */
    pressed: boolean,
    /**
     * The result of a raycast query initiated by the player at the exact instant they pressed the button from the perspective of their camera.
     */
    raycast: Box3RaycastResult);
}

declare class Box3ClickEvent {
  /**
   * Tick that click event occurred
   */
  tick: number;
  /**
   * Entity that got clicked
   */
  entity: Box3Entity;
  /**
   * Entity which initiated the click event
   */
  clicker: Box3PlayerEntity;
  /**
   * Button which was pressed ACTION0 = LeftClick, ACTION1 = RightClick
   */
  button: Box3ButtonType.ACTION0 | Box3ButtonType.ACTION1;
  /**
   * Distance from clicker to entity
   */
  distance: number;
  /**
   * Position of clicker at time of click
   */
  clickerPosition: Box3Vector3;
  /**
   * Raycast from clicker -> entity
   */
  raycast: Box3RaycastResult;

  /**
   * @ignore
   */
  constructor(
    /**
     * Tick that click event occurred
     */
    tick: number,
    /**
     * Entity that got clicked
     */
    entity: Box3Entity,
    /**
     * Entity which initiated the click event
     */
    clicker: Box3PlayerEntity,
    /**
     * Button which was pressed ACTION0 = LeftClick, ACTION1 = RightClick
     */
    button: Box3ButtonType.ACTION0 | Box3ButtonType.ACTION1,
    /**
     * Distance from clicker to entity
     */
    distance: number,
    /**
     * Position of clicker at time of click
     */
    clickerPosition: Box3Vector3,
    /**
     * Raycast from clicker -> entity
     */
    raycast: Box3RaycastResult);
}

/**
 * Selectors are a powerful syntax for searching all of the objects in a game.  The interface for selectors in box3 is modeled after the DOM APIs.
 *
 * * ```javascript
 * const entities = world.querySelector('*');           // all entities in the world
 * const players = world.querySelectorAll('player');    // all players in the game
 * const theChair = world.querySelector('#chair');      // the first entity whose id is "chair"
 * const boxes = world.querySelectorAll('.box');        // all entities tagged with "box"
 * const boxChair = world.querySelector('.box .red');
 * ```
 */
declare type Box3SelectorString = string;

/**
 * Interface for all project resources
 */
declare class Box3ResourceSystem {
  ls: (path?: string) => Box3AssetListEntry[];

  constructor(ls: (path?: string) => Box3AssetListEntry[]);
}

/**
 * Describes the type of an asset
 */
declare enum Box3AssetType {
  VOXEL_MESH = "mesh",
  DIRECTORY = "directory",
  COLOR_LUT = "lut",
  JS_SCRIPT = "js",
  IMAGE = "image",
  PARTICLE_TEXTURE = "snow",
  SOUND = "sound"
}

/**
 * An entry from an asset list
 */
declare class Box3AssetListEntry {
  /**
   * Fully qualified path of asset, split by directory
   */
  path: string;
  /**
   * Type of asset
   */
  type: Box3AssetType;

  /**
   * @ignore
   */
  constructor(
    /**
     * Fully qualified path of asset, split by directory
     */
    path: string,
    /**
     * Type of asset
     */
    type: Box3AssetType);
}

/**
 * A standard SQL database
 */
declare class Box3Database {
  /**
   * Executes a SQL query on this database
   */
  sql: (sql: string[], ...params: (number | string | Uint8Array | boolean | null)[]) => Box3QueryResult;

  /**
   * @ignore
   */
  constructor(
    /**
     * Executes a SQL query on this database
     */
    sql: (sql: string[], ...params: (number | string | Uint8Array | boolean | null)[]) => Box3QueryResult);
}

/**
 * Query result api
 */
declare class Box3QueryResult implements AsyncIterable<any> {
  next: () => Promise<{
    done: boolean;
    value: any;
  }>;

  [Symbol.asyncIterator](): this;

  return: () => Promise<{
    done: boolean;
    value: any;
  }>;
  throw: (err: any) => Promise<{
    done: boolean;
    value: any;
  }>;
  then: (resolve: (rows: any[]) => any, reject: (err: any) => any) => void;

  /**
   * @ignore
   */
  constructor(next: () => Promise<{
    done: boolean;
    value: any;
  }>, abort: () => Promise<{
    done: boolean;
    value: any;
  }>, error: (err: any) => Promise<{
    done: boolean;
    value: any;
  }>, then: (resolve: (rows: any[]) => any, reject: (err: any) => any) => void);
}

declare type Box3LoggerMethod = (...args: any[]) => void;

declare const console: {
  assert: (assertion, ...args: any[]) => void;
  log: Box3LoggerMethod;
  debug: Box3LoggerMethod;
  error: Box3LoggerMethod;
  warn: Box3LoggerMethod;
  clear: Box3LoggerMethod;
};

declare const world: Box3World;
declare const voxels: Box3Voxels;
declare const resources: {
  ls: (path?: string) => Box3AssetListEntry[];
};
declare const storage: Box3StorageAPI;
declare const http: Box3HttpAPI;

declare function sleep(ms: number): Promise<void>;

declare const require: {
  (module: string): any;
  resolve: (path: string) : string;
};
declare const module: {
  exports: any,
};
declare const exports: any;
declare const __dirname: string;
declare const __filename: string;
declare type Box3HttpFetchParams = {};

declare class Box3HttpFetchResponse {
  status: number;
  statusText: string;
  json: () => Promise<any>;
  text: () => Promise<string>;
  arrayBuffer: () => Promise<ArrayBuffer>;
  close: () => Promise<void>;

  constructor(status: number, statusText: string, json: () => Promise<any>, text: () => Promise<string>, arrayBuffer: () => Promise<ArrayBuffer>, close: () => Promise<void>);

  get ok(): boolean;
}

declare class Box3HttpRequest {
}

declare class Box3HttpResponse {
}

declare type Box3HttpHandler = (request: Box3HttpRequest, response: Box3HttpResponse) => void;

declare class Box3HttpAPI {
  url: string;
  fetch: (url: string, params?: Box3HttpFetchParams) => Promise<Box3HttpFetchResponse>;
  onRequest: (handler: Box3HttpHandler) => void;

  constructor(url: string, fetch: (url: string, params?: Box3HttpFetchParams) => Promise<Box3HttpFetchResponse>, onRequest: (handler: Box3HttpHandler) => void);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


interface Map<K, V> {
  clear(): void;

  delete(key: K): boolean;

  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;

  get(key: K): V | undefined;

  has(key: K): boolean;

  set(key: K, value: V): this;

  readonly size: number;
}

interface MapConstructor {
  new(): Map<any, any>;

  new<K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;

  readonly prototype: Map<any, any>;
}

declare var Map: MapConstructor;

interface ReadonlyMap<K, V> {
  forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;

  get(key: K): V | undefined;

  has(key: K): boolean;

  readonly size: number;
}

interface WeakMap<K extends object, V> {
  delete(key: K): boolean;

  get(key: K): V | undefined;

  has(key: K): boolean;

  set(key: K, value: V): this;
}

interface WeakMapConstructor {
  new<K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;

  readonly prototype: WeakMap<object, any>;
}

declare var WeakMap: WeakMapConstructor;

interface Set<T> {
  add(value: T): this;

  clear(): void;

  delete(value: T): boolean;

  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;

  has(value: T): boolean;

  readonly size: number;
}

interface SetConstructor {
  new<T = any>(values?: readonly T[] | null): Set<T>;

  readonly prototype: Set<any>;
}

declare var Set: SetConstructor;

interface ReadonlySet<T> {
  forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;

  has(value: T): boolean;

  readonly size: number;
}

interface WeakSet<T extends object> {
  add(value: T): this;

  delete(value: T): boolean;

  has(value: T): boolean;
}

interface WeakSetConstructor {
  new<T extends object = object>(values?: readonly T[] | null): WeakSet<T>;

  readonly prototype: WeakSet<object>;
}

declare var WeakSet: WeakSetConstructor;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Array<T> {
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;

  find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: T, start?: number, end?: number): this;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
}

interface ArrayConstructor {
  /**
   * Creates an array from an array-like object.
   * @param arrayLike An array-like object to convert to an array.
   */
  from<T>(arrayLike: ArrayLike<T>): T[];

  /**
   * Creates an array from an iterable object.
   * @param arrayLike An array-like object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of<T>(...items: T[]): T[];
}

interface DateConstructor {
  new(value: number | string | Date): Date;
}

interface Function {
  /**
   * Returns the name of the function. Function names are read-only and can not be changed.
   */
  readonly name: string;
}

interface Math {
  /**
   * Returns the number of leading zero bits in the 32-bit binary representation of a number.
   * @param x A numeric expression.
   */
  clz32(x: number): number;

  /**
   * Returns the result of 32-bit multiplication of two numbers.
   * @param x First number
   * @param y Second number
   */
  imul(x: number, y: number): number;

  /**
   * Returns the sign of the x, indicating whether x is positive, negative or zero.
   * @param x The numeric expression to test
   */
  sign(x: number): number;

  /**
   * Returns the base 10 logarithm of a number.
   * @param x A numeric expression.
   */
  log10(x: number): number;

  /**
   * Returns the base 2 logarithm of a number.
   * @param x A numeric expression.
   */
  log2(x: number): number;

  /**
   * Returns the natural logarithm of 1 + x.
   * @param x A numeric expression.
   */
  log1p(x: number): number;

  /**
   * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
   * subtracting 1 from the exponential function of x (e raised to the power of x, where e
   * is the base of the natural logarithms).
   * @param x A numeric expression.
   */
  expm1(x: number): number;

  /**
   * Returns the hyperbolic cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  cosh(x: number): number;

  /**
   * Returns the hyperbolic sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  sinh(x: number): number;

  /**
   * Returns the hyperbolic tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  tanh(x: number): number;

  /**
   * Returns the inverse hyperbolic cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  acosh(x: number): number;

  /**
   * Returns the inverse hyperbolic sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  asinh(x: number): number;

  /**
   * Returns the inverse hyperbolic tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  atanh(x: number): number;

  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param values Values to compute the square root for.
   *     If no arguments are passed, the result is +0.
   *     If there is only one argument, the result is the absolute value.
   *     If any argument is +Infinity or -Infinity, the result is +Infinity.
   *     If any argument is NaN, the result is NaN.
   *     If all arguments are either +0 or −0, the result is +0.
   */
  hypot(...values: number[]): number;

  /**
   * Returns the integral part of the a numeric expression, x, removing any fractional digits.
   * If x is already an integer, the result is x.
   * @param x A numeric expression.
   */
  trunc(x: number): number;

  /**
   * Returns the nearest single precision float representation of a number.
   * @param x A numeric expression.
   */
  fround(x: number): number;

  /**
   * Returns an implementation-dependent approximation to the cube root of number.
   * @param x A numeric expression.
   */
  cbrt(x: number): number;
}

interface NumberConstructor {
  /**
   * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
   * that is representable as a Number value, which is approximately:
   * 2.2204460492503130808472633361816 x 10‍−‍16.
   */
  readonly EPSILON: number;

  /**
   * Returns true if passed value is finite.
   * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
   * number. Only finite values of the type number, result in true.
   * @param number A numeric value.
   */
  isFinite(number: number): boolean;

  /**
   * Returns true if the value passed is an integer, false otherwise.
   * @param number A numeric value.
   */
  isInteger(number: number): boolean;

  /**
   * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
   * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
   * to a number. Only values of the type number, that are also NaN, result in true.
   * @param number A numeric value.
   */
  isNaN(number: number): boolean;

  /**
   * Returns true if the value passed is a safe integer.
   * @param number A numeric value.
   */
  isSafeInteger(number: number): boolean;

  /**
   * The value of the largest integer n such that n and n + 1 are both exactly representable as
   * a Number value.
   * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
   */
  readonly MAX_SAFE_INTEGER: number;

  /**
   * The value of the smallest integer n such that n and n − 1 are both exactly representable as
   * a Number value.
   * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
   */
  readonly MIN_SAFE_INTEGER: number;

  /**
   * Converts a string to a floating-point number.
   * @param string A string that contains a floating-point number.
   */
  parseFloat(string: string): number;

  /**
   * Converts A string to an integer.
   * @param s A string to convert into a number.
   * @param radix A value between 2 and 36 that specifies the base of the number in numString.
   * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
   * All other strings are considered decimal.
   */
  parseInt(string: string, radix?: number): number;
}

interface ObjectConstructor {
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source The source object from which to copy properties.
   */
  assign<T, U>(target: T, source: U): T & U;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   */
  assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   * @param source3 The third source object from which to copy properties.
   */
  assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param sources One or more source objects from which to copy properties
   */
  assign(target: object, ...sources: any[]): any;

  /**
   * Returns an array of all symbol properties found directly on object o.
   * @param o Object to retrieve the symbols from.
   */
  getOwnPropertySymbols(o: any): symbol[];

  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: {}): string[];

  /**
   * Returns true if the values are the same value, false otherwise.
   * @param value1 The first value.
   * @param value2 The second value.
   */
  is(value1: any, value2: any): boolean;

  /**
   * Sets the prototype of a specified object o to object proto or null. Returns the object o.
   * @param o The object to change its prototype.
   * @param proto The value of the new prototype or null.
   */
  setPrototypeOf(o: any, proto: object | null): any;
}

interface ReadonlyArray<T> {
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined;

  find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number;
}

interface RegExp {
  /**
   * Returns a string indicating the flags of the regular expression in question. This field is read-only.
   * The characters in this string are sequenced and concatenated in the following order:
   *
   *    - "g" for global
   *    - "i" for ignoreCase
   *    - "m" for multiline
   *    - "u" for unicode
   *    - "y" for sticky
   *
   * If no flags are set, the value is the empty string.
   */
  readonly flags: string;

  /**
   * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular
   * expression. Default is false. Read-only.
   */
  readonly sticky: boolean;

  /**
   * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular
   * expression. Default is false. Read-only.
   */
  readonly unicode: boolean;
}

interface RegExpConstructor {
  new(pattern: RegExp | string, flags?: string): RegExp;

  (pattern: RegExp | string, flags?: string): RegExp;
}

interface String {
  /**
   * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
   * value of the UTF-16 encoded code point starting at the string element at position pos in
   * the String resulting from converting this object to a String.
   * If there is no element at that position, the result is undefined.
   * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
   */
  codePointAt(pos: number): number | undefined;

  /**
   * Returns true if searchString appears as a substring of the result of converting this
   * object to a String, at one or more positions that are
   * greater than or equal to position; otherwise, returns false.
   * @param searchString search string
   * @param position If position is undefined, 0 is assumed, so as to search all of the String.
   */
  includes(searchString: string, position?: number): boolean;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * endPosition – length(this). Otherwise returns false.
   */
  endsWith(searchString: string, endPosition?: number): boolean;

  /**
   * Returns the String value result of normalizing the string into the normalization form
   * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
   * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
   * is "NFC"
   */
  normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;

  /**
   * Returns the String value result of normalizing the string into the normalization form
   * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
   * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
   * is "NFC"
   */
  normalize(form?: string): string;

  /**
   * Returns a String value that is made from count copies appended together. If count is 0,
   * the empty string is returned.
   * @param count number of copies to append
   */
  repeat(count: number): string;

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * position. Otherwise returns false.
   */
  startsWith(searchString: string, position?: number): boolean;

  /**
   * Returns an <a> HTML anchor element and sets the name attribute to the text value
   * @param name
   */
  anchor(name: string): string;

  /** Returns a <big> HTML element */
  big(): string;

  /** Returns a <blink> HTML element */
  blink(): string;

  /** Returns a <b> HTML element */
  bold(): string;

  /** Returns a <tt> HTML element */
  fixed(): string;

  /** Returns a <font> HTML element and sets the color attribute value */
  fontcolor(color: string): string;

  /** Returns a <font> HTML element and sets the size attribute value */
  fontsize(size: number): string;

  /** Returns a <font> HTML element and sets the size attribute value */
  fontsize(size: string): string;

  /** Returns an <i> HTML element */
  italics(): string;

  /** Returns an <a> HTML element and sets the href attribute value */
  link(url: string): string;

  /** Returns a <small> HTML element */
  small(): string;

  /** Returns a <strike> HTML element */
  strike(): string;

  /** Returns a <sub> HTML element */
  sub(): string;

  /** Returns a <sup> HTML element */
  sup(): string;
}

interface StringConstructor {
  /**
   * Return the String value whose elements are, in order, the elements in the List elements.
   * If length is 0, the empty string is returned.
   */
  fromCodePoint(...codePoints: number[]): string;

  /**
   * String.raw is intended for use as a tag function of a Tagged Template String. When called
   * as such the first argument will be a well formed template call site object and the rest
   * parameter will contain the substitution values.
   * @param template A well-formed template string call site representation.
   * @param substitutions A set of substitution values.
   */
  raw(template: TemplateStringsArray, ...substitutions: any[]): string;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Generator<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;

  return(value: TReturn): IteratorResult<T, TReturn>;

  throw(e: any): IteratorResult<T, TReturn>;

  [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

interface GeneratorFunction {
  /**
   * Creates a new Generator object.
   * @param args A list of arguments the function accepts.
   */
  new(...args: any[]): Generator;

  /**
   * Creates a new Generator object.
   * @param args A list of arguments the function accepts.
   */
  (...args: any[]): Generator;

  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: Generator;
}

interface GeneratorFunctionConstructor {
  /**
   * Creates a new Generator function.
   * @param args A list of arguments the function accepts.
   */
  new(...args: string[]): GeneratorFunction;

  /**
   * Creates a new Generator function.
   * @param args A list of arguments the function accepts.
   */
  (...args: string[]): GeneratorFunction;

  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: GeneratorFunction;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A method that returns the default iterator for an object. Called by the semantics of the
   * for-of statement.
   */
  readonly iterator: symbol;
}

interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
  done: true;
  value: TReturn;
}

type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;

interface Iterator<T, TReturn = any, TNext = undefined> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;

  return?(value?: TReturn): IteratorResult<T, TReturn>;

  throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>;
}

interface Array<T> {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterable of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, T]>;

  /**
   * Returns an iterable of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an iterable of values in the array
   */
  values(): IterableIterator<T>;
}

interface ArrayConstructor {
  /**
   * Creates an array from an iterable object.
   * @param iterable An iterable object to convert to an array.
   */
  from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];

  /**
   * Creates an array from an iterable object.
   * @param iterable An iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}

interface ReadonlyArray<T> {
  /** Iterator of values in the array. */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterable of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, T]>;

  /**
   * Returns an iterable of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an iterable of values in the array
   */
  values(): IterableIterator<T>;
}

interface IArguments {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<any>;
}

interface Map<K, V> {
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of keys in the map
   */
  keys(): IterableIterator<K>;

  /**
   * Returns an iterable of values in the map
   */
  values(): IterableIterator<V>;
}

interface ReadonlyMap<K, V> {
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of keys in the map
   */
  keys(): IterableIterator<K>;

  /**
   * Returns an iterable of values in the map
   */
  values(): IterableIterator<V>;
}

interface MapConstructor {
  new<K, V>(iterable: Iterable<readonly [K, V]>): Map<K, V>;
}

interface WeakMap<K extends object, V> {
}

interface WeakMapConstructor {
  new<K extends object, V>(iterable: Iterable<[K, V]>): WeakMap<K, V>;
}

interface Set<T> {
  /** Iterates over values in the set. */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterable of [v,v] pairs for every value `v` in the set.
   */
  entries(): IterableIterator<[T, T]>;

  /**
   * Despite its name, returns an iterable of the values in the set,
   */
  keys(): IterableIterator<T>;

  /**
   * Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}

interface ReadonlySet<T> {
  /** Iterates over values in the set. */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterable of [v,v] pairs for every value `v` in the set.
   */
  entries(): IterableIterator<[T, T]>;

  /**
   * Despite its name, returns an iterable of the values in the set,
   */
  keys(): IterableIterator<T>;

  /**
   * Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}

interface SetConstructor {
  new<T>(iterable?: Iterable<T> | null): Set<T>;
}

interface WeakSet<T extends object> {
}

interface WeakSetConstructor {
  new<T extends object = object>(iterable: Iterable<T>): WeakSet<T>;
}

interface Promise<T> {
}

interface PromiseConstructor {
  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<TAll>(values: Iterable<TAll | PromiseLike<TAll>>): Promise<TAll[]>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  race<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>;
}

declare namespace Reflect {
  function enumerate(target: object): IterableIterator<any>;
}

interface String {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<string>;
}

interface Int8Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int8ArrayConstructor {
  new(elements: Iterable<number>): Int8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int8Array;
}

interface Uint8Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint8ArrayConstructor {
  new(elements: Iterable<number>): Uint8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8Array;
}

interface Uint8ClampedArray {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint8ClampedArrayConstructor {
  new(elements: Iterable<number>): Uint8ClampedArray;


  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8ClampedArray;
}

interface Int16Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int16ArrayConstructor {
  new(elements: Iterable<number>): Int16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int16Array;
}

interface Uint16Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint16ArrayConstructor {
  new(elements: Iterable<number>): Uint16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint16Array;
}

interface Int32Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Int32ArrayConstructor {
  new(elements: Iterable<number>): Int32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int32Array;
}

interface Uint32Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Uint32ArrayConstructor {
  new(elements: Iterable<number>): Uint32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint32Array;
}

interface Float32Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Float32ArrayConstructor {
  new(elements: Iterable<number>): Float32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float32Array;
}

interface Float64Array {
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
}

interface Float64ArrayConstructor {
  new(elements: Iterable<number>): Float64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float64Array;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface PromiseConstructor {
  /**
   * A reference to the prototype.
   */
  readonly prototype: Promise<any>;

  /**
   * Creates a new Promise.
   * @param executor A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used to resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   */
  new<T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<[T1, T2, T3, T4]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  race<T>(values: readonly T[]): Promise<T extends PromiseLike<infer U> ? U : T>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An iterable of Promises.
   * @returns A new Promise.
   */
  race<T>(values: Iterable<T>): Promise<T extends PromiseLike<infer U> ? U : T>;

  /**
   * Creates a new rejected promise for the provided reason.
   * @param reason The reason the promise was rejected.
   * @returns A new rejected Promise.
   */
  reject<T = never>(reason?: any): Promise<T>;

  /**
   * Creates a new resolved promise for the provided value.
   * @param value A promise.
   * @returns A promise whose internal state matches the provided promise.
   */
  resolve<T>(value: T | PromiseLike<T>): Promise<T>;

  /**
   * Creates a new resolved promise .
   * @returns A resolved promise.
   */
  resolve(): Promise<void>;
}

declare var Promise: PromiseConstructor;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ProxyHandler<T extends object> {
  getPrototypeOf?(target: T): object | null;

  setPrototypeOf?(target: T, v: any): boolean;

  isExtensible?(target: T): boolean;

  preventExtensions?(target: T): boolean;

  getOwnPropertyDescriptor?(target: T, p: PropertyKey): PropertyDescriptor | undefined;

  has?(target: T, p: PropertyKey): boolean;

  get?(target: T, p: PropertyKey, receiver: any): any;

  set?(target: T, p: PropertyKey, value: any, receiver: any): boolean;

  deleteProperty?(target: T, p: PropertyKey): boolean;

  defineProperty?(target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean;

  enumerate?(target: T): PropertyKey[];

  ownKeys?(target: T): PropertyKey[];

  apply?(target: T, thisArg: any, argArray?: any): any;

  construct?(target: T, argArray: any, newTarget?: any): object;
}

interface ProxyConstructor {
  revocable<T extends object>(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void; };

  new<T extends object>(target: T, handler: ProxyHandler<T>): T;
}

declare var Proxy: ProxyConstructor;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Reflect {
  function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;

  function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: any): any;

  function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean;

  function deleteProperty(target: object, propertyKey: PropertyKey): boolean;

  function get(target: object, propertyKey: PropertyKey, receiver?: any): any;

  function getOwnPropertyDescriptor(target: object, propertyKey: PropertyKey): PropertyDescriptor | undefined;

  function getPrototypeOf(target: object): object;

  function has(target: object, propertyKey: PropertyKey): boolean;

  function isExtensible(target: object): boolean;

  function ownKeys(target: object): PropertyKey[];

  function preventExtensions(target: object): boolean;

  function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;

  function setPrototypeOf(target: object, proto: any): boolean;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A reference to the prototype.
   */
  readonly prototype: Symbol;

  /**
   * Returns a new unique Symbol value.
   * @param  description Description of the new Symbol object.
   */
  (description?: string | number): symbol;

  /**
   * Returns a Symbol object from the global symbol registry matching the given key if found.
   * Otherwise, returns a new symbol with this key.
   * @param key key to search for.
   */
  for(key: string): symbol;

  /**
   * Returns a key from the global symbol registry matching the given Symbol if found.
   * Otherwise, returns a undefined.
   * @param sym Symbol to find the key for.
   */
  keyFor(sym: symbol): string | undefined;
}

declare var Symbol: SymbolConstructor;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A method that determines if a constructor object recognizes an object as one of the
   * constructor’s instances. Called by the semantics of the instanceof operator.
   */
  readonly hasInstance: symbol;

  /**
   * A Boolean value that if true indicates that an object should flatten to its array elements
   * by Array.prototype.concat.
   */
  readonly isConcatSpreadable: symbol;

  /**
   * A regular expression method that matches the regular expression against a string. Called
   * by the String.prototype.match method.
   */
  readonly match: symbol;

  /**
   * A regular expression method that replaces matched substrings of a string. Called by the
   * String.prototype.replace method.
   */
  readonly replace: symbol;

  /**
   * A regular expression method that returns the index within a string that matches the
   * regular expression. Called by the String.prototype.search method.
   */
  readonly search: symbol;

  /**
   * A function valued property that is the constructor function that is used to create
   * derived objects.
   */
  readonly species: symbol;

  /**
   * A regular expression method that splits a string at the indices that match the regular
   * expression. Called by the String.prototype.split method.
   */
  readonly split: symbol;

  /**
   * A method that converts an object to a corresponding primitive value.
   * Called by the ToPrimitive abstract operation.
   */
  readonly toPrimitive: symbol;

  /**
   * A String value that is used in the creation of the default string description of an object.
   * Called by the built-in method Object.prototype.toString.
   */
  readonly toStringTag: symbol;

  /**
   * An Object whose own property names are property names that are excluded from the 'with'
   * environment bindings of the associated objects.
   */
  readonly unscopables: symbol;
}

interface Symbol {
  readonly [Symbol.toStringTag]: string;
}

interface Array<T> {
  /**
   * Returns an object whose properties have the value 'true'
   * when they will be absent when used in a 'with' statement.
   */
  [Symbol.unscopables](): {
    copyWithin: boolean;
    entries: boolean;
    fill: boolean;
    find: boolean;
    findIndex: boolean;
    keys: boolean;
    values: boolean;
  };
}

interface Date {
  /**
   * Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "default"): string;

  /**
   * Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "string"): string;

  /**
   * Converts a Date object to a number.
   */
  [Symbol.toPrimitive](hint: "number"): number;

  /**
   * Converts a Date object to a string or number.
   *
   * @param hint The strings "number", "string", or "default" to specify what primitive to return.
   *
   * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".
   * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".
   */
  [Symbol.toPrimitive](hint: string): string | number;
}

interface Map<K, V> {
  readonly [Symbol.toStringTag]: string;
}

interface WeakMap<K extends object, V> {
  readonly [Symbol.toStringTag]: string;
}

interface Set<T> {
  readonly [Symbol.toStringTag]: string;
}

interface WeakSet<T extends object> {
  readonly [Symbol.toStringTag]: string;
}

interface JSON {
  readonly [Symbol.toStringTag]: string;
}

interface Function {
  /**
   * Determines whether the given value inherits from this function if this function was used
   * as a constructor function.
   *
   * A constructor function can control which objects are recognized as its instances by
   * 'instanceof' by overriding this method.
   */
  [Symbol.hasInstance](value: any): boolean;
}

interface GeneratorFunction {
  readonly [Symbol.toStringTag]: string;
}

interface Math {
  readonly [Symbol.toStringTag]: string;
}

interface Promise<T> {
  readonly [Symbol.toStringTag]: string;
}

interface PromiseConstructor {
  readonly [Symbol.species]: PromiseConstructor;
}

interface RegExp {
  /**
   * Matches a string with this regular expression, and returns an array containing the results of
   * that search.
   * @param string A string to search within.
   */
  [Symbol.match](string: string): RegExpMatchArray | null;

  /**
   * Replaces text in a string, using this regular expression.
   * @param string A String object or string literal whose contents matching against
   *               this regular expression will be replaced
   * @param replaceValue A String object or string literal containing the text to replace for every
   *                     successful match of this regular expression.
   */
  [Symbol.replace](string: string, replaceValue: string): string;

  /**
   * Replaces text in a string, using this regular expression.
   * @param string A String object or string literal whose contents matching against
   *               this regular expression will be replaced
   * @param replacer A function that returns the replacement text.
   */
  [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;

  /**
   * Finds the position beginning first substring match in a regular expression search
   * using this regular expression.
   *
   * @param string The string to search within.
   */
  [Symbol.search](string: string): number;

  /**
   * Returns an array of substrings that were delimited by strings in the original input that
   * match against this regular expression.
   *
   * If the regular expression contains capturing parentheses, then each time this
   * regular expression matches, the results (including any undefined results) of the
   * capturing parentheses are spliced.
   *
   * @param string string value to split
   * @param limit if not undefined, the output array is truncated so that it contains no more
   * than 'limit' elements.
   */
  [Symbol.split](string: string, limit?: number): string[];
}

interface RegExpConstructor {
  readonly [Symbol.species]: RegExpConstructor;
}

interface String {
  /**
   * Matches a string an object that supports being matched against, and returns an array containing the results of that search.
   * @param matcher An object that supports being matched against.
   */
  match(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null;

  /**
   * Replaces text in a string, using an object that supports replacement within a string.
   * @param searchValue A object can search for and replace matches within a string.
   * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   */
  replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;

  /**
   * Replaces text in a string, using an object that supports replacement within a string.
   * @param searchValue A object can search for and replace matches within a string.
   * @param replacer A function that returns the replacement text.
   */
  replace(searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string;

  /**
   * Finds the first substring match in a regular expression search.
   * @param searcher An object which supports searching within a string.
   */
  search(searcher: { [Symbol.search](string: string): number; }): number;

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param splitter An object that can split a string.
   * @param limit A value used to limit the number of elements returned in the array.
   */
  split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
}

interface ArrayBuffer {
  readonly [Symbol.toStringTag]: string;
}

interface DataView {
  readonly [Symbol.toStringTag]: string;
}

interface Int8Array {
  readonly [Symbol.toStringTag]: "Int8Array";
}

interface Uint8Array {
  readonly [Symbol.toStringTag]: "UInt8Array";
}

interface Uint8ClampedArray {
  readonly [Symbol.toStringTag]: "Uint8ClampedArray";
}

interface Int16Array {
  readonly [Symbol.toStringTag]: "Int16Array";
}

interface Uint16Array {
  readonly [Symbol.toStringTag]: "Uint16Array";
}

interface Int32Array {
  readonly [Symbol.toStringTag]: "Int32Array";
}

interface Uint32Array {
  readonly [Symbol.toStringTag]: "Uint32Array";
}

interface Float32Array {
  readonly [Symbol.toStringTag]: "Float32Array";
}

interface Float64Array {
  readonly [Symbol.toStringTag]: "Float64Array";
}

interface ArrayConstructor {
  readonly [Symbol.species]: ArrayConstructor;
}

interface MapConstructor {
  readonly [Symbol.species]: MapConstructor;
}

interface SetConstructor {
  readonly [Symbol.species]: SetConstructor;
}

interface ArrayBufferConstructor {
  readonly [Symbol.species]: ArrayBufferConstructor;
}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Array<T> {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: T, fromIndex?: number): boolean;
}

interface ReadonlyArray<T> {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: T, fromIndex?: number): boolean;
}

interface Int8Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8ClampedArray {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int16Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint16Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Int32Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Uint32Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float32Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}

interface Float64Array {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: number, fromIndex?: number): boolean;
}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Intl {
  type DateTimeFormatPartTypes =
    "day"
    | "dayPeriod"
    | "era"
    | "hour"
    | "literal"
    | "minute"
    | "month"
    | "second"
    | "timeZoneName"
    | "weekday"
    | "year";

  interface DateTimeFormatPart {
    type: DateTimeFormatPartTypes;
    value: string;
  }

  interface DateTimeFormat {
    formatToParts(date?: Date | number): DateTimeFormatPart[];
  }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ObjectConstructor {
  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];

  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values(o: {}): any[];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries(o: {}): [string, any][];

  /**
   * Returns an object containing all own property descriptors of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  getOwnPropertyDescriptors<T>(o: T): { [P in keyof T]: TypedPropertyDescriptor<T[P]> } & { [x: string]: PropertyDescriptor };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SharedArrayBuffer {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;

  /*
     * The SharedArrayBuffer constructor's length property whose value is 1.
     */
  length: number;

  /**
   * Returns a section of an SharedArrayBuffer.
   */
  slice(begin: number, end?: number): SharedArrayBuffer;

  readonly [Symbol.species]: SharedArrayBuffer;
  readonly [Symbol.toStringTag]: "SharedArrayBuffer";
}

interface SharedArrayBufferConstructor {
  readonly prototype: SharedArrayBuffer;

  new(byteLength: number): SharedArrayBuffer;
}

declare var SharedArrayBuffer: SharedArrayBufferConstructor;

interface ArrayBufferTypes {
  SharedArrayBuffer: SharedArrayBuffer;
}

interface Atomics {
  /**
   * Adds a value to the value at the given position in the array, returning the original value.
   * Until this atomic operation completes, any other read or write operation against the array
   * will block.
   */
  add(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;

  /**
   * Stores the bitwise AND of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or
   * write operation against the array will block.
   */
  and(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;

  /**
   * Replaces the value at the given position in the array if the original value equals the given
   * expected value, returning the original value. Until this atomic operation completes, any
   * other read or write operation against the array will block.
   */
  compareExchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, expectedValue: number, replacementValue: number): number;

  /**
   * Replaces the value at the given position in the array, returning the original value. Until
   * this atomic operation completes, any other read or write operation against the array will
   * block.
   */
  exchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;

  /**
   * Returns a value indicating whether high-performance algorithms can use atomic operations
   * (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed
   * array.
   */
  isLockFree(size: number): boolean;

  /**
   * Returns the value at the given position in the array. Until this atomic operation completes,
   * any other read or write operation against the array will block.
   */
  load(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number): number;

  /**
   * Stores the bitwise OR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  or(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;

  /**
   * Stores a value at the given position in the array, returning the new value. Until this
   * atomic operation completes, any other read or write operation against the array will block.
   */
  store(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;

  /**
   * Subtracts a value from the value at the given position in the array, returning the original
   * value. Until this atomic operation completes, any other read or write operation against the
   * array will block.
   */
  sub(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;

  /**
   * If the value at the given position in the array is equal to the provided value, the current
   * agent is put to sleep causing execution to suspend until the timeout expires (returning
   * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
   * `"not-equal"`.
   */
  wait(typedArray: Int32Array, index: number, value: number, timeout?: number): "ok" | "not-equal" | "timed-out";

  /**
   * Wakes up sleeping agents that are waiting on the given index of the array, returning the
   * number of agents that were awoken.
   */
  notify(typedArray: Int32Array, index: number, count: number): number;

  /**
   * Stores the bitwise XOR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  xor(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;

  readonly [Symbol.toStringTag]: "Atomics";
}

declare var Atomics: Atomics;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the start (left) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  padStart(maxLength: number, fillString?: string): string;

  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the end (right) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  padEnd(maxLength: number, fillString?: string): string;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Int8ArrayConstructor {
  new(): Int8Array;
}

interface Uint8ArrayConstructor {
  new(): Uint8Array;
}

interface Uint8ClampedArrayConstructor {
  new(): Uint8ClampedArray;
}

interface Int16ArrayConstructor {
  new(): Int16Array;
}

interface Uint16ArrayConstructor {
  new(): Uint16Array;
}

interface Int32ArrayConstructor {
  new(): Int32Array;
}

interface Uint32ArrayConstructor {
  new(): Uint32Array;
}

interface Float32ArrayConstructor {
  new(): Float32Array;
}

interface Float64ArrayConstructor {
  new(): Float64Array;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface AsyncGenerator<T = unknown, TReturn = any, TNext = unknown> extends AsyncIterator<T, TReturn, TNext> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;

  return(value: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;

  throw(e: any): Promise<IteratorResult<T, TReturn>>;

  [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;
}

interface AsyncGeneratorFunction {
  /**
   * Creates a new AsyncGenerator object.
   * @param args A list of arguments the function accepts.
   */
  new(...args: any[]): AsyncGenerator;

  /**
   * Creates a new AsyncGenerator object.
   * @param args A list of arguments the function accepts.
   */
  (...args: any[]): AsyncGenerator;

  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: AsyncGenerator;
}

interface AsyncGeneratorFunctionConstructor {
  /**
   * Creates a new AsyncGenerator function.
   * @param args A list of arguments the function accepts.
   */
  new(...args: string[]): AsyncGeneratorFunction;

  /**
   * Creates a new AsyncGenerator function.
   * @param args A list of arguments the function accepts.
   */
  (...args: string[]): AsyncGeneratorFunction;

  /**
   * The length of the arguments.
   */
  readonly length: number;
  /**
   * Returns the name of the function.
   */
  readonly name: string;
  /**
   * A reference to the prototype.
   */
  readonly prototype: AsyncGeneratorFunction;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A method that returns the default async iterator for an object. Called by the semantics of
   * the for-await-of statement.
   */
  readonly asyncIterator: symbol;
}

interface AsyncIterator<T, TReturn = any, TNext = undefined> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;

  return?(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;

  throw?(e?: any): Promise<IteratorResult<T, TReturn>>;
}

interface AsyncIterable<T> {
  [Symbol.asyncIterator](): AsyncIterator<T>;
}

interface AsyncIterableIterator<T> extends AsyncIterator<T> {
  [Symbol.asyncIterator](): AsyncIterableIterator<T>;
}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace Intl {
  interface PluralRulesOptions {
    localeMatcher?: "lookup" | "best fit";
    type?: "cardinal" | "ordinal";
  }

  interface ResolvedPluralRulesOptions {
    locale: string;
    pluralCategories: string[];
    type: "cardinal" | "ordinal";
    minimumIntegerDigits: number;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
    minimumSignificantDigits: number;
    maximumSignificantDigits: number;
  }

  interface PluralRules {
    resolvedOptions(): ResolvedPluralRulesOptions;

    select(n: number): string;
  }

  const PluralRules: {
    new(locales?: string | string[], options?: PluralRulesOptions): PluralRules;
    (locales?: string | string[], options?: PluralRulesOptions): PluralRules;
    supportedLocalesOf(
      locales: string | string[],
      options?: PluralRulesOptions,
    ): string[];
  };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface RegExpMatchArray {
  groups?: {
    [key: string]: string
  }
}

interface RegExpExecArray {
  groups?: {
    [key: string]: string
  }
}

interface RegExp {
  /**
   * Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.
   * Default is false. Read-only.
   */
  readonly dotAll: boolean;
}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ReadonlyArray<T> {

  /**
   * Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[]


  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this:
            ReadonlyArray<U[][][][]> |

            ReadonlyArray<ReadonlyArray<U[][][]>> |
            ReadonlyArray<ReadonlyArray<U[][]>[]> |
            ReadonlyArray<ReadonlyArray<U[]>[][]> |
            ReadonlyArray<ReadonlyArray<U>[][][]> |

            ReadonlyArray<ReadonlyArray<ReadonlyArray<U[][]>>> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[][]>> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[][]> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>[]> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>[]> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>[]>> |

            ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>>> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>>> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[]>> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>[]> |

            ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>>>,
          depth: 4): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this:
            ReadonlyArray<U[][][]> |

            ReadonlyArray<ReadonlyArray<U>[][]> |
            ReadonlyArray<ReadonlyArray<U[]>[]> |
            ReadonlyArray<ReadonlyArray<U[][]>> |

            ReadonlyArray<ReadonlyArray<ReadonlyArray<U[]>>> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<U>[]>> |
            ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>[]> |

            ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>>,
          depth: 3): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this:
            ReadonlyArray<U[][]> |

            ReadonlyArray<ReadonlyArray<U[]>> |
            ReadonlyArray<ReadonlyArray<U>[]> |

            ReadonlyArray<ReadonlyArray<ReadonlyArray<U>>>,
          depth: 2): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this:
            ReadonlyArray<U[]> |
            ReadonlyArray<ReadonlyArray<U>>,
          depth?: 1
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this:
            ReadonlyArray<U>,
          depth: 0
  ): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth. If no depth is provided, flat method defaults to the depth of 1.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(depth?: number): any[];
}

interface Array<T> {

  /**
   * Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[]

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][][][][], depth: 7): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][][][], depth: 6): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][][], depth: 5): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][][], depth: 4): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][][], depth: 3): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][][], depth: 2): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[][], depth?: 1): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(this: U[], depth: 0): U[];

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth. If no depth is provided, flat method defaults to the depth of 1.
   *
   * @param depth The maximum recursion depth
   */
  flat<U>(depth?: number): any[];
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface ObjectConstructor {
  /**
   * Returns an object created by key-value entries for properties and methods
   * @param entries An iterable object that contains key-value entries for properties and methods.
   */
  fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k in PropertyKey]: T };

  /**
   * Returns an object created by key-value entries for properties and methods
   * @param entries An iterable object that contains key-value entries for properties and methods.
   */
  fromEntries(entries: Iterable<readonly any[]>): any;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


interface String {
  /** Removes the trailing white space and line terminator characters from a string. */
  trimEnd(): string;

  /** Removes the leading white space and line terminator characters from a string. */
  trimStart(): string;

  /** Removes the leading white space and line terminator characters from a string. */
  trimLeft(): string;

  /** Removes the trailing white space and line terminator characters from a string. */
  trimRight(): string;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface Symbol {
  /**
   * Expose the [[Description]] internal slot of a symbol directly.
   */
  readonly description: string | undefined;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface BigInt {
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings.
   */
  toString(radix?: number): string;

  /** Returns a string representation appropriate to the host environment's current locale. */
  toLocaleString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): bigint;

  readonly [Symbol.toStringTag]: "BigInt";
}

interface BigIntConstructor {
  (value?: any): bigint;

  readonly prototype: BigInt;

  /**
   * Interprets the low bits of a BigInt as a 2's-complement signed integer.
   * All higher bits are discarded.
   * @param bits The number of low bits to use
   * @param int The BigInt whose bits to extract
   */
  asIntN(bits: number, int: bigint): bigint;

  /**
   * Interprets the low bits of a BigInt as an unsigned integer.
   * All higher bits are discarded.
   * @param bits The number of low bits to use
   * @param int The BigInt whose bits to extract
   */
  asUintN(bits: number, int: bigint): bigint;
}

declare var BigInt: BigIntConstructor;

/**
 * A typed array of 64-bit signed integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated, an exception is raised.
 */
interface BigInt64Array {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;

  /** The length in bytes of the array. */
  readonly byteLength: number;

  /** The offset in bytes of the array. */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: bigint, index: number, array: BigInt64Array) => any, thisArg?: any): BigInt64Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): bigint | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: bigint, index: number, array: BigInt64Array) => void, thisArg?: any): void;

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /** Yields each index in the array. */
  keys(): IterableIterator<number>;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;

  /** The length of the array. */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint, thisArg?: any): BigInt64Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;

  /** Reverses the elements in the array. */
  reverse(): this;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls the
   * callbackfn function for each element in the array until the callbackfn returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;

  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;

  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;

  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;

  /** Returns a string representation of the array. */
  toString(): string;

  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;

  [Symbol.iterator](): IterableIterator<bigint>;

  readonly [Symbol.toStringTag]: "BigInt64Array";

  [index: number]: bigint;
}

interface BigInt64ArrayConstructor {
  readonly prototype: BigInt64Array;

  new(length?: number): BigInt64Array;

  new(array: Iterable<bigint>): BigInt64Array;

  new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigInt64Array;

  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: bigint[]): BigInt64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: ArrayLike<bigint>): BigInt64Array;

  from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigInt64Array;
}

declare var BigInt64Array: BigInt64ArrayConstructor;

/**
 * A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated, an exception is raised.
 */
interface BigUint64Array {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;

  /** The length in bytes of the array. */
  readonly byteLength: number;

  /** The offset in bytes of the array. */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: bigint, index: number, array: BigUint64Array) => any, thisArg?: any): BigUint64Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): bigint | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: bigint, index: number, array: BigUint64Array) => void, thisArg?: any): void;

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /** Yields each index in the array. */
  keys(): IterableIterator<number>;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;

  /** The length of the array. */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint, thisArg?: any): BigUint64Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;

  /** Reverses the elements in the array. */
  reverse(): this;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls the
   * callbackfn function for each element in the array until the callbackfn returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;

  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;

  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;

  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;

  /** Returns a string representation of the array. */
  toString(): string;

  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;

  [Symbol.iterator](): IterableIterator<bigint>;

  readonly [Symbol.toStringTag]: "BigUint64Array";

  [index: number]: bigint;
}

interface BigUint64ArrayConstructor {
  readonly prototype: BigUint64Array;

  new(length?: number): BigUint64Array;

  new(array: Iterable<bigint>): BigUint64Array;

  new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigUint64Array;

  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: bigint[]): BigUint64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from(arrayLike: ArrayLike<bigint>): BigUint64Array;

  from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigUint64Array;
}

declare var BigUint64Array: BigUint64ArrayConstructor;

interface DataView {
  /**
   * Gets the BigInt64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;

  /**
   * Gets the BigUint64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;

  /**
   * Stores a BigInt64 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;

  /**
   * Stores a BigUint64 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


interface PromiseFulfilledResult<T> {
  status: "fulfilled";
  value: T;
}

interface PromiseRejectedResult {
  status: "rejected";
  reason: any;
}

type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;

interface PromiseConstructor {
  /**
   * Creates a Promise that is resolved with an array of results when all
   * of the provided Promises resolve or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T extends readonly unknown[] | readonly [unknown]>(values: T):
    Promise<{ -readonly [P in keyof T]: PromiseSettledResult<T[P] extends PromiseLike<infer U> ? U : T[P]> }>;

  /**
   * Creates a Promise that is resolved with an array of results when all
   * of the provided Promises resolve or reject.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  allSettled<T>(values: Iterable<T>): Promise<PromiseSettledResult<T extends PromiseLike<infer U> ? U : T>[]>;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface String {
  /**
   * Matches a string with a regular expression, and returns an iterable of matches
   * containing the results of that search.
   * @param regexp A variable name or string literal containing the regular expression pattern and flags.
   */
  matchAll(regexp: RegExp): IterableIterator<RegExpMatchArray>;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

interface SymbolConstructor {
  /**
   * A regular expression method that matches the regular expression against a string. Called
   * by the String.prototype.matchAll method.
   */
  readonly matchAll: symbol;
}

interface RegExp {
  /**
   * Matches a string with this regular expression, and returns an iterable of matches
   * containing the results of that search.
   * @param string A string to search within.
   */
  [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray>;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/////////////////////////////
/// ECMAScript APIs
/////////////////////////////
declare var NaN: number;
declare var Infinity: number;

/**
 * Evaluates JavaScript code and executes it.
 * @param x A String value that contains valid JavaScript code.
 */
declare function eval(x: string): any;

/**
 * Converts a string to an integer.
 * @param s A string to convert into a number.
 * @param radix A value between 2 and 36 that specifies the base of the number in numString.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
 * All other strings are considered decimal.
 */
declare function parseInt(s: string, radix?: number): number;

/**
 * Converts a string to a floating-point number.
 * @param string A string that contains a floating-point number.
 */
declare function parseFloat(string: string): number;

/**
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
 * @param number A numeric value.
 */
declare function isNaN(number: number): boolean;

/**
 * Determines whether a supplied number is finite.
 * @param number Any numeric value.
 */
declare function isFinite(number: number): boolean;

/**
 * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
 * @param encodedURI A value representing an encoded URI.
 */
declare function decodeURI(encodedURI: string): string;

/**
 * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
 * @param encodedURIComponent A value representing an encoded URI component.
 */
declare function decodeURIComponent(encodedURIComponent: string): string;

/**
 * Encodes a text string as a valid Uniform Resource Identifier (URI)
 * @param uri A value representing an encoded URI.
 */
declare function encodeURI(uri: string): string;

/**
 * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
 * @param uriComponent A value representing an encoded URI component.
 */
declare function encodeURIComponent(uriComponent: string | number | boolean): string;

/**
 * Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.
 * @param string A string value
 */
declare function escape(string: string): string;

/**
 * Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.
 * @param string A string value
 */
declare function unescape(string: string): string;

interface Symbol {
  /** Returns a string representation of an object. */
  toString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): symbol;
}

declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;

  get?(): any;

  set?(v: any): void;
}

interface PropertyDescriptorMap {
  [s: string]: PropertyDescriptor;
}

interface Object {
  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
  constructor: Function;

  /** Returns a string representation of an object. */
  toString(): string;

  /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): Object;

  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(v: PropertyKey): boolean;

  /**
   * Determines whether an object exists in another object's prototype chain.
   * @param v Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(v: Object): boolean;

  /**
   * Determines whether a specified property is enumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(v: PropertyKey): boolean;
}

interface ObjectConstructor {
  new(value?: any): Object;

  (): any;

  (value: any): any;

  /** A reference to the prototype for a class of objects. */
  readonly prototype: Object;

  /**
   * Returns the prototype of an object.
   * @param o The object that references the prototype.
   */
  getPrototypeOf(o: any): any;

  /**
   * Gets the own property descriptor of the specified object.
   * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
   * @param o Object that contains the property.
   * @param p Name of the property.
   */
  getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;

  /**
   * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
   * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
   * @param o Object that contains the own properties.
   */
  getOwnPropertyNames(o: any): string[];

  /**
   * Creates an object that has the specified prototype or that has null prototype.
   * @param o Object to use as a prototype. May be null.
   */
  create(o: object | null): any;

  /**
   * Creates an object that has the specified prototype, and that optionally contains specified properties.
   * @param o Object to use as a prototype. May be null
   * @param properties JavaScript object that contains one or more property descriptors.
   */
  create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;

  /**
   * Adds a property to an object, or modifies attributes of an existing property.
   * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
   * @param p The property name.
   * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
   */
  defineProperty(o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): any;

  /**
   * Adds one or more properties to an object, and/or modifies attributes of existing properties.
   * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
   * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
   */
  defineProperties(o: any, properties: PropertyDescriptorMap & ThisType<any>): any;

  /**
   * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  seal<T>(o: T): T;

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T>(a: T[]): readonly T[];

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T extends Function>(f: T): T;

  /**
   * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T>(o: T): Readonly<T>;

  /**
   * Prevents the addition of new properties to an object.
   * @param o Object to make non-extensible.
   */
  preventExtensions<T>(o: T): T;

  /**
   * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isSealed(o: any): boolean;

  /**
   * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isFrozen(o: any): boolean;

  /**
   * Returns a value that indicates whether new properties can be added to an object.
   * @param o Object to test.
   */
  isExtensible(o: any): boolean;

  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: object): string[];
}

/**
 * Provides functionality common to all JavaScript objects.
 */
declare var Object: ObjectConstructor;

/**
 * Creates a new function.
 */
interface Function {
  /**
   * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   */
  apply(this: Function, thisArg: any, argArray?: any): any;

  /**
   * Calls a method of an object, substituting another object for the current object.
   * @param thisArg The object to be used as the current object.
   * @param argArray A list of arguments to be passed to the method.
   */
  call(this: Function, thisArg: any, ...argArray: any[]): any;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg An object to which the this keyword can refer inside the new function.
   * @param argArray A list of arguments to be passed to the new function.
   */
  bind(this: Function, thisArg: any, ...argArray: any[]): any;

  /** Returns a string representation of a function. */
  toString(): string;

  prototype: any;
  readonly length: number;

  // Non-standard extensions
  arguments: any;
  caller: Function;
}

interface FunctionConstructor {
  /**
   * Creates a new function.
   * @param args A list of arguments the function accepts.
   */
  new(...args: string[]): Function;

  (...args: string[]): Function;

  readonly prototype: Function;
}

declare var Function: FunctionConstructor;

/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;

/**
 * Removes the 'this' parameter from a function type.
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

interface CallableFunction extends Function {
  /**
   * Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args An array of argument values to be passed to the function.
   */
  apply<T, R>(this: (this: T) => R, thisArg: T): R;

  apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;

  /**
   * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args Argument values to be passed to the function.
   */
  call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg The object to be used as the this object.
   * @param args Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;

  bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R;

  bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R;

  bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R;

  bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R;

  bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R;
}

interface NewableFunction extends Function {
  /**
   * Calls the function with the specified object as the this value and the elements of specified array as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args An array of argument values to be passed to the function.
   */
  apply<T>(this: new () => T, thisArg: T): void;

  apply<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, args: A): void;

  /**
   * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
   * @param thisArg The object to be used as the this object.
   * @param args Argument values to be passed to the function.
   */
  call<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A): void;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg The object to be used as the this object.
   * @param args Arguments to bind to the parameters of the function.
   */
  bind<T>(this: T, thisArg: any): T;

  bind<A0, A extends any[], R>(this: new (arg0: A0, ...args: A) => R, thisArg: any, arg0: A0): new (...args: A) => R;

  bind<A0, A1, A extends any[], R>(this: new (arg0: A0, arg1: A1, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1): new (...args: A) => R;

  bind<A0, A1, A2, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2): new (...args: A) => R;

  bind<A0, A1, A2, A3, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2, arg3: A3): new (...args: A) => R;

  bind<AX, R>(this: new (...args: AX[]) => R, thisArg: any, ...args: AX[]): new (...args: AX[]) => R;
}

interface IArguments {
  [index: number]: any;

  length: number;
  callee: Function;
}

interface String {
  /** Returns a string representation of a string. */
  toString(): string;

  /**
   * Returns the character at the specified index.
   * @param pos The zero-based index of the desired character.
   */
  charAt(pos: number): string;

  /**
   * Returns the Unicode value of the character at the specified location.
   * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
   */
  charCodeAt(index: number): number;

  /**
   * Returns a string that contains the concatenation of two or more strings.
   * @param strings The strings to append to the end of the string.
   */
  concat(...strings: string[]): string;

  /**
   * Returns the position of the first occurrence of a substring.
   * @param searchString The substring to search for in the string
   * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
   */
  indexOf(searchString: string, position?: number): number;

  /**
   * Returns the last occurrence of a substring in the string.
   * @param searchString The substring to search for.
   * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
   */
  lastIndexOf(searchString: string, position?: number): number;

  /**
   * Determines whether two strings are equivalent in the current locale.
   * @param that String to compare to target string
   */
  localeCompare(that: string): number;

  /**
   * Matches a string with a regular expression, and returns an array containing the results of that search.
   * @param regexp A variable name or string literal containing the regular expression pattern and flags.
   */
  match(regexp: string | RegExp): RegExpMatchArray | null;

  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   */
  replace(searchValue: string | RegExp, replaceValue: string): string;

  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param searchValue A string to search for.
   * @param replacer A function that returns the replacement text.
   */
  replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;

  /**
   * Finds the first substring match in a regular expression search.
   * @param regexp The regular expression pattern and applicable flags.
   */
  search(regexp: string | RegExp): number;

  /**
   * Returns a section of a string.
   * @param start The index to the beginning of the specified portion of stringObj.
   * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
   * If this value is not specified, the substring continues to the end of stringObj.
   */
  slice(start?: number, end?: number): string;

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
   * @param limit A value used to limit the number of elements returned in the array.
   */
  split(separator: string | RegExp, limit?: number): string[];

  /**
   * Returns the substring at the specified location within a String object.
   * @param start The zero-based index number indicating the beginning of the substring.
   * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
   * If end is omitted, the characters from start through the end of the original string are returned.
   */
  substring(start: number, end?: number): string;

  /** Converts all the alphabetic characters in a string to lowercase. */
  toLowerCase(): string;

  /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
  toLocaleLowerCase(locales?: string | string[]): string;

  /** Converts all the alphabetic characters in a string to uppercase. */
  toUpperCase(): string;

  /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
  toLocaleUpperCase(locales?: string | string[]): string;

  /** Removes the leading and trailing white space and line terminator characters from a string. */
  trim(): string;

  /** Returns the length of a String object. */
  readonly length: number;

  // IE extensions
  /**
   * Gets a substring beginning at the specified location and having the specified length.
   * @param from The starting position of the desired substring. The index of the first character in the string is zero.
   * @param length The number of characters to include in the returned substring.
   */
  substr(from: number, length?: number): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): string;

  readonly [index: number]: string;
}

interface StringConstructor {
  new(value?: any): String;

  (value?: any): string;

  readonly prototype: String;

  fromCharCode(...codes: number[]): string;
}

/**
 * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
 */
declare var String: StringConstructor;

interface Boolean {
  /** Returns the primitive value of the specified object. */
  valueOf(): boolean;
}

interface BooleanConstructor {
  new(value?: any): Boolean;

  <T>(value?: T): boolean;

  readonly prototype: Boolean;
}

declare var Boolean: BooleanConstructor;

interface Number {
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  toString(radix?: number): string;

  /**
   * Returns a string representing a number in fixed-point notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toFixed(fractionDigits?: number): string;

  /**
   * Returns a string containing a number represented in exponential notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  toExponential(fractionDigits?: number): string;

  /**
   * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
   * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
   */
  toPrecision(precision?: number): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): number;
}

interface NumberConstructor {
  new(value?: any): Number;

  (value?: any): number;

  readonly prototype: Number;

  /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
  readonly MAX_VALUE: number;

  /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
  readonly MIN_VALUE: number;

  /**
   * A value that is not a number.
   * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
   */
  readonly NaN: number;

  /**
   * A value that is less than the largest negative number that can be represented in JavaScript.
   * JavaScript displays NEGATIVE_INFINITY values as -infinity.
   */
  readonly NEGATIVE_INFINITY: number;

  /**
   * A value greater than the largest number that can be represented in JavaScript.
   * JavaScript displays POSITIVE_INFINITY values as infinity.
   */
  readonly POSITIVE_INFINITY: number;
}

/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: NumberConstructor;

interface TemplateStringsArray extends ReadonlyArray<string> {
  readonly raw: readonly string[];
}

/**
 * The type of `import.meta`.
 *
 * If you need to declare that a given property exists on `import.meta`,
 * this type may be augmented via interface merging.
 */
interface ImportMeta {
}

interface Math {
  /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
  readonly E: number;
  /** The natural logarithm of 10. */
  readonly LN10: number;
  /** The natural logarithm of 2. */
  readonly LN2: number;
  /** The base-2 logarithm of e. */
  readonly LOG2E: number;
  /** The base-10 logarithm of e. */
  readonly LOG10E: number;
  /** Pi. This is the ratio of the circumference of a circle to its diameter. */
  readonly PI: number;
  /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
  readonly SQRT1_2: number;
  /** The square root of 2. */
  readonly SQRT2: number;

  /**
   * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
   * For example, the absolute value of -5 is the same as the absolute value of 5.
   * @param x A numeric expression for which the absolute value is needed.
   */
  abs(x: number): number;

  /**
   * Returns the arc cosine (or inverse cosine) of a number.
   * @param x A numeric expression.
   */
  acos(x: number): number;

  /**
   * Returns the arcsine of a number.
   * @param x A numeric expression.
   */
  asin(x: number): number;

  /**
   * Returns the arctangent of a number.
   * @param x A numeric expression for which the arctangent is needed.
   */
  atan(x: number): number;

  /**
   * Returns the angle (in radians) from the X axis to a point.
   * @param y A numeric expression representing the cartesian y-coordinate.
   * @param x A numeric expression representing the cartesian x-coordinate.
   */
  atan2(y: number, x: number): number;

  /**
   * Returns the smallest integer greater than or equal to its numeric argument.
   * @param x A numeric expression.
   */
  ceil(x: number): number;

  /**
   * Returns the cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  cos(x: number): number;

  /**
   * Returns e (the base of natural logarithms) raised to a power.
   * @param x A numeric expression representing the power of e.
   */
  exp(x: number): number;

  /**
   * Returns the greatest integer less than or equal to its numeric argument.
   * @param x A numeric expression.
   */
  floor(x: number): number;

  /**
   * Returns the natural logarithm (base e) of a number.
   * @param x A numeric expression.
   */
  log(x: number): number;

  /**
   * Returns the larger of a set of supplied numeric expressions.
   * @param values Numeric expressions to be evaluated.
   */
  max(...values: number[]): number;

  /**
   * Returns the smaller of a set of supplied numeric expressions.
   * @param values Numeric expressions to be evaluated.
   */
  min(...values: number[]): number;

  /**
   * Returns the value of a base expression taken to a specified power.
   * @param x The base value of the expression.
   * @param y The exponent value of the expression.
   */
  pow(x: number, y: number): number;

  /** Returns a pseudorandom number between 0 and 1. */
  random(): number;

  /**
   * Returns a supplied numeric expression rounded to the nearest integer.
   * @param x The value to be rounded to the nearest integer.
   */
  round(x: number): number;

  /**
   * Returns the sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  sin(x: number): number;

  /**
   * Returns the square root of a number.
   * @param x A numeric expression.
   */
  sqrt(x: number): number;

  /**
   * Returns the tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  tan(x: number): number;
}

/** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;

/** Enables basic storage and retrieval of dates and times. */
interface Date {
  /** Returns a string representation of a date. The format of the string depends on the locale. */
  toString(): string;

  /** Returns a date as a string value. */
  toDateString(): string;

  /** Returns a time as a string value. */
  toTimeString(): string;

  /** Returns a value as a string value appropriate to the host environment's current locale. */
  toLocaleString(): string;

  /** Returns a date as a string value appropriate to the host environment's current locale. */
  toLocaleDateString(): string;

  /** Returns a time as a string value appropriate to the host environment's current locale. */
  toLocaleTimeString(): string;

  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  valueOf(): number;

  /** Gets the time value in milliseconds. */
  getTime(): number;

  /** Gets the year, using local time. */
  getFullYear(): number;

  /** Gets the year using Universal Coordinated Time (UTC). */
  getUTCFullYear(): number;

  /** Gets the month, using local time. */
  getMonth(): number;

  /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
  getUTCMonth(): number;

  /** Gets the day-of-the-month, using local time. */
  getDate(): number;

  /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
  getUTCDate(): number;

  /** Gets the day of the week, using local time. */
  getDay(): number;

  /** Gets the day of the week using Universal Coordinated Time (UTC). */
  getUTCDay(): number;

  /** Gets the hours in a date, using local time. */
  getHours(): number;

  /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
  getUTCHours(): number;

  /** Gets the minutes of a Date object, using local time. */
  getMinutes(): number;

  /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
  getUTCMinutes(): number;

  /** Gets the seconds of a Date object, using local time. */
  getSeconds(): number;

  /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCSeconds(): number;

  /** Gets the milliseconds of a Date, using local time. */
  getMilliseconds(): number;

  /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCMilliseconds(): number;

  /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
  getTimezoneOffset(): number;

  /**
   * Sets the date and time value in the Date object.
   * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   */
  setTime(time: number): number;

  /**
   * Sets the milliseconds value in the Date object using local time.
   * @param ms A numeric value equal to the millisecond value.
   */
  setMilliseconds(ms: number): number;

  /**
   * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
   * @param ms A numeric value equal to the millisecond value.
   */
  setUTCMilliseconds(ms: number): number;

  /**
   * Sets the seconds value in the Date object using local time.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setSeconds(sec: number, ms?: number): number;

  /**
   * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setUTCSeconds(sec: number, ms?: number): number;

  /**
   * Sets the minutes value in the Date object using local time.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setMinutes(min: number, sec?: number, ms?: number): number;

  /**
   * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setUTCMinutes(min: number, sec?: number, ms?: number): number;

  /**
   * Sets the hour value in the Date object using local time.
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setHours(hours: number, min?: number, sec?: number, ms?: number): number;

  /**
   * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;

  /**
   * Sets the numeric day-of-the-month value of the Date object using local time.
   * @param date A numeric value equal to the day of the month.
   */
  setDate(date: number): number;

  /**
   * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
   * @param date A numeric value equal to the day of the month.
   */
  setUTCDate(date: number): number;

  /**
   * Sets the month value in the Date object using local time.
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
   */
  setMonth(month: number, date?: number): number;

  /**
   * Sets the month value in the Date object using Universal Coordinated Time (UTC).
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
   */
  setUTCMonth(month: number, date?: number): number;

  /**
   * Sets the year of the Date object using local time.
   * @param year A numeric value for the year.
   * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
   * @param date A numeric value equal for the day of the month.
   */
  setFullYear(year: number, month?: number, date?: number): number;

  /**
   * Sets the year value in the Date object using Universal Coordinated Time (UTC).
   * @param year A numeric value equal to the year.
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
   * @param date A numeric value equal to the day of the month.
   */
  setUTCFullYear(year: number, month?: number, date?: number): number;

  /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
  toUTCString(): string;

  /** Returns a date as a string value in ISO format. */
  toISOString(): string;

  /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
  toJSON(key?: any): string;
}

interface DateConstructor {
  new(): Date;

  new(value: number | string): Date;

  new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;

  (): string;

  readonly prototype: Date;

  /**
   * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
   * @param s A date string
   */
  parse(s: string): number;

  /**
   * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
   * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
   * @param month The month as a number between 0 and 11 (January to December).
   * @param date The date as a number between 1 and 31.
   * @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.
   * @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
   * @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.
   * @param ms A number from 0 to 999 that specifies the milliseconds.
   */
  UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;

  now(): number;
}

declare var Date: DateConstructor;

interface RegExpMatchArray extends Array<string> {
  index?: number;
  input?: string;
}

interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
}

interface RegExp {
  /**
   * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
   * @param string The String object or string literal on which to perform the search.
   */
  exec(string: string): RegExpExecArray | null;

  /**
   * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
   * @param string String on which to perform the search.
   */
  test(string: string): boolean;

  /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
  readonly source: string;

  /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
  readonly global: boolean;

  /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
  readonly ignoreCase: boolean;

  /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
  readonly multiline: boolean;

  lastIndex: number;

  // Non-standard extensions
  compile(): this;
}

interface RegExpConstructor {
  new(pattern: RegExp | string): RegExp;

  new(pattern: string, flags?: string): RegExp;

  (pattern: RegExp | string): RegExp;

  (pattern: string, flags?: string): RegExp;

  readonly prototype: RegExp;

  // Non-standard extensions
  $1: string;
  $2: string;
  $3: string;
  $4: string;
  $5: string;
  $6: string;
  $7: string;
  $8: string;
  $9: string;
  lastMatch: string;
}

declare var RegExp: RegExpConstructor;

interface Error {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorConstructor {
  new(message?: string): Error;

  (message?: string): Error;

  readonly prototype: Error;
}

declare var Error: ErrorConstructor;

interface EvalError extends Error {
}

interface EvalErrorConstructor extends ErrorConstructor {
  new(message?: string): EvalError;

  (message?: string): EvalError;

  readonly prototype: EvalError;
}

declare var EvalError: EvalErrorConstructor;

interface RangeError extends Error {
}

interface RangeErrorConstructor extends ErrorConstructor {
  new(message?: string): RangeError;

  (message?: string): RangeError;

  readonly prototype: RangeError;
}

declare var RangeError: RangeErrorConstructor;

interface ReferenceError extends Error {
}

interface ReferenceErrorConstructor extends ErrorConstructor {
  new(message?: string): ReferenceError;

  (message?: string): ReferenceError;

  readonly prototype: ReferenceError;
}

declare var ReferenceError: ReferenceErrorConstructor;

interface SyntaxError extends Error {
}

interface SyntaxErrorConstructor extends ErrorConstructor {
  new(message?: string): SyntaxError;

  (message?: string): SyntaxError;

  readonly prototype: SyntaxError;
}

declare var SyntaxError: SyntaxErrorConstructor;

interface TypeError extends Error {
}

interface TypeErrorConstructor extends ErrorConstructor {
  new(message?: string): TypeError;

  (message?: string): TypeError;

  readonly prototype: TypeError;
}

declare var TypeError: TypeErrorConstructor;

interface URIError extends Error {
}

interface URIErrorConstructor extends ErrorConstructor {
  new(message?: string): URIError;

  (message?: string): URIError;

  readonly prototype: URIError;
}

declare var URIError: URIErrorConstructor;

interface JSON {
  /**
   * Converts a JavaScript Object Notation (JSON) string into an object.
   * @param text A valid JSON string.
   * @param reviver A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   */
  parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;

  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;

  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}

/**
 * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
 */
declare var JSON: JSON;


/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

interface ReadonlyArray<T> {
  /**
   * Gets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  readonly length: number;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
   */
  toLocaleString(): string;

  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: ConcatArray<T>[]): T[];

  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[];

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(callbackfn: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;

  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;

  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;

  readonly [n: number]: T;
}

interface ConcatArray<T> {
  readonly length: number;

  readonly [n: number]: T;

  join(separator?: string): string;

  slice(start?: number, end?: number): T[];
}

interface Array<T> {
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  length: number;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
   */
  toLocaleString(): string;

  /**
   * Removes the last element from an array and returns it.
   */
  pop(): T | undefined;

  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(...items: T[]): number;

  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: ConcatArray<T>[]): T[];

  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): T[];

  /**
   * Removes the first element from an array and returns it.
   */
  shift(): T | undefined;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): T[];

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: T, b: T) => number): this;

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   */
  splice(start: number, deleteCount?: number): T[];

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: T[]): T[];

  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items: T[]): number;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;

  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;

  reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

  [n: number]: T;
}

interface ArrayConstructor {
  new(arrayLength?: number): any[];

  new<T>(arrayLength: number): T[];

  new<T>(...items: T[]): T[];

  (arrayLength?: number): any[];

  <T>(arrayLength: number): T[];

  <T>(...items: T[]): T[];

  isArray(arg: any): arg is any[];

  readonly prototype: any[];
}

declare var Array: ArrayConstructor;

interface TypedPropertyDescriptor<T> {
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
  value?: T;
  get?: () => T;
  set?: (value: T) => void;
}

declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

declare type PromiseConstructorLike = new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>;

interface PromiseLike<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;
}

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}

interface ArrayLike<T> {
  readonly length: number;

  readonly [n: number]: T;
}

/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> {
}

/**
 * Represents a raw buffer of binary data, which is used to store data for the
 * different typed arrays. ArrayBuffers cannot be read from or written to directly,
 * but can be passed to a typed array or DataView Object to interpret the raw
 * buffer as needed.
 */
interface ArrayBuffer {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;

  /**
   * Returns a section of an ArrayBuffer.
   */
  slice(begin: number, end?: number): ArrayBuffer;
}

/**
 * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
 */
interface ArrayBufferTypes {
  ArrayBuffer: ArrayBuffer;
}

type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];

interface ArrayBufferConstructor {
  readonly prototype: ArrayBuffer;

  new(byteLength: number): ArrayBuffer;

  isView(arg: any): arg is ArrayBufferView;
}

declare var ArrayBuffer: ArrayBufferConstructor;

interface ArrayBufferView {
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  byteOffset: number;
}

interface DataView {
  readonly buffer: ArrayBuffer;
  readonly byteLength: number;
  readonly byteOffset: number;

  /**
   * Gets the Float32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getFloat32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Float64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getFloat64(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Int8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getInt8(byteOffset: number): number;

  /**
   * Gets the Int16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getInt16(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Int32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getInt32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Uint8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getUint8(byteOffset: number): number;

  /**
   * Gets the Uint16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getUint16(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Gets the Uint32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getUint32(byteOffset: number, littleEndian?: boolean): number;

  /**
   * Stores an Float32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Float64 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Int8 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   */
  setInt8(byteOffset: number, value: number): void;

  /**
   * Stores an Int16 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Int32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Uint8 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   */
  setUint8(byteOffset: number, value: number): void;

  /**
   * Stores an Uint16 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;

  /**
   * Stores an Uint32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written,
   * otherwise a little-endian value should be written.
   */
  setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
}

interface DataViewConstructor {
  new(buffer: ArrayBufferLike, byteOffset?: number, byteLength?: number): DataView;
}

declare var DataView: DataViewConstructor;

/**
 * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
 * number of bytes could not be allocated an exception is raised.
 */
interface Int8Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Int8Array) => any, thisArg?: any): Int8Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Int8Array) => number, thisArg?: any): Int8Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int8Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int8Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int8Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Int8ArrayConstructor {
  readonly prototype: Int8Array;

  new(length: number): Int8Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int8Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Int8Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Int8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int8Array;


}

declare var Int8Array: Int8ArrayConstructor;

/**
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Uint8Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint8Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint8ArrayConstructor {
  readonly prototype: Uint8Array;

  new(length: number): Uint8Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint8Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Uint8Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint8Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8Array;

}

declare var Uint8Array: Uint8ArrayConstructor;

/**
 * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.
 * If the requested number of bytes could not be allocated an exception is raised.
 */
interface Uint8ClampedArray {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => any, thisArg?: any): Uint8ClampedArray;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => number, thisArg?: any): Uint8ClampedArray;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint8ClampedArray;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8ClampedArray;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8ClampedArray;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint8ClampedArrayConstructor {
  readonly prototype: Uint8ClampedArray;

  new(length: number): Uint8ClampedArray;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint8ClampedArray;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Uint8ClampedArray;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint8ClampedArray;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint8ClampedArray;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8ClampedArray;
}

declare var Uint8ClampedArray: Uint8ClampedArrayConstructor;

/**
 * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Int16Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Int16Array) => any, thisArg?: any): Int16Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Int16Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Int16Array) => number, thisArg?: any): Int16Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int16Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int16Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int16Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Int16ArrayConstructor {
  readonly prototype: Int16Array;

  new(length: number): Int16Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int16Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Int16Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Int16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int16Array;


}

declare var Int16Array: Int16ArrayConstructor;

/**
 * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Uint16Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Uint16Array) => any, thisArg?: any): Uint16Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Uint16Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Uint16Array) => number, thisArg?: any): Uint16Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint16Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint16Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint16Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint16ArrayConstructor {
  readonly prototype: Uint16Array;

  new(length: number): Uint16Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint16Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Uint16Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint16Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint16Array;


}

declare var Uint16Array: Uint16ArrayConstructor;

/**
 * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Int32Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Int32Array) => any, thisArg?: any): Int32Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Int32Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Int32Array) => number, thisArg?: any): Int32Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int32Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int32Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int32Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Int32ArrayConstructor {
  readonly prototype: Int32Array;

  new(length: number): Int32Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Int32Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Int32Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Int32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Int32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int32Array;

}

declare var Int32Array: Int32ArrayConstructor;

/**
 * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
interface Uint32Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Uint32Array) => any, thisArg?: any): Uint32Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Uint32Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Uint32Array) => number, thisArg?: any): Uint32Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint32Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint32Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint32Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Uint32ArrayConstructor {
  readonly prototype: Uint32Array;

  new(length: number): Uint32Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Uint32Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Uint32Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Uint32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Uint32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint32Array;

}

declare var Uint32Array: Uint32ArrayConstructor;

/**
 * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
 * of bytes could not be allocated an exception is raised.
 */
interface Float32Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Float32Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Float32Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Float32Array;

  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;

  /**
   * Returns a string representation of an array.
   */
  toString(): string;

  [index: number]: number;
}

interface Float32ArrayConstructor {
  readonly prototype: Float32Array;

  new(length: number): Float32Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Float32Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Float32Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Float32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Float32Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array;


}

declare var Float32Array: Float32ArrayConstructor;

/**
 * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
 * number of bytes could not be allocated an exception is raised.
 */
interface Float64Array {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(callbackfn: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;

  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param callbackfn A function that accepts up to three arguments. The filter method calls
   * the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(callbackfn: (value: number, index: number, array: Float64Array) => any, thisArg?: any): Float64Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: number, index: number, array: Float64Array) => void, thisArg?: any): void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn: (value: number, index: number, array: Float64Array) => number, thisArg?: any): Float64Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;

  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;

  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;

  /**
   * Reverses the elements in an Array.
   */
  reverse(): Float64Array;

  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Float64Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;

  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;

  /**
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Float64Array;

  toString(): string;

  [index: number]: number;
}

interface Float64ArrayConstructor {
  readonly prototype: Float64Array;

  new(length: number): Float64Array;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): Float64Array;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): Float64Array;

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * Returns a new array from a set of elements.
   * @param items A set of elements to include in the new array object.
   */
  of(...items: number[]): Float64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   */
  from(arrayLike: ArrayLike<number>): Float64Array;

  /**
   * Creates an array from an array-like or iterable object.
   * @param arrayLike An array-like or iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array;

}

declare var Float64Array: Float64ArrayConstructor;

/////////////////////////////
/// ECMAScript Internationalization API
/////////////////////////////

declare namespace Intl {
  interface CollatorOptions {
    usage?: string;
    localeMatcher?: string;
    numeric?: boolean;
    caseFirst?: string;
    sensitivity?: string;
    ignorePunctuation?: boolean;
  }

  interface ResolvedCollatorOptions {
    locale: string;
    usage: string;
    sensitivity: string;
    ignorePunctuation: boolean;
    collation: string;
    caseFirst: string;
    numeric: boolean;
  }

  interface Collator {
    compare(x: string, y: string): number;

    resolvedOptions(): ResolvedCollatorOptions;
  }

  var Collator: {
    new(locales?: string | string[], options?: CollatorOptions): Collator;
    (locales?: string | string[], options?: CollatorOptions): Collator;
    supportedLocalesOf(locales: string | string[], options?: CollatorOptions): string[];
  };

  interface NumberFormatOptions {
    localeMatcher?: string;
    style?: string;
    currency?: string;
    currencyDisplay?: string;
    useGrouping?: boolean;
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
  }

  interface ResolvedNumberFormatOptions {
    locale: string;
    numberingSystem: string;
    style: string;
    currency?: string;
    currencyDisplay?: string;
    minimumIntegerDigits: number;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
    useGrouping: boolean;
  }

  interface NumberFormat {
    format(value: number): string;

    resolvedOptions(): ResolvedNumberFormatOptions;
  }

  var NumberFormat: {
    new(locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
    (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
    supportedLocalesOf(locales: string | string[], options?: NumberFormatOptions): string[];
  };

  interface DateTimeFormatOptions {
    localeMatcher?: string;
    weekday?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    timeZoneName?: string;
    formatMatcher?: string;
    hour12?: boolean;
    timeZone?: string;
  }

  interface ResolvedDateTimeFormatOptions {
    locale: string;
    calendar: string;
    numberingSystem: string;
    timeZone: string;
    hour12?: boolean;
    weekday?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    timeZoneName?: string;
  }

  interface DateTimeFormat {
    format(date?: Date | number): string;

    resolvedOptions(): ResolvedDateTimeFormatOptions;
  }

  var DateTimeFormat: {
    new(locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;
    (locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;
    supportedLocalesOf(locales: string | string[], options?: DateTimeFormatOptions): string[];
  };
}

interface String {
  /**
   * Determines whether two strings are equivalent in the current or specified locale.
   * @param that String to compare to target string
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
   * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
   */
  localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;
}

interface Number {
  /**
   * Converts a number to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Date {
  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;

  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;

  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
}

declare class Box3Quaternion {
  w: number;
  x: number;
  y: number;
  z: number;

  constructor(w: number, x: number, y: number, z: number);

  static rotationBetween(a: Box3Vector3, b: Box3Vector3): Box3Quaternion;

  static fromAxisAngle(axis: Box3Vector3, rad: number): Box3Quaternion;

  static fromEuler(x: number, y: number, z: number): Box3Quaternion;

  set(w: number, x: number, y: number, z: number): Box3Quaternion;

  copy(q: Box3Quaternion): Box3Quaternion;

  getAxisAngle(_q: Box3Quaternion): {
    axis: Box3Vector3;
    angle: number;
  };

  rotateX(_rad: number): Box3Quaternion;

  rotateY(_rad: number): Box3Quaternion;

  rotateZ(_rad: number): Box3Quaternion;

  dot(q: Box3Quaternion): number;

  add(v: Box3Quaternion): Box3Quaternion;

  sub(v: Box3Quaternion): Box3Quaternion;

  angle(q: Box3Quaternion): number;

  mul(q: Box3Quaternion): Box3Quaternion;

  inv(): Box3Quaternion;

  div(q: Box3Quaternion): Box3Quaternion;

  slerp(q: Box3Quaternion, n: number): Box3Quaternion;

  mag(): number;

  sqrMag(): number;

  normalize(): Box3Quaternion;

  equals(q: Box3Quaternion): boolean;

  clone(): Box3Quaternion;

  toString(): string;
}

declare class Box3Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number);

  static fromPolar(mag: number, phi: number, theta: number): Box3Vector3;

  set(x: number, y: number, z: number): Box3Vector3;

  copy(v: Box3Vector3): Box3Vector3;

  add(v: Box3Vector3): Box3Vector3;

  sub(v: Box3Vector3): Box3Vector3;

  mul(v: Box3Vector3): Box3Vector3;

  div(v: Box3Vector3): Box3Vector3;

  addEq(v: Box3Vector3): Box3Vector3;

  subEq(v: Box3Vector3): Box3Vector3;

  mulEq(v: Box3Vector3): Box3Vector3;

  divEq(v: Box3Vector3): Box3Vector3;

  dot(v: Box3Vector3): number;

  cross(v: Box3Vector3): Box3Vector3;

  scale(n: number): Box3Vector3;

  clone(): Box3Vector3;

  lerp(v: Box3Vector3, n: number): Box3Vector3;

  mag(): number;

  sqrMag(): number;

  towards(v: Box3Vector3): Box3Vector3;

  distance(v: Box3Vector3): number;

  normalize(): Box3Vector3;

  angle(v: Box3Vector3): number;

  max(v: Box3Vector3): Box3Vector3;

  min(v: Box3Vector3): Box3Vector3;

  exactEquals(v: Box3Vector3): boolean;

  equals(v: Box3Vector3): boolean;

  toString(): string;
}

declare class Box3Bounds3 {
  lo: Box3Vector3;
  hi: Box3Vector3;

  constructor(lo: Box3Vector3, hi: Box3Vector3);

  static fromPoints(...points: Box3Vector3[]): Box3Bounds3;

  intersect(b: Box3Bounds3): Box3Bounds3;

  contains(b: Box3Vector3): boolean;

  containsBounds(b: Box3Bounds3): boolean;

  intersects(b: Box3Bounds3): boolean;

  set(lox: number, loy: number, loz: number, hix: number, hiy: number, hiz: number): Box3Bounds3;

  copy(b: Box3Bounds3): Box3Bounds3;

  toString(): string;
}

declare class Box3RGBAColor {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number);

  set(r: number, g: number, b: number, a: number): Box3RGBAColor;

  copy(c: Box3RGBAColor): Box3RGBAColor;

  add(rgba: Box3RGBAColor): Box3RGBAColor;

  sub(rgba: Box3RGBAColor): Box3RGBAColor;

  mul(rgba: Box3RGBAColor): Box3RGBAColor;

  div(rgba: Box3RGBAColor): Box3RGBAColor;

  addEq(rgba: Box3RGBAColor): Box3RGBAColor;

  subEq(rgba: Box3RGBAColor): Box3RGBAColor;

  mulEq(rgba: Box3RGBAColor): Box3RGBAColor;

  divEq(rgba: Box3RGBAColor): Box3RGBAColor;

  lerp(rgba: Box3RGBAColor, n: number): Box3RGBAColor;

  blendEq(rgb: Box3RGBColor): Box3RGBColor;

  equals(rgba: Box3RGBAColor): boolean;

  clone(): Box3RGBAColor;

  toString(): string;
}

declare class Box3RGBColor {
  r: number;
  g: number;
  b: number;

  static random(): Box3RGBColor;

  constructor(r: number, g: number, b: number);

  set(r: number, g: number, b: number): Box3RGBColor;

  copy(c: Box3RGBColor): Box3RGBColor;

  add(rgb: Box3RGBColor): Box3RGBColor;

  sub(rgb: Box3RGBColor): Box3RGBColor;

  mul(rgb: Box3RGBColor): Box3RGBColor;

  div(rgb: Box3RGBColor): Box3RGBColor;

  addEq(rgb: Box3RGBColor): Box3RGBColor;

  subEq(rgb: Box3RGBColor): Box3RGBColor;

  mulEq(rgb: Box3RGBColor): Box3RGBColor;

  divEq(rgb: Box3RGBColor): Box3RGBColor;

  lerp(rgb: Box3RGBColor, n: number): Box3RGBColor;

  equals(rgb: Box3RGBColor): boolean;

  clone(): Box3RGBColor;

  toRGBA(): Box3RGBAColor;

  toString(): string;
}

declare class URLSearchParams {
  constructor(args: any);

  append(name: string, value: string): void;

  delete(name: string): void;

  get(name: string): string | null;

  getAll(name: string): string[];

  forEach(callback: (this: URLSearchParams, value: string, key: string, url: URLSearchParams) => any): void;

  has(name: string): boolean;

  set(name: string, value: string): void;

  keys(): IterableIterator<string>;

  values(): IterableIterator<string>;

  entries(): IterableIterator<string[]>;

  sort(): void;

  toString(): string;

  [Symbol.iterator](): IterableIterator<string[]>;
}

declare class URL {
  constructor(url: any, base?: any);

  get hash(): string;
  set hash(value: string);

  get host(): string;
  set host(value: string);

  get hostname(): any;
  set hostname(value: any);

  get port(): string;
  set port(value: string);

  get href(): string;
  set href(value: string);

  get origin(): string;

  get username(): string;
  set username(value: string);

  get password(): string;
  set password(value: string);

  get pathname(): string;
  set pathname(value: string);

  get protocol(): string;
  set protocol(value: string);

  get search(): string;
  set search(value: string);

  get searchParams(): URLSearchParams;

  toString(): string;

  toJSON(): string;
}
