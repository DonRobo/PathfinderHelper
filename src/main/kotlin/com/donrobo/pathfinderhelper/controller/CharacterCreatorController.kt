package com.donrobo.pathfinderhelper.controller

import com.donrobo.pathfinderhelper.convert
import com.donrobo.pathfinderhelper.data.CharacterRepository
import com.donrobo.pathfinderhelper.data.PathfinderCharacter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext
import javax.transaction.Transactional

@RestController
@RequestMapping("/api/character/")
@Transactional
class CharacterCreatorController(@Autowired val characterRepository: CharacterRepository,
                                 @PersistenceContext val entityManager: EntityManager) {

    @PostMapping("save")
    fun saveCharacter(@RequestBody character: CharacterJson): CharacterJson {
        val charEntity = convert(character, PathfinderCharacter::class)
        if (charEntity.id != null && charEntity.id!! < 0) {
            throw RuntimeException()
        }

        if (charEntity.id == null)
            entityManager.persist(charEntity)
        else
            entityManager.merge(charEntity)

        if (charEntity.id == null)
            throw RuntimeException()

        return convert(charEntity, CharacterJson::class)
    }

    @PostMapping("delete")
    fun deleteCharacter(@RequestBody character: CharacterJson) {
        entityManager.remove(entityManager.getReference(PathfinderCharacter::class.java, character.id))
    }

    @GetMapping("list")
    fun listCharacters(): List<CharacterListJson> = characterRepository.findAll().map { convert(it, CharacterListJson::class) }

    @GetMapping("{id}")
    fun getCharacter(@PathVariable(name = "id") id: Long): CharacterJson = convert(characterRepository.findById(id).get(), CharacterJson::class)
}

data class CharacterJson(val id: Long,
                         val name: String,
                         val maxHitpoints: Int,
                         val armorBonus: Int,
                         val strength: Int,
                         val dexterity: Int,
                         val constitution: Int,
                         val intelligence: Int,
                         val wisdom: Int,
                         val charisma: Int)

data class CharacterListJson(val id: Long, val name: String)