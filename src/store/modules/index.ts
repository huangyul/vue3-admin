const modules = {}

const files = require.context('./', false, /\.ts$/)

files.keys().forEach((name) => {
  if (name !== './indes.ts') {
    const key = name.replace('./', '').replace('.ts', '')
    modules[key] = {
      ...files(name).default,
    }
  }
})

export default modules
