package com.donrobo.pathfinderhelper.controller

import com.donrobo.pathfinderhelper.data.JsonWeapon
import com.donrobo.pathfinderhelper.data.WeaponEntity
import com.donrobo.pathfinderhelper.data.WeaponRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext
import javax.transaction.Transactional

@RestController
@RequestMapping("/api/weaponcreator/")
@Transactional
class WeaponCreatorController(@Autowired val weaponRepository: WeaponRepository,
                              @PersistenceContext val entityManager: EntityManager) {

    @PostMapping("save")
    fun saveWeapon(@RequestBody weapon: JsonWeapon): JsonWeapon {
        val entity = WeaponEntity(weapon)
        if (entity.id == null)
            entityManager.persist(entity)
        else
            entityManager.merge(entity)

        return JsonWeapon(entity)
    }

    @PostMapping("delete")
    fun deleteWeapon(@RequestBody weapon: JsonWeapon) {
        entityManager.remove(entityManager.getReference(WeaponEntity::class.java, weapon.id))
    }

    @GetMapping("list")
    fun listWeapons(): List<JsonWeapon> {
        return weaponRepository.findAll().map { it -> JsonWeapon(it) }
    }
}