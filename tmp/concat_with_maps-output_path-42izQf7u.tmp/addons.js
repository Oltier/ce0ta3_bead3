define('ember-cli-app-version/components/app-version', ['exports', 'ember', 'ember-cli-app-version/templates/app-version'], function (exports, Ember, layout) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'span',
    layout: layout['default']
  });

});
define('ember-cli-app-version/initializer-factory', ['exports', 'ember'], function (exports, Ember) {

  'use strict';



  exports['default'] = initializerFactory;
  var classify = Ember['default'].String.classify;

  function initializerFactory(name, version) {
    var registered = false;

    return function () {
      if (!registered && name && version) {
        var appName = classify(name);
        Ember['default'].libraries.register(appName, version);
        registered = true;
      }
    };
  }

});
define('ember-cli-app-version/templates/app-version', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "modules/ember-cli-app-version/templates/app-version.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","version",["loc",[null,[1,0],[1,11]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ember-cli-app-version', ['ember-cli-app-version/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-cli-content-security-policy', ['ember-cli-content-security-policy/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('ember-pikaday/components/pikaday-input', ['exports', 'ember', 'moment'], function (exports, Ember, moment) {

  'use strict';

  /* globals Pikaday */

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'input',
    attributeBindings: ['readonly', 'disabled', 'placeholder', 'type', 'name', 'size', 'required'],
    type: 'text',

    setupPikaday: Ember['default'].on('didInsertElement', function () {
      var that = this;
      var firstDay = this.get('firstDay');

      var options = {
        field: this.$()[0],
        onOpen: Ember['default'].run.bind(this, this.onPikadayOpen),
        onClose: Ember['default'].run.bind(this, this.onPikadayClose),
        onSelect: Ember['default'].run.bind(this, this.onPikadaySelect),
        onDraw: Ember['default'].run.bind(this, this.onPikadayRedraw),
        firstDay: typeof firstDay !== 'undefined' ? parseInt(firstDay, 10) : 1,
        format: this.get('format') || 'DD.MM.YYYY',
        yearRange: that.determineYearRange(),
        minDate: this.get('minDate') || null,
        maxDate: this.get('maxDate') || null,
        theme: this.get('theme') || null
      };

      if (this.get('i18n')) {
        options.i18n = this.get('i18n');
      }

      var pikaday = new Pikaday(options);

      this.set('pikaday', pikaday);
      this.setPikadayDate();

      this.addObserver('value', function () {
        that.setPikadayDate();
      });

      this.addObserver('minDate', function () {
        this.setMinDate();
      });

      this.addObserver('maxDate', function () {
        this.setMaxDate();
      });
    }),

    teardownPikaday: Ember['default'].on('willDestroyElement', function () {
      this.get('pikaday').destroy();
    }),

    setPikadayDate: function setPikadayDate() {
      this.get('pikaday').setDate(this.get('value'), true);
    },

    setMinDate: function setMinDate() {
      this.get('pikaday').setMinDate(this.get('minDate'));
    },

    setMaxDate: function setMaxDate() {
      this.get('pikaday').setMaxDate(this.get('maxDate'));
    },

    onPikadayOpen: Ember['default'].K,

    onPikadayClose: function onPikadayClose() {
      if (this.get('pikaday').getDate() === null || Ember['default'].isEmpty(this.$().val())) {
        this.set('value', null);
      }
    },

    onPikadaySelect: function onPikadaySelect() {
      this.userSelectedDate();
    },

    onPikadayRedraw: Ember['default'].K,

    userSelectedDate: function userSelectedDate() {
      var selectedDate = this.get('pikaday').getDate();

      if (this.get('useUTC')) {
        selectedDate = moment['default'].utc([selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]).toDate();
      }

      this.set('value', selectedDate);
    },

    determineYearRange: function determineYearRange() {
      var yearRange = this.get('yearRange');

      if (yearRange) {
        if (yearRange.indexOf(',') > -1) {
          var yearArray = yearRange.split(',');

          if (yearArray[1] === 'currentYear') {
            yearArray[1] = new Date().getFullYear();
          }

          return yearArray;
        } else {
          return yearRange;
        }
      } else {
        return 10;
      }
    },

    autoHideOnDisabled: Ember['default'].observer('disabled', 'pikaday', function () {
      if (this.get('disabled') && this.get('pikaday')) {
        this.get('pikaday').hide();
      }
    })
  });

});
define('ember-pikaday/helpers/pikaday', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var $ = Ember['default'].$;

  var openDatepicker = function openDatepicker(element) {
    $(element).click();

    return PikadayInteractor;
  };

  var PikadayInteractor = {
    selectorForMonthSelect: '.pika-select-month:visible',
    selectorForYearSelect: '.pika-select-year:visible',
    selectDate: function selectDate(date) {
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var selectEvent = 'ontouchend' in document ? 'touchend' : 'mousedown';

      $(this.selectorForYearSelect).val(year);
      triggerNativeEvent($(this.selectorForYearSelect)[0], 'change');
      $(this.selectorForMonthSelect).val(month);
      triggerNativeEvent($(this.selectorForMonthSelect)[0], 'change');

      triggerNativeEvent($('td[data-day="' + day + '"] button:visible')[0], selectEvent);
    },
    selectedDay: function selectedDay() {
      return $('.pika-single td.is-selected button').html();
    },
    selectedMonth: function selectedMonth() {
      return $(this.selectorForMonthSelect + ' option:selected').val();
    },
    selectedYear: function selectedYear() {
      return $(this.selectorForYearSelect + ' option:selected').val();
    },
    minimumYear: function minimumYear() {
      return $(this.selectorForYearSelect).children().first().val();
    },
    maximumYear: function maximumYear() {
      return $(this.selectorForYearSelect).children().last().val();
    }
  };

  function triggerNativeEvent(element, eventName) {
    if (document.createEvent) {
      var event = document.createEvent('Events');
      event.initEvent(eventName, true, false);
      element.dispatchEvent(event);
    } else {
      element.fireEvent('on' + eventName);
    }
  }

  exports.openDatepicker = openDatepicker;

});
define('ember-pikaday', ['ember-pikaday/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});

define('moment/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ComparableMoment = Ember['default'].Object.extend(Ember['default'].Comparable, moment.fn, {
    compare: function compare(a, b) {
      if (moment.isMoment(a) && moment.isMoment(b) && a.isBefore(b)) {
        return -1;
      } else if (moment.isMoment(a) && moment.isMoment(b) && a.isAfter(b)) {
        return 1;
      } else if (moment.isMoment(a) && !moment.isMoment(b)) {
        return 1;
      } else if (moment.isMoment(b)) {
        return -1;
      }

      return 0;
    }
  });

  var comparableMoment = function comparableMoment() {
    return ComparableMoment.create(moment.apply(this, arguments));
  };

  for (var momentProp in moment) {
    if (moment.hasOwnProperty(momentProp)) {
      comparableMoment[momentProp] = moment[momentProp];
    }
  }

  // Wrap global moment methods that return a full moment object
  ['utc', 'unix'].forEach(function (method) {
    comparableMoment[method] = function () {
      return ComparableMoment.create(moment[method].apply(this, arguments));
    };
  });

  ComparableMoment.reopen({
    clone: function clone() {
      return comparableMoment(this);
    }
  });

  exports['default'] = comparableMoment;

});
define('moment', ['moment/index', 'ember', 'exports'], function(__index__, __Ember__, __exports__) {
  'use strict';
  var keys = Object.keys || __Ember__['default'].keys;
  var forEach = Array.prototype.forEach && function(array, cb) {
    array.forEach(cb);
  } || __Ember__['default'].EnumerableUtils.forEach;

  forEach(keys(__index__), (function(key) {
    __exports__[key] = __index__[key];
  }));
});
//# sourceMappingURL=addons.map