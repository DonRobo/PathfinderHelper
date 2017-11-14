package com.donrobo.pathfinderhelper.controller

import com.donrobo.pathfinderhelper.data.Weapon
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
    fun saveWeapon(@RequestBody weapon: Weapon): Weapon {
        if (weapon.id == null)
            entityManager.persist(weapon)
        else
            entityManager.merge(weapon)

        return weapon
    }

    @PostMapping("delete")
    fun deleteWeapon(@RequestBody weapon: Weapon) {
        entityManager.remove(entityManager.getReference(Weapon::class.java, weapon.id))
    }

    @GetMapping("list")
    fun listWeapons(): List<Weapon> = weaponRepository.findAll()
}