Vue.component('ip-adress', {
    props: ['ip'],
    template: '<p class="ip-address">{{ip}}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        ipInfo: {
            ip: ''
        },
    },
    mounted: function() {
        this.getInfo();
    },
    methods: {
        getInfo: function() {
            var request = new XMLHttpRequest();
            request.open('GET', 'https://ipinfo.io/json');
            request.send();

            request.onreadystatechange = function() {
                if (request.status == 200 && request.response) {
                    var ipInfo = JSON.parse(request.responseText);

                    app.ipInfo = ipInfo;
                }
            };
        }
    },
});


