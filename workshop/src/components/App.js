import React from "react";

function App() {
  const [placeholder, setPlaceholder] = React.useState(
    "Let's get started! You can delete this state as you won't need it going forward."
  );
  return <div>{placeholder}</div>;
}

export default App;
