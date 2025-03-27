plugins {
    kotlin("jvm") version "2.0.20"
    id("com.gradleup.shadow") version "9.0.0-beta10"
}

repositories {
    mavenCentral()
    maven("https://storehouse.okaeri.eu/repository/maven-public/")
}

dependencies {

    implementation("io.javalin:javalin:6.4.0") // server impl
    implementation("com.google.code.gson:gson:2.12.1") // I prefer gson
    implementation("org.slf4j:slf4j-simple:2.0.16") // logger

    // serialization for javalin
    implementation("com.fasterxml.jackson.core:jackson-databind:2.17.2")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.17.2")

    // configs
    implementation("eu.okaeri:okaeri-configs-yaml-snakeyaml:5.0.5")
}

tasks {
    // shading in our dependencies
    shadowJar {
        dependencies {

        }
        manifest {
            attributes["Main-Class"] = "dev.kataray.web.MainKt"
        }
        archiveClassifier.set("")
        // omit version
        archiveVersion.set("")
    }

    jar {
        // Shadow jar handles our jars
        enabled = false
    }

    build {
        dependsOn(shadowJar)
    }
}

kotlin {
    jvmToolchain(21)
}



