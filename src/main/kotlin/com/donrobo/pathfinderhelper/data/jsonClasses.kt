package com.donrobo.pathfinderhelper.data

data class JsonCharacter(
        val id: Long?,
        val name: String,
        val maxHitpoints: Int,
        val armorBonus: Int,
        val strength: Int,
        val dexterity: Int,
        val constitution: Int,
        val intelligence: Int,
        val wisdom: Int,
        val charisma: Int
) {
    constructor(characterEntity: CharacterEntity) : this(
            id = characterEntity.id,
            name = characterEntity.name,
            maxHitpoints = characterEntity.maxHitpoints,
            armorBonus = characterEntity.armorBonus,
            strength = characterEntity.strength,
            dexterity = characterEntity.dexterity,
            constitution = characterEntity.constitution,
            intelligence = characterEntity.intelligence,
            wisdom = characterEntity.wisdom,
            charisma = characterEntity.charisma
    )
}