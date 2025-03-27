plugins {
    `java-library`
}

allprojects {
    group = "dev.kataray.web"
    version = "1.0-SNAPSHOT"
}

repositories {
    mavenCentral()
}

tasks {
    jar {
        enabled = false
    }

    val sharedOutputDir = layout.buildDirectory

    val copyFrontend = register<Copy>("copyFrontend") {
        from("wics-frontend/dist")
        into(sharedOutputDir.map { it.dir("wics-frontend") })
    }

    val copyBackend = register<Copy>("copyBackend") {
        from("wics-backend/build/libs")
        into(sharedOutputDir.map { it.dir("wics-backend") })
    }

    named("build") {
        dependsOn(":wics-frontend:npmBuild", ":wics-backend:shadowJar")
        dependsOn(copyFrontend, copyBackend)
    }
}
