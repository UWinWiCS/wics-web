package dev.kataray.web

import com.google.gson.GsonBuilder
import dev.kataray.web.config.ConfigManager
import io.javalin.Javalin
import io.javalin.http.staticfiles.Location
import io.javalin.json.JsonMapper
import java.io.File
import java.lang.reflect.Type

object JavalinManager {
    var javalin: Javalin? = null
    private val gsonMapper = object : JsonMapper {
        private val gson = GsonBuilder()
            .setPrettyPrinting()
            .create()

        override fun <T : Any> fromJsonString(json: String, targetType: Type): T =
            gson.fromJson(json, targetType)

        override fun toJsonString(obj: Any, type: Type) =
            gson.toJson(obj)

    }


    fun start() {
        val configur = ConfigManager.configur
        javalin = Javalin.create{
            it.bundledPlugins.enableCors { cors ->
                cors.addRule { rule ->
                    rule.anyHost()
                }
            }
            it.jsonMapper(gsonMapper)
            it.staticFiles.add(configur.staticFilesDirectory, Location.EXTERNAL)
        }
            .error(404) { ctx ->
                val index = File(configur.staticFilesDirectory, "index.html")

                if (!index.exists()) {
                    ctx.result("no index.html found")
                    return@error
                }

                ctx.contentType("text/html")
                ctx.result(index.readText())
            }
            .start(configur.host, configur.port)
    }

    fun stop() {
        javalin?.stop()
    }


}