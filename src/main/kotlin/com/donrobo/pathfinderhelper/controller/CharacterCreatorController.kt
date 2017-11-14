package com.donrobo.pathfinderhelper.controller

import com.donrobo.pathfinderhelper.data.CharacterRepository
import com.donrobo.pathfinderhelper.data.PathfinderCharacter
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
    fun saveCharacter(@RequestBody character: PathfinderCharacter): PathfinderCharacter {
        if (character.id == null)
            entityManager.persist(character)
        else
            entityManager.merge(character)

        return character
    }

    @PostMapping("delete")
    fun deleteCharacter(@RequestBody character: PathfinderCharacter) {
        entityManager.remove(entityManager.getReference(PathfinderCharacter::class.java, character.id))
    }

    @GetMapping("list")
    fun listCharacters(): List<PathfinderCharacter> = characterRepository.findAll()
}