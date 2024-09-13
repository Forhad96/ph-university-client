import Form from "antd/es/form/Form";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
// type TDefaultValues = {
//   userId: string;
//   password: string;
// };
type TFromConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolver?: any;
};

type TPHFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  // defaultValues?: TDefaultValues;
} & TFromConfig;

const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TPHFormProps) => {
  const fromConfig: TFromConfig = {};
  if (defaultValues) {
    fromConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    fromConfig["resolver"] = resolver;
  }
  const methods = useForm(fromConfig);



  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
