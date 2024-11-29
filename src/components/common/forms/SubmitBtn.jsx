import React from "react";
import PrimaryButton from "../PrimaryButton";

export default function SubmitBtn({ children }) {
    return <PrimaryButton type={"submit"}>{children}</PrimaryButton>;
}
