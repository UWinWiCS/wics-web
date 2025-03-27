package dev.kataray.web.config

import eu.okaeri.configs.OkaeriConfig
import eu.okaeri.configs.annotation.Comment
import java.nio.file.Path

class Config: OkaeriConfig() {
    @Comment("Host to bind to")
    var host = "localhost"

    @Comment("Port to bind to")
    var port = 7070

    @Comment("Path to static files")
    var staticFilesDirectory: String = "~/static"
        get() {
            val asString = field.replaceFirst("~", ConfigManager.dataFolderPath.toString())
            val asPath = Path.of(asString)
            if (!asPath.toFile().exists()) {
                asPath.toFile().mkdirs()
            }
            return asString
        }
}