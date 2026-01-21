export const campaigns = {
  data: function () {
    return {
      parent: null
    }
  },
  mounted: function () {
    this.parent = this.$root

    if (!this.parent.user || !this.parent.user.auth) {
      this.parent.logout()
    }
  },
  methods: {},
  template: `
      <div>
          Campaigns
      </div>
        
  `
}
