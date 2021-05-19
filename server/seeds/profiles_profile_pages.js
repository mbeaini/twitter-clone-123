
const profilePageData = require("../seed_data/profile_pages");
  const profileData = require("../seed_data/profiles");

  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("profiles")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("profiles").insert(profileData);
      })
      .then(() => {
        return knex("profile_pages").del();
      })
      .then(() => {
        // Inserts seed entries
        return knex("profiles")
          .pluck("id")
          .then(profileIds => {
            return profileIds;
          });
      })
      .then(profileIds => {
        const profilePageDataWithProfileIds = profilePageData.map(profilePage => {
          profilePage.profile_id =
            profileIds[Math.floor(Math.random() * profileIds.length)];
          return profilePage;
        });
        return knex("profile_pages").insert(profilePageDataWithProfileIds);
      });
  };
