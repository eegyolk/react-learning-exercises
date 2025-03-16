import { useState, useEffect } from "react";

function MyFunctionalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("MyFunctionalComponent Component Mounted!");

    return () => {
      console.log("MyFunctionalComponent Component Unmounted!"); // Cleanup function (like componentWillUnmount)
    };
  }, []);

  useEffect(() => {
    console.log("MyFunctionalComponent Component Updated! Count:", count);
  }, [count]);

  return (
    <div className="card">
      <h1>Functional Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyFunctionalComponent;
