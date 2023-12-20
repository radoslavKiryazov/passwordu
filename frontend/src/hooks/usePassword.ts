import { useEffect, useState } from "react";

const usePassword = () => {
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const onSaveButton = () => {
    //post request to backend
    console.log("save button clicked");
    console.log("password: ", password);
  };
  useEffect(() => {
    fetch("http://localhost:3000/passwords")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Could not fetch:", error);
      });
  }, []);
  return { password, handlePasswordChange, onSaveButton };
};
export default usePassword;
