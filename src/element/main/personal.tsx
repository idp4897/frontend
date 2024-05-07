import { Button, Form, FormInstance, Input, Typography, Upload } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

const { Text } = Typography;

export const PersonalInformationElement = (props: {
  form: FormInstance<any>;
}) => {
  const { form } = props;

  //#region component
  const FormComponent = (props: {
    children: JSX.Element;
    formName: string;
    label: string;
  }) => {
    const { children, formName, label } = props;
    return (
      <Form.Item
        name={formName}
        label={<Text style={{ fontSize: 18 }}>{`${label} :`}</Text>}
      >
        {children}
      </Form.Item>
    );
  };
  //#endregion

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        margin: "auto",
        marginTop: 16,
      }}
    >
      <Form form={form} layout="vertical">
        <FormComponent
          formName="name"
          label="ชื่อและนามสกุล (เติมคำนำหน้าชื่อ)"
        >
          <Input />
        </FormComponent>
        <Text>ที่อยู่ตามบัตรประชาชน</Text>
        <FormComponent formName="road" label="ถนน">
          <Input />
        </FormComponent>
        <FormComponent formName="soi" label="ซอย">
          <Input />
        </FormComponent>
        <FormComponent formName="moo" label="หมู่">
          <Input />
        </FormComponent>
        <FormComponent formName="tambon" label="ตำบล/แขวง">
          <Input />
        </FormComponent>
        <FormComponent formName="district" label="อำเภอ/เขต">
          <Input />
        </FormComponent>
        <FormComponent formName="province" label="จังหวัด">
          <Input />
        </FormComponent>
        <FormComponent formName="tel_no" label="เบอร์โทรศัพท์">
          <Input />
        </FormComponent>

        <FormComponent
          formName="img"
          label="ภาพบันทึกประจำวัน (ใช้เพื่อยืนยันว่าเป็นคดีอะไร ให้ท่านทำการถ่ายรูปและแนบไฟล์เข้าช่องทางนี้)"
        >
          <Upload>
            <Button>
              <AiOutlinePlus />
            </Button>
          </Upload>
        </FormComponent>
      </Form>
    </div>
  );
};
