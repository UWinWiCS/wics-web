package dev.kataray.web.config

import eu.okaeri.configs.OkaeriConfig
import eu.okaeri.configs.serdes.standard.StandardSerdes
import eu.okaeri.configs.yaml.snakeyaml.YamlSnakeYamlConfigurer
import java.io.File
import java.nio.file.Path
import eu.okaeri.configs.ConfigManager as OkaeriConfigManager

object ConfigManager {
    // config instance
    val configur: Config = create(Config::class.java, "config.yml")

    // retrieves the folder that the jar file is in
    val dataFolderPath: Path by lazy {
        val path: String = this::class.java.protectionDomain.codeSource.location.path
        val jarFile = File(path)
        val value: Path = jarFile.parentFile.toPath()

        val asFile = value.toFile()
        if (!asFile.exists()) {
            asFile.mkdirs()
        }
        asFile.toPath()
    }

    // okaeri boilerplate
    fun <T : OkaeriConfig> create(clazz: Class<T>, fileName: String): T {
        return OkaeriConfigManager.create(clazz) { it: OkaeriConfig ->
            it.withConfigurer(YamlSnakeYamlConfigurer(), StandardSerdes())
            it.withRemoveOrphans(false)
            it.withBindFile(dataFolderPath.resolve(fileName))
            it.saveDefaults()
            it.load(true)
        }
    }

    fun reload() {
        configur.load()
    }
}