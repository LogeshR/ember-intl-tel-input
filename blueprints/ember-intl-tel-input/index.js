module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('intl-tel-input', 'git://github.com/LogeshR/intl-tel-input.git');
  }
};
