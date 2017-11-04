package com.donrobo.pathfinderhelper.data

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

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