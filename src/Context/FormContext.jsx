import { useState, useContext, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [gst, setGst] = useState("");
  const [fax, setFax] = useState("");

  /////// Payment Setup /?????
  const [bill, setBlling] = useState("");
  const [states, setStates] = useState("");
  const [citys, setCitys] = useState("");
  const [pins, setPins] = useState("");
  const [sites, setSites] = useState("");
  const [payment, setPayment] = useState("");
  const [discount, setDiscount] = useState("");
  const [reason, setReason] = useState("");
  const [mode, setMode] = useState("");
  const [pending, setPending] = useState("");
  return (
    <FormContext.Provider
      value={{
        name,
        website,
        category,
        company,
        email,
        phone,
        state,
        city,
        pin,
        gst,
        fax,
        bill,
        setBlling,
        states,
        setStates,
        citys,
        setCitys,
        pins,
        setPins,
        sites,
        setSites,
        payment,
        setPayment,
        discount,
        setDiscount,
        reason,
        setReason,
        mode,
        setMode,
        pending,
        setPending,

        setName,
        setWebsite,
        setCategory,
        setCompany,
        setPhone,
        setEmail,
        setState,
        setCity,
        setPin,
        setGst,
        setFax,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
