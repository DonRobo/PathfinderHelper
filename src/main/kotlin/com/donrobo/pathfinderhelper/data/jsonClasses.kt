package com.donrobo.pathfinderhelper.data

//TODO size
//TODO abilities
//TODO items
//TODO feats
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

data class JsonWeapon(
        val id: Long?,
        val name: String,
        val damageSmall: DiceThrow,
        val damageMedium: DiceThrow,
        val critMultiplier: Int,
        val range: Int,
        val weight: Int,
        val weaponType: WeaponType
) {
    constructor(weaponEntity: WeaponEntity) : this(
            id = weaponEntity.id,
            name = weaponEntity.name,
            damageSmall = DiceThrow(weaponEntity.damageSmall),
            damageMedium = DiceThrow(weaponEntity.damageMedium),
            critMultiplier = weaponEntity.critMultiplier,
            range = weaponEntity.range,
            weight = weaponEntity.weight,
            weaponType = WeaponType.valueOf(weaponEntity.weaponType.name)
    )
}

enum class WeaponType {
    Bludgeoning,
    Piercing,
    Slashing
}

data class DiceThrow(val diceCount: Int, val faceCount: Int) {
    constructor(entityDiceThrow: EntityDiceThrow) : this(
            diceCount = entityDiceThrow.diceCount,
            faceCount = entityDiceThrow.faceCount
    )

    @Suppress("unused")
    private constructor() : this(1, 6)

}
