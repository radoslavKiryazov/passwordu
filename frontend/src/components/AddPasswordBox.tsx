import usePassword from "../hooks/usePassword";
const AddPasswordBox = () => {
  const { password, handlePasswordChange, onSaveButton } = usePassword();
  return (
    <div className="bg-red-200 w-[500px] h-[500px] flex flex-col p-2 space-y-2">
      <h1 className="text-2xl"> Add Password </h1>
      <input
        type="text"
        className="px-1"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="border w-[5rem]" onClick={onSaveButton}>
        {" "}
        Save{" "}
      </button>
    </div>
  );
};
export default AddPasswordBox;
