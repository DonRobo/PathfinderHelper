package com.donrobo.pathfinderhelper

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

internal class DtoUtilKtTest {

    class TestClass1(val name: String, val number: Int, val optional: Int?)
    class TestClass2(var number: Int?, var name: String) {
        @Suppress("unused")
        constructor() : this(null, "")
    }

    @Test
    fun createCopy() {
        val instance1 = TestClass1("test1", 1, 3)
        val instance2 = convert(instance1, TestClass2::class)
        assertEquals(instance1.name, instance2.name)
        assertEquals(instance1.number, instance2.number)

        val instance1Copy = convert(instance2, TestClass1::class)
        assertEquals(instance1.name, instance1Copy.name)
        assertEquals(instance1.number, instance1Copy.number)
        assertEquals(null, instance1Copy.optional)
    }

    class ListTest1(val strings: List<String>)
    class ListTest2(val strings: MutableList<String>)

    @Test
    fun createListCopy() {
        val instance1 = ListTest1(listOf("test1", "test2"))
        val instance2 = convert(instance1, ListTest2::class)
        assertEquals(instance1.strings, instance2.strings)

        instance2.strings.clear()
        assertEquals(2, instance1.strings.size)
        assertTrue(instance2.strings.isEmpty())
        instance2.strings += "yo"

        val instance1Copy = convert(instance2, ListTest1::class)
        instance2.strings += "yo"
        assertEquals(listOf("yo"), instance1Copy.strings)
    }

}