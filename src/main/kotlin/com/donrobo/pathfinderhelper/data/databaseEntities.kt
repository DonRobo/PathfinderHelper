package com.donrobo.pathfinderhelper.data

import javax.persistence.*

@Entity
data class CharacterEntity(
        @GeneratedValue @Id var id: Long?,
        @Column(unique = true) var name: String,
        val maxHitpoints: Int,
        val armorBonus: Int,
        val strength: Int,
        val dexterity: Int,
        val constitution: Int,
        val intelligence: Int,
        val wisdom: Int,
        val charisma: Int
) {
    constructor(jsonCharacter: JsonCharacter) : this(
            id = if (jsonCharacter.id == null || jsonCharacter.id < 0) null else jsonCharacter.id,
            name = jsonCharacter.name,
            maxHitpoints = jsonCharacter.maxHitpoints,
            armorBonus = jsonCharacter.armorBonus,
            strength = jsonCharacter.strength,
            dexterity = jsonCharacter.dexterity,
            constitution = jsonCharacter.constitution,
            intelligence = jsonCharacter.intelligence,
            wisdom = jsonCharacter.wisdom,
            charisma = jsonCharacter.charisma)

    @Suppress("unused")
    private constructor() : this(null, "", 1, 0, 10, 10, 10, 10, 10, 10)
}

@Entity
data class WeaponEntity(
        @GeneratedValue @Id var id: Long?,
        @Column(unique = true) var name: String,
        @Embedded
        @AttributeOverrides(
                AttributeOverride(name = "diceCount", column = Column(name = "DAMAGE_SMALL_DICE_COUNT")),
                AttributeOverride(name = "faceCount", column = Column(name = "DAMAGE_SMALL_FACE_COUNT"))
        )
        var damageSmall: EntityDiceThrow,
        @Embedded
        @AttributeOverrides(
                AttributeOverride(name = "diceCount", column = Column(name = "DAMAGE_LARGE_DICE_COUNT")),
                AttributeOverride(name = "faceCount", column = Column(name = "DAMAGE_LARGE_FACE_COUNT"))
        )
        var damageMedium: EntityDiceThrow,
        var critMultiplier: Int,
        var range: Int,
        var weight: Int,
        @Enumerated(EnumType.STRING) var weaponType: EntityWeaponType
) {
    constructor(jsonWeapon: JsonWeapon) : this(
            id = if (jsonWeapon.id == null || jsonWeapon.id < 0) null else jsonWeapon.id,
            name = jsonWeapon.name,
            damageSmall = EntityDiceThrow(jsonWeapon.damageSmall),
            damageMedium = EntityDiceThrow(jsonWeapon.damageMedium),
            critMultiplier = jsonWeapon.critMultiplier,
            range = jsonWeapon.range,
            weight = jsonWeapon.weight,
            weaponType = EntityWeaponType.valueOf(jsonWeapon.weaponType.name)
    )

    @Suppress("unused")
    private constructor() : this(null, "", EntityDiceThrow(1, 6), EntityDiceThrow(1, 6), 2, 0, 1, EntityWeaponType.Slashing)
}

enum class EntityWeaponType {
    Bludgeoning,
    Piercing,
    Slashing
}

@Embeddable
data class EntityDiceThrow(var diceCount: Int, var faceCount: Int) {
    constructor(diceThrow: DiceThrow) : this(
            diceCount = diceThrow.diceCount,
            faceCount = diceThrow.faceCount
    )

    @Suppress("unused")
    private constructor() : this(1, 6)

}
