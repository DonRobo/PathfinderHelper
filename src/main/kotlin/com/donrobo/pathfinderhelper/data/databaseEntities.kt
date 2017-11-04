package com.donrobo.pathfinderhelper.data

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class CharacterEntity(@GeneratedValue @Id var id: Long?, @Column(unique = true) var name: String, val initiative: Int, val maxHealth: Int) {
    constructor(jsonCharacter: JsonCharacter) : this(
            id = if (jsonCharacter.id == null || jsonCharacter.id < 0) null else jsonCharacter.id,
            name = jsonCharacter.name,
            initiative = jsonCharacter.initiative,
            maxHealth = jsonCharacter.maxHealth
    )

    @Suppress("unused")
    private constructor() : this(null, "", 0, 0)
}