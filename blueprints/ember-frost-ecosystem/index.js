module.exports = {
  description: '',
  normalizeEntityName: function () {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
  afterInstall: function () {
    return this.addAddonsToProject({ packages: [{name: 'ember-cli-ember-ecosystem'}] })
  }
}
