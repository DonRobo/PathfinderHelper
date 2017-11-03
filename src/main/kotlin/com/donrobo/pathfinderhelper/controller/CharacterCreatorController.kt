package com.donrobo.pathfinderhelper.controller

import com.donrobo.pathfinderhelper.data.CharacterEntity
import com.donrobo.pathfinderhelper.data.CharacterRepository
import com.donrobo.pathfinderhelper.data.JsonCharacter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/charactercreator/")
class CharacterCreatorController(@Autowired val characterRepository: CharacterRepository) {

    @RequestMapping("create")
    fun createCharacter(@RequestBody character: JsonCharacter) {
        characterRepository.save(CharacterEntity(character))
    }
}