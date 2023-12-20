import { useEffect, useState } from "react";
import { CreatePassword } from "../API/APICalls";

const usePassword = () => {
  const [password, setPassword] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const onSaveButton = async () => {
    const response = await CreatePassword(password);
    setPassword("");
    if (response == "OK") {
      setUserMessage("Password Created Successfully!");
    } else {
      setUserMessage("Something went wrong :X");
    }
    setTimeout(() => {
      setUserMessage("");
    }, 5000);
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
  return { password, handlePasswordChange, onSaveButton, userMessage };
};
export default usePassword;
