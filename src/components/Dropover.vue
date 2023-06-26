<script>
function drop(e) {
    e.preventDefault();
    this.isDragging = false;
    this.onChange();
}

function dragover(e) {
    e.preventDefault();
    this.isDragging = true;
}

function dragleave(e) {
    e.preventDefault();
    this.isDragging = false;
}
</script>

<template>
    <div class="main">
    <div
      class="dropzone-container"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        name="file"
        id="fileInput"
        class="hidden-input"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="fileInput" class="file-label">
        <div v-if="isDragging">Release to drop files here.</div>
        <div v-else>Drop files here or <u>click here</u> to upload.</div>
      </label>
    </div>
  </div>
</template>