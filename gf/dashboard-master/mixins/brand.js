import { MANAGEMENT } from '@/config/types';
import { getVendor } from '@/config/private-label';
import { SETTING } from '@/config/settings';
import { findBy } from '@/utils/array';
import { createCssVars } from '@/utils/color';

export default {
  async fetch() {
    this.globalSettings = await this.$store.getters['management/all'](MANAGEMENT.SETTING);
  },

  data() {
    return { globalSettings: [], brandCookie: null };
  },

  computed: {
    brand() {
      const setting = findBy(this.globalSettings, 'id', SETTING.BRAND);

      return setting?.value;
    },

    color() {
      const setting = findBy(this.globalSettings, 'id', SETTING.PRIMARY_COLOR);

      return setting?.value;
    },

    linkColor() {
      const setting = findBy(this.globalSettings, 'id', SETTING.LINK_COLOR);

      return setting?.value;
    },

    theme() {
      return this.$store.getters['prefs/theme'];
    }
  },

  watch: {
    color(neu) {
      if (neu) {
        this.setCustomColor(neu);
      } else {
        this.removeCustomColor();
      }
    },
    linkColor(neu) {
      if (neu) {
        this.setCustomColor(neu, 'link');
      } else {
        this.removeCustomColor('link');
      }
    },
    theme() {
      if (this.color) {
        this.setCustomColor(this.color);
      }
      if (this.linkColor) {
        this.setCustomColor(this.linkColor, 'link');
      }
    },
  },
  methods: {
    setCustomColor(color, name = 'primary') {
      const vars = createCssVars(color, this.theme, name);

      for (const prop in vars) {
        document.body.style.setProperty(prop, vars[prop]);
      }
    },

    removeCustomColor(name = 'primary') {
      const vars = createCssVars('rgb(0,0,0)', this.theme, name);

      for (const prop in vars) {
        document.body.style.removeProperty(prop);
      }
    }
  },
  head() {
    let cssClass = `overflow-hidden dashboard-body`;

    let brandMeta;

    try {
      brandMeta = require(`~/assets/brand/${ this.brand }/metadata.json`);
    } catch {
      return {
        bodyAttrs: { class: `theme-${ this.theme } ${ cssClass }` },
        title:     getVendor(),
      };
    }

    if (brandMeta?.hasStylesheet === 'true') {
      cssClass = `${ cssClass } ${ this.brand } theme-${ this.theme }`;
    } else {
      cssClass = `theme-${ this.theme } overflow-hidden dashboard-body`;
      this.$store.dispatch('prefs/setBrandStyle', this.theme === 'dark');
    }

    return {
      bodyAttrs: { class: cssClass },
      title:     getVendor(),
    };
  },

};
