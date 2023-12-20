import usePassword from "../hooks/usePassword";
const AddPasswordBox = () => {
  const { password, handlePasswordChange, onSaveButton, userMessage } =
    usePassword();
  return (
    <div className="bg-red-200 w-[500px] h-[500px] flex flex-col p-2 space-y-2">
      <h1 className="text-2xl"> Add Password </h1>
      <input
        type="text"
        className="px-1"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="flex flex-row space-x-5">
        <button className="border w-[5rem]" onClick={onSaveButton}>
          Save
        </button>
        <p>{userMessage}</p>
      </div>
    </div>
  );
};
export default AddPasswordBox;
