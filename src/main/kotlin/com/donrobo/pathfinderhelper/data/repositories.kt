package com.donrobo.pathfinderhelper.data

import org.springframework.data.jpa.repository.JpaRepository

interface CharacterRepository : JpaRepository<CharacterEntity, Long>
interface WeaponRepository : JpaRepository<WeaponEntity, Long>
