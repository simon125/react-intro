import React, { useState } from "react";

const Cmp1 = () => {
  return <div>cmp1</div>;
};
const Cmp2 = () => {
  return <div>cmp2</div>;
};

export const ConditionalDisplaying = () => {
  const [showCmp1, setShowCmp1] = useState(false);
  const [showInGeneral, setShowInGeneral] = useState(true);

  //   const handleShowCmpToggleClick = () => {
  //     setShowCmp1(!showCmp1);
  //   };

  const handleShowCmpToggleClick = (e) => {
    setShowCmp1(e.target.checked);
  };

  const handleShowInGeneral = () => {
    setShowInGeneral(!showInGeneral);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={showCmp1}
        onChange={handleShowCmpToggleClick}
      />
      <input
        type="checkbox"
        checked={showInGeneral}
        onChange={handleShowInGeneral}
      />
      {showCmp1 ? <Cmp1 /> : <Cmp2 />}
      {showInGeneral && showCmp1 && <Cmp1 />}
    </div>
  );
};
