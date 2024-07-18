(function () {
	'use strict';

	var byId = function (id) { return document.getElementById(id); },

		loadScripts = function (desc, callback) {
			var deps = [], key, idx = 0;

			for (key in desc) {
				deps.push(key);
			}

			(function _next() {
				var pid,
					name = deps[idx],
					script = document.createElement('script');

				script.type = 'text/javascript';
				script.src = desc[deps[idx]];

				pid = setInterval(function () {
					if (window[name]) {
						clearTimeout(pid);

						deps[idx++] = window[name];

						if (deps[idx]) {
							_next();
						} else {
							callback.apply(null, deps);
						}
					}
				}, 30);

				document.getElementsByTagName('head')[0].appendChild(script);
			})()
		},

		console = window.console;


	if (!console.log) {
		console.log = function () {
			alert([].join.apply(arguments, ' '));
		};
	}


	Sortable.create(byId('foo'), {
		group: "words",
		animation: 150,
		store: {
			get: function (sortable) {
				var order = localStorage.getItem(sortable.options.group);
				return order ? order.split('|') : [];
			},
			set: function (sortable) {
				var order = sortable.toArray();
				localStorage.setItem(sortable.options.group, order.join('|'));
			}
		},
	});
	/*Sortable.create(byId('foo2'), {
		group: "words",
		animation: 150,
		store: {
			get: function (sortable) {
				var order = localStorage.getItem(sortable.options.group);
				return order ? order.split('|') : [];
			},
			set: function (sortable) {
				var order = sortable.toArray();
				localStorage.setItem(sortable.options.group, order.join('|'));
			}
		},
	});*/
	
	Sortable.create(byId('bar'), {
		group: "words",
		animation: 150
	});
	Sortable.create(byId('bar1'), {
		group: "words",
		animation: 150
	});
	Sortable.create(byId('bar2'), {
		group: "words",
		animation: 150
	});
	Sortable.create(byId('bar3'), {
		group: "words",
		animation: 150
	});
	Sortable.create(byId('bar4'), {
		group: "words",
		animation: 150
	});
	Sortable.create(byId('bar5'), {
		group: "words",
		animation: 150
	});
	Sortable.create(byId('bar6'), {
		group: "words",
		animation: 150
	});
	Sortable.create(byId('bar7'), {
		group: "words",
		animation: 150
	});Sortable.create(byId('bar8'), {
		group: "words",
		animation: 150
	});Sortable.create(byId('bar9'), {
		group: "words",
		animation: 150
	});Sortable.create(byId('bar10'), {
		group: "words",
		animation: 150
	});Sortable.create(byId('bar11'), {
		group: "words",
		animation: 150
	});Sortable.create(byId('bar12'), {
		group: "words",
		animation: 150
	});Sortable.create(byId('bar13'), {
		group: "words",
		animation: 150
	});
})();

// Background
/*document.addEventListener("DOMContentLoaded", function () {
	function setNoiseBackground(el, width, height, opacity) {
		var canvas = document.createElement("canvas");
		var context = canvas.getContext("2d");

		canvas.width = width;
		canvas.height = height;

		for (var i = 0; i < width; i++) {
			for (var j = 0; j < height; j++) {
				var val = Math.floor(Math.random() * 255);
				context.fillStyle = "rgba(" + val + "," + val + "," + val + "," + opacity + ")";
				context.fillRect(i, j, 1, 1);
			}
		}

		el.style.background = "url(" + canvas.toDataURL("image/png") + ")";
	}

	setNoiseBackground(document.getElementsByTagName('body')[0], 50, 50, 0.02);
}, false);*/
