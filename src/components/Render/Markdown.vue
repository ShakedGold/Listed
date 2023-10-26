<script setup>
import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/github.css';
import MarkdownItLinkAttributes from "markdown-it-link-attributes";

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const plugins = [
  {
    plugin: MarkdownItLinkAttributes,
    options: {
      attrs: {
        target: "_blank",
        rel: "noopener",
        class: 'text-accent'
      },
    }
  }
];
</script>

<template>
  <Markdown class="notw" linkify typographer breaks :source="src" :plugins="plugins" />
</template>