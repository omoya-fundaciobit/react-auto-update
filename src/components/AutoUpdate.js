import React, { useState, useEffect } from "react";

/**
 *  Component that displays periodical updates (datetimes)
 *  UseState and useEffect hooks come in play
 *  The updates state will be an array of datetimes.
 *  A new datetime (current date) will be added every 10 seconds. Operation carried by a useEffect.
 *  every state change will trigger a rerender
 *  Only a subset of updates is shown (the last 5 updates)
 */

function AutoUpdate() {
  // state definition
  const [updates, setUpdates] = useState([]);
  console.log(updates);

  // useEffect
  // it triggers peridocial updates
  // a cleanup function is included to abort updates once the component unmounts

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      var nextUpdates = updates.concat(new Date().toString());
      setUpdates(nextUpdates);
    }, 3000);

    return () => clearInterval(refreshInterval);
  });

  // render the updates content
  // loop updates and create a paragraph per entry
  return (
    <div>
      {updates.slice(-5).map((update) => (
        <p>{update}</p>
      ))}
    </div>
  );
}

export default AutoUpdate;
