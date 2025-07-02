<template>
  <section class="bg-foreground text-white h-screen">
    <ParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      color="#fff"
      :staticity="10"
      refresh
    />
    <section class="max-w-280 flex justify-center items-center flex-col m-auto">
      <header
        class="fixed top-0 max-w-280 flex flex-row items-center justify-between w-full mx-auto inset-x-0 p-4 rounded-xl z-50 font-heading max-sm:!top-0"
      >
        <a
          aria-current="page"
          href="/"
          class="router-link-active router-link-exact-active flex items-center justify-center gap-2"
        >
          <img
            alt="Inspira UI Logo"
            data-nuxt-img=""
            srcset="/logo.png 1x, /logo.png 2x"
            class="size-8 animate-pulse"
            src="/logo.png"
          />
          <span class="ml-2 font-semibold text-base text-white">
            Nebula Flow
          </span>
        </a>
      </header>
      <section class="mt-20 flex flex-col items-center">
        <SparklesText
          text="Nebula Flow"
          :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
          :sparkles-count="10"
          class="my-5 text-white"
        />
        <div class="text-white md:text-4xl text-2xl mb-4">
          Make your websites look 10x
        </div>
        <ContainerTextFlip
          :words="['better', 'modern', 'beautiful', 'awesome']"
          class="!rounded-xl !bg-linear-to-r !from-pink-500 !to-violet-500 !text-3xl !md:text-4xl"
        />
      </section>
      <div
        class="relative w-full flex flex-col items-center h-full"
      >
        <section
          class="w-full fixed bottom-0 inset-x-0 h-[60vh] overflow-hidden"
        >
          <Spline :scene="sceneUrl" />
        </section>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Spline } from "@/components/ui/spline";
import { ParticlesBg } from "@/components/ui/particles-bg";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import LogoImage from "/assets/logo.png";
const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
</script>
