"use server";

type FormState = {
  sucess: boolean;
  errors?: Record<string, string[]>;
  message: string;
};

export const addProductAction = async (
  prevState: FormState,
  formData: FormData
) => {
  console.log(formData);

  return {
    success: true,
    errors: {},
    message: "Product added successfully",
  };
};
