function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

function formatter(eventDate, eventDescription) {
  return {
    updatedAt: `${eventDate.split('\n')[0]} - ${eventDate.split('\n')[1]}`,
    location: eventDate.split('\n')[2],
    event: eventDescription.split('\n')[0],
    description: eventDescription.split('\n')[1],
  };
}

module.exports = {
  sleep,
  formatter,
};
