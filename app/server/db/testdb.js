var users = [
        {name: "Terry Boldwin",     phone: "02082282481", active: false},
        {name: "Andy Halwin",       phone: "02072282483", active: false},
        {name: "Ronald Gedwin",     phone: "02072282441", active: false},
        {name: "Patric Lenon",      phone: "02072282481", active: true},
        {name: "Samuel Peterson",   phone: "02072292481", active: false},
        {name: "Eric Boldwin",      phone: "02072286481", active: false},
        {name: "Karen Fentman",     phone: "02072282480", active: false},
        {name: "Cecilia Ligerman",  phone: "02072282489", active: true},
        {name: "Harry Fartend",     phone: "02082282481", active: false},
        {name: "Andy Parson",       phone: "02077282481", active: false},
        {name: "Roland Toldwin",    phone: "02071282481", active: false},
        {name: "Henry Emorwin",     phone: "02072282081", active: true},
        {name: "Paul Smith",        phone: "02072082481", active: false}
    ];

module.exports = {
  getAll: function() {
    return users;
  },
  getById: function (id) {
        return this.getAll().find(item=>item.name==id);
  },
  getActive: function () {
        return this.getAll().filter(item=>item.active==true);
  },
  activatePhoneNumber: function (id) {
        var res = null;
        res = this.getAll().find(item=>item.name==id);
        console.log("id: "+id);
        res.active = true;
  }
};