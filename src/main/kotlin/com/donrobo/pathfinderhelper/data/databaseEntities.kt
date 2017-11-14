package com.donrobo.pathfinderhelper.data

import javax.persistence.*

//TODO size
//TODO abilities
//TODO items
//TODO feats
@Entity
class PathfinderCharacter(
        @GeneratedValue @Id var id: Long?,
        @Column(unique = true) var name: String,
        var maxHitpoints: Int,
        var armorBonus: Int,
        var strength: Int,
        var dexterity: Int,
        var constitution: Int,
        var intelligence: Int,
        var wisdom: Int,
        var charisma: Int
) {
    @Suppress("unused")
    private constructor() : this(null, "", 1, 0, 10, 10, 10, 10, 10, 10)
}

@Entity
class Weapon(
        @GeneratedValue @Id var id: Long?,
        @Column(unique = true) var name: String,
        @Embedded
        @AttributeOverrides(
                AttributeOverride(name = "diceCount", column = Column(name = "DAMAGE_SMALL_DICE_COUNT")),
                AttributeOverride(name = "faceCount", column = Column(name = "DAMAGE_SMALL_FACE_COUNT"))
        )
        var damageSmall: DiceThrow,
        @Embedded
        @AttributeOverrides(
                AttributeOverride(name = "diceCount", column = Column(name = "DAMAGE_LARGE_DICE_COUNT")),
                AttributeOverride(name = "faceCount", column = Column(name = "DAMAGE_LARGE_FACE_COUNT"))
        )
        var damageMedium: DiceThrow,
        var critMultiplier: Int,
        var range: Int,
        var weight: Int,
        @Enumerated(EnumType.STRING) var weaponType: WeaponType
) {
    @Suppress("unused")
    private constructor() : this(null, "", DiceThrow(1, 6), DiceThrow(1, 6), 2, 0, 1, WeaponType.Slashing)
}

enum class WeaponType {
    Bludgeoning,
    Piercing,
    Slashing
}

@Embeddable
class DiceThrow(var diceCount: Int, var faceCount: Int) {
    @Suppress("unused")
    private constructor() : this(1, 6)

}
