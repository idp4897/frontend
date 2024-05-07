"use client";

import { BodyCard } from "@/components/BodyCard";
import { LandingElement } from "@/element/main/landing";
import { PersonalInformationElement } from "@/element/main/personal";
import { Button, Card, Form, Radio, Steps, Typography } from "antd";
import { title } from "process";
import React from "react";

const { Text } = Typography;

const IndexPage = () => {
  const [form] = Form.useForm();

  const [current, setCurrent] = React.useState<number>(0);

  const steps: { title: string; content: React.ReactNode }[] =
    React.useMemo(() => {
      return [
        {
          title: "Landing",
          content: <LandingElement form={form} />,
        },
        {
          title: "Personal Information",
          content: <PersonalInformationElement form={form} />,
        },
      ];
    }, [form]);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  //#region function
  const onStepChange = (type: "NEXT" | "BACK") => {
    if (current === 0) {
      if (type === "NEXT") {
        setCurrent(current + 1);
      }
    } else {
      if (type === "BACK") {
        setCurrent(current - 1);
      } else {
        setCurrent(current + 1);
      }
    }
  };
  //#endregion

  return (
    <BodyCard
      title={
        <Text style={{ color: "black", fontSize: 24 }}>Police Helper</Text>
      }
      footer={
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={() => onStepChange("BACK")}>Back</Button>
          <Button onClick={() => onStepChange("NEXT")}>Next</Button>
        </div>
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Steps current={current} items={items} />
        {steps[current].content}
      </div>
    </BodyCard>
  );
};

export default IndexPage;
