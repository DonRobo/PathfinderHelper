package com.donrobo.pathfinderhelper

import javax.persistence.GeneratedValue
import kotlin.reflect.KClass
import kotlin.reflect.KParameter
import kotlin.reflect.KProperty1
import kotlin.reflect.full.createInstance
import kotlin.reflect.full.memberProperties
import kotlin.reflect.full.primaryConstructor

fun <T : Any> convert(source: Any, targetClass: KClass<T>): T {
    val sourceClass = source.javaClass.kotlin

    val callParameters = HashMap<KParameter, Any?>()
    targetClass.primaryConstructor?.parameters?.forEach { param ->
        val properties = sourceClass.memberProperties.filter { prop -> prop.name == param.name }//&& prop.returnType.isSupertypeOf(param.type)
        if (properties.size > 1) {
            throw RuntimeException()
        } else if (properties.size == 1) {
            callParameters.put(param, handleProperty(param, properties.single(), source, targetClass))
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

    return targetClass.primaryConstructor?.callBy(callParameters) ?: targetClass.createInstance()
}

private fun handleProperty(paramToSet: KParameter, property: KProperty1<Any, *>, sourceObject: Any, targetClass: KClass<out Any>): Any? {
    val value = property.get(sourceObject)

    val isNegative = value is Long && value < 0
    val isNullable = paramToSet.type.isMarkedNullable
    val hasGeneratedValueAnnotation = paramToSet.name != null && getProperty(targetClass, paramToSet.name!!).annotations.any { it is GeneratedValue }

    if (isNegative && isNullable && hasGeneratedValueAnnotation) {
        return null
//    } else if (value ==null && !paramToSet.type.isMarkedNullable && paramToSet.type.classifier) {
    } else {
        return value
    }
}

fun getProperty(clazz: KClass<out Any>, name: String): KProperty1<out Any, Any?> =
        clazz.memberProperties.first { it.name == name }
