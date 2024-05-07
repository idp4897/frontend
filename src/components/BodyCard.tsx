"use client";

import { Card } from "antd";
import React from "react";

export const BodyCard = (props: {
  children: JSX.Element;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}): JSX.Element => {
  const { children, title, footer } = props;
  const [height, setHeight] = React.useState<number>(0);
  const hasWindow = () => {
    return typeof window === "object";
  };

  React.useLayoutEffect(() => {
    if (hasWindow()) {
      setHeight(globalThis.window.innerHeight);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: height, padding: 16 }}>
      <Card
        style={{ height: "100%" }}
        title={title}
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            height: "94%",
          },
        }}
      >
        {children}
        <div
          style={{
            flex: "1 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {footer}
        </div>
      </Card>
    </div>
  );
};
