package com.donrobo.pathfinderhelper.controller

import com.donrobo.pathfinderhelper.data.CharacterEntity
import com.donrobo.pathfinderhelper.data.CharacterRepository
import com.donrobo.pathfinderhelper.data.JsonCharacter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext
import javax.transaction.Transactional

@RestController
@RequestMapping("/api/charactercreator/")
@Transactional
class CharacterCreatorController(@Autowired val characterRepository: CharacterRepository,
                                 @PersistenceContext val entityManager: EntityManager) {

    @PostMapping("save")
    fun saveCharacter(@RequestBody character: JsonCharacter): JsonCharacter {
        val entity = CharacterEntity(character)
        if (entity.id == null)
            entityManager.persist(entity)
        else
            entityManager.merge(entity)

        return JsonCharacter(entity)
    }

    @PostMapping("delete")
    fun deleteCharacter(@RequestBody character: JsonCharacter) {
        entityManager.remove(entityManager.getReference(CharacterEntity::class.java, character.id))
    }

    @GetMapping("list")
    fun listCharacters(): List<JsonCharacter> {
        return characterRepository.findAll().map { it -> JsonCharacter(it) }
    }
}