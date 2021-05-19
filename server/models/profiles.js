const bookshelf = require("../bookshelf");

const Profiles = bookshelf.model("Profile", {
    tableName:"profiles",
    pages: function(){
        return this.hasOne("ProfilePage");
    },
    posts: function(){
        return this.hasMany("Post")
    }
})