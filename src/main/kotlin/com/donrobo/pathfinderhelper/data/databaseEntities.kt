package com.donrobo.pathfinderhelper.data

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class CharacterEntity(@GeneratedValue @Id val id: Long?, val name: String) {
    constructor(jsonCharacter: JsonCharacter) : this(jsonCharacter.id, jsonCharacter.name)
}