import { useState, useEffect, useContext } from "react";
//import { makeStyles } from "@mui/material";

type useFormProps = {
  firstName: string;
};

export function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

/* const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props: any) {
  const classes = useStyles();

  return <form className={classes.root}>{props.children}</form>;
}
 */
