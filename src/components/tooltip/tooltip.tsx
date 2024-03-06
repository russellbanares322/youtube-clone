"use client";

import React, { useState } from "react";

type TooltipProps = {
  children: React.ReactNode;
  title: string;
};

const Tooltip = ({ children, title }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnter = () => {
    setShowTooltip(true);
  };

  const onMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </div>
      <p
        className={`absolute top-12 -right-6 bg-light-gray text-white rounded-sm p-2 text-xs ${
          !showTooltip && "scale-0"
        } duration-150 ease-in-out`}
      >
        {title}
      </p>
    </div>
  );
};

export default Tooltip;
