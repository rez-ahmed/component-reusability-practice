import "./App.css";
import CustomInput from "@/components/CustomInput";
import { AiOutlineMail, AiFillLock, AiOutlineUser } from "react-icons/ai";
import FormButton from "@/components/FormButton";

export default function Home() {
  return (
    <>
      <main>
        <form>
          <CustomInput
            icon={<AiOutlineUser />}
            type={"text"}
            placeholder={"Enter your Name"}
          />
          <CustomInput
            icon={<AiOutlineUser />}
            type={"text"}
            placeholder={"Enter Business Name"}
          />
          <CustomInput
            icon={<AiOutlineMail />}
            type={"text"}
            placeholder={"Enter your Email"}
          />
          <CustomInput
            icon={<AiFillLock />}
            type={"password"}
            placeholder={"Enter your Password"}
          />
          <FormButton btnText={"Click to Proceed"} />
        </form>
      </main>
    </>
  );
}
