package com.donrobo.pathfinderhelper.data

data class JsonCharacter(val id: Long?, val name: String, val initiative: Int, val maxHealth: Int) {
    constructor(characterEntity: CharacterEntity) : this(
            id = characterEntity.id,
            name = characterEntity.name,
            initiative = characterEntity.initiative,
            maxHealth = characterEntity.maxHealth)
}