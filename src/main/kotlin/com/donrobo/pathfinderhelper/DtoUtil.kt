package com.donrobo.pathfinderhelper

import kotlin.reflect.KClass
import kotlin.reflect.KParameter
import kotlin.reflect.full.createInstance
import kotlin.reflect.full.memberProperties
import kotlin.reflect.full.primaryConstructor

fun <T : Any> createCopy(source: Any, destinationClass: KClass<T>): T {
    val sourceClass = source.javaClass.kotlin

    val callParameters = HashMap<KParameter, Any?>()
    destinationClass.primaryConstructor?.parameters?.forEach { param ->
        val properties = sourceClass.memberProperties.filter { prop -> prop.name == param.name }//&& prop.returnType.isSupertypeOf(param.type)
        if (properties.size > 1) {
            throw RuntimeException()
        } else if (properties.size == 1) {
            callParameters.put(param, properties.single().get(source))
        } else if (!param.isOptional) {
            callParameters.put(param, null)
        }
    }

    callParameters.entries.forEach { entry ->
        val v = entry.value
        if (v is List<*>) {
            entry.setValue(ArrayList(v))
        }
    }

    return destinationClass.primaryConstructor?.callBy(callParameters) ?: destinationClass.createInstance()
}