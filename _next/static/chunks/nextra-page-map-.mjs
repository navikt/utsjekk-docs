import meta from "../../../pages/_meta.ts";
import kom_i_gang_meta from "../../../pages/kom_i_gang/_meta.ts";
import kom_i_gang_utbetaling_meta from "../../../pages/kom_i_gang/utbetaling/_meta.ts";
import kom_i_gang_utbetaling_data_inn_meta from "../../../pages/kom_i_gang/utbetaling/data_inn/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "api_spesifikasjon",
  route: "/api_spesifikasjon",
  frontMatter: {
    "title": "API-spesifikasjon"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Om tjenesten"
  }
}, {
  name: "kom_i_gang",
  route: "/kom_i_gang",
  children: [{
    data: kom_i_gang_meta
  }, {
    name: "avstemming",
    route: "/kom_i_gang/avstemming",
    frontMatter: {
      "title": "Avstemming"
    }
  }, {
    name: "index",
    route: "/kom_i_gang",
    frontMatter: {
      "title": "Kom i gang"
    }
  }, {
    name: "status",
    route: "/kom_i_gang/status",
    frontMatter: {
      "title": "Status på utbetaling"
    }
  }, {
    name: "utbetaling",
    route: "/kom_i_gang/utbetaling",
    children: [{
      data: kom_i_gang_utbetaling_meta
    }, {
      name: "data_inn",
      route: "/kom_i_gang/utbetaling/data_inn",
      children: [{
        data: kom_i_gang_utbetaling_data_inn_meta
      }, {
        name: "beskrivelse",
        route: "/kom_i_gang/utbetaling/data_inn/beskrivelse",
        frontMatter: {
          "title": "Beskrivelse av felter"
        }
      }, {
        name: "eksempler",
        route: "/kom_i_gang/utbetaling/data_inn/eksempler",
        frontMatter: {
          "title": "Eksempeldata"
        }
      }]
    }, {
      name: "FAQ",
      route: "/kom_i_gang/utbetaling/FAQ",
      frontMatter: {
        "title": "FAQ"
      }
    }, {
      name: "iverksetting",
      route: "/kom_i_gang/utbetaling/iverksetting",
      frontMatter: {
        "title": "Iverksetting"
      }
    }, {
      name: "meldepliktsytelser",
      route: "/kom_i_gang/utbetaling/meldepliktsytelser",
      frontMatter: {
        "title": "Meldepliktsytelser"
      }
    }, {
      name: "simulering",
      route: "/kom_i_gang/utbetaling/simulering",
      frontMatter: {
        "title": "Simulering"
      }
    }]
  }]
}];