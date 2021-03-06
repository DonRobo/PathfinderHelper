package com.donrobo.pathfinderhelper.data

import org.springframework.data.jpa.repository.JpaRepository

interface CharacterRepository : JpaRepository<PathfinderCharacter, Long>
interface WeaponRepository : JpaRepository<Weapon, Long>
