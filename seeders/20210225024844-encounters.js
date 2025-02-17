module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('encounters', [{
      encounterText: 'You awaken to the sounds of squealing alarms and crackling electronics. Beyond the viewport of your downed spacecraft you can see the hazy outlines of a forested alien world, slightly obscured by the smoke billowing out from your ship. A brief look at the (slightly damaged) ship computer indicates that the atmosphere outside is breathable. You just need to decide what to do next...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      encounterText: 'With the fire out, you can take a look at the engine. Everything looks to be okay, except that it looks like your warp belt flew out at some point during the crash. If you could just get that back, you could get out of here...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      encounterText: 'You finally get down to the front of the ship to take a look at the engine. You pop the hood and realize the fire, though small originally, has now damaged most of the engine. It will need quite a bit of work to get running again, if at all...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      encounterText: 'Once your ejection seat breaks through the foliage you are able to unstrap yourself, and drop to the forest floor. While scraping splattered bugs off your suit and forehead, you consider what to do next. It’s a trek back to your ship, but you had also noticed a town off in the distance while drifting over the forest...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      encounterText: 'You cut your way through the underbrush, searching for any components from your ship that may have been ejected from the crash. With a lot of luck, you’ll come across something you need...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      encounterText: 'You arrive in town. It is a a tough looking frontier town; saloons, loose carry restrictions, and lots of dust. You notice a few likely looking establishments- the only thing is to decide which store to try...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      encounterText: 'You awaken on the shore of a large river set in an enormous floodplain. Though you are fortunate that you did not drown in the river, you still have no idea how long you were out, how long you drifted, or where your ship is now. Time to decide what to do next...',
      createdAt: new Date(),
      updatedAt: new Date(),

  }]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('encounters', null, {});
  },
};
