/*
* home
* author: ronglin
* create date: 2014.6.30
*/

var mvc = require('../mvc/index');

mvc.controller(function(req, res, end, tempdata, viewdata, session) {

    this.action('index', function() {

        //
        var text = tempdata.get('text');
        if (!text) { tempdata.set('text', 'aaa'); }

        //
        var count = session.count;
        if (!count) { count = session.count = 1; }
        else { count = ++session.count; }

        //
        viewdata['title'] = 'rulee viewData';
        setTimeout(function() {
            end.view();
            //end.json({ 
            //    sessionCount: count,
            //    tempdataText: text || 'none'
            //});
        }, 1);

        //
        //return this.json({ homeIndex: true });
    });

});