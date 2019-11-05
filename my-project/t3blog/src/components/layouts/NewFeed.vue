<template>
  <div id="editor">
    <textarea :value="input" @input=update></textarea>
    <div id="markdown-display" v-html="compiledMarkdown"></div>
  </div>
</template>


<script>

export default {
  name: "newFeed",
  data() {
    return {
      input: "# "
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true } )
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value
    }, 300)
  }
}

</script>

<style scoped>
  #editor{
    font-family: 'Helvetica Neue', Arial, sans-serif;
    margin: 30px 50px;
    height: 900px;
    text-align: left;
  }
  #editor #markdown-display {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: scroll;
  }

  #editor textarea { 
    width: 49%;
    height: 100%;
    overflow: scroll;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
  }

</style>