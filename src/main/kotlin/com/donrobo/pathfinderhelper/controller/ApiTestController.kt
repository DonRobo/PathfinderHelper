package com.donrobo.pathfinderhelper.controller

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class Message(val message: String)

@RestController
@RequestMapping("/api/test")
class ApiTestController {

    @RequestMapping("echo")
    fun echo(@RequestBody message: Message): Message {
        return Message("From Server: ${message.message}")
    }
}